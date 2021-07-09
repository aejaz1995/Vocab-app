import React, { useEffect } from "react";
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Fab,
  Divider,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { AddWord } from "./AddWord";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getWordSuccess } from "../Redux/app/actions";
import { useSpeechSynthesis } from "react-speech-kit";
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { IconButton } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "50px",
    paddingBottom: 50,
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    borderTop: "10px solid #5d1049",
    position: "relative",
    //   height:"100vh"
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  fabButton: {
    position: "sticky",
    zIndex: 1,
    // top: -30,
    bottom: 10,
    left: "100%",
    // right: 100,
    margin: "0 auto",
    backgroundColor: "#5d1049",
  },
  divider: {
    width: "100%",
    margin: 4,
  },
}));

const WordList = ({ searchWord }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  let words = useSelector((state) => state.words);
  // words =words.reverse()
  console.log(words, "words");
  console.log(searchWord);
  const dispatch = useDispatch();
  const { speak } = useSpeechSynthesis();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getData(searchWord);
  }, [searchWord]);

  const getData = (searchWord) => {
    return axios
      .get(`http://localhost:8000?id=${searchWord}`)
      .then((res) => {
        console.log(res.data.data, "from local");
        dispatch(getWordSuccess(res.data.data));
      })
      .catch(() => {
        console.log("somehting went wrong");
      });
  };

  return (
    <React.Fragment>
      <Paper square className={classes.paper}>
        {/* <Typography className={classes.text} variant="h5" gutterBottom>
          Inbox
        </Typography> */}
        <List className={classes.list}>
          {words.map((item) => (
            <React.Fragment key={item._id}>
              <ListItem /*button*/>
                <ListItemText
                  primary={<p>{item._id} <IconButton onClick={() => speak({ text: item._id })}><VolumeUpIcon /></IconButton> </p>}
                  secondary={`(${JSON.parse(item.lexicalEntries).meanings.map(
                    (item) =>
                      `${item.partOfSpeech}) ` +
                      `${item.definitions.map((item) => `${item.definition}`)}`
                  )}`}
                />
              </ListItem>
              <Divider className={classes.divider} orientation="horizontal" />
            </React.Fragment>
          ))}
        </List>
        <Fab
          aria-label="add"
          className={classes.fabButton}
          onClick={handleClickOpen}
        >
          <AddIcon style={{ color: "#fff" }} />
        </Fab>
      </Paper>
      <AddWord handleClose={handleClose} open={open} setOpen={setOpen} />
    </React.Fragment>
  );
};

export { WordList };
