import React from 'react'
import { Grid,AppBar, Toolbar, IconButton, InputBase, makeStyles, Typography } from "@material-ui/core"
import { Search, Close } from "@material-ui/icons"

const useStyles = makeStyles((theme)=>({
    root:{
        backgroundColor:"#5d1049",
        boxShadow:"none",
        zIndex:"1"
    },
    input: {
        marginLeft: theme.spacing(1),
        flex:1,
        width:"85%",
        color:"#fff",       
    },
    text:{
        padding:theme.spacing(2,2,0)
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
        <div>
           <AppBar position="Fixed" className={classes.root}>
               <Toolbar>

                    {/* <InputBase
                        className={classes.input}
                        placeholder="Search "
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                <IconButton type="submit"  aria-label="search">
                    <Close style={{color:"#fff"}}/>
                </IconButton>    */}
                <Typography variant="h5" >
                    Vocab
                </Typography>
                    <div style={{flexGrow:"1"}}/>
                {/* <h3 style={{textAlign:"right"}}>Vocab</h3> */}
               <IconButton edge="end" >
                    <Search style={{color:"white"}}/>
                </IconButton>
               </Toolbar>
           </AppBar>
        </div>
    )
}

export { Header }
