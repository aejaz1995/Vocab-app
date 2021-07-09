import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import { ContactSupportOutlined } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { getWordSuccess } from "../Redux/app/actions";

const AddWord = ({ handleClose, open, setOpen }) => {
  const [word, setWord] = React.useState("");
  const [data, setData] = React.useState(null);
  const words = useSelector((state) => state.words);
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios
      .get(`http://localhost:8000`)
      .then((res) =>
        console.log(JSON.parse(res.data.data[0]?.lexicalEntries), "gttong")
      );
  }, []);

  const handleAdd = () => {
    getWord();
    handleClose();
  };

  const getWord = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(...res);

        axios
          .post(`http://localhost:8000/addWord`, {
            _id: word,
            lexicalEntries: JSON.stringify(...res),
          })
          .then((res) => {
            console.log(res, "post");
            dispatch(getWordSuccess([...words, res.data.data]));
          });
      });
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add to Dictionary</DialogTitle>
        <DialogContent>
          <DialogContentText>New word</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            fullWidth
            onChange={(e) => setWord(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export { AddWord };
