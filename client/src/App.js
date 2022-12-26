import React, {useEffect, useState} from 'react';
import {Container, AppBar, Typography, Grow, Grid, formatMs, Box} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {getPosts} from './actions/posts'

import memories from './image/memories.png';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import useStyles from'./styles.js';



const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[currentId, dispatch]);

    return (
        
        <Container maxWidth = "lg">
            
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h3" align="left">Memories</Typography>
                <img className={classes.image} src={memories} alt="icon" height="50" />  
            </AppBar>
            
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justiy="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={5} >
                            
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                            
                            
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>

    );
}

export default App;