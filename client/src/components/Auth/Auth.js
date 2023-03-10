import React, {useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';

const Auth = () => {

    const classes = useStyles();

    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    const handleShowPassword = () => setShowPassword((prevShowPassword)=> !prevShowPassword)

    const switchMode = () =>{
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={8}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form  className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus  half></Input>
                                    <Input name="lastName" label="Last Name" handleChange={handleChange}   half></Input>
                                </> 
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
                        
                    </Grid>
                    <Button type="submit" fullWidth variant='contained' color="primary" className={classes.submit}>
                        {isSignup ? "Sign Up" : "Sign In"}
                    </Button>
                    <Grid container justifyContent='flex-end' >
                        <Grid item >
                            <Button onClick={switchMode} > 
                                {isSignup ? 'Already have a account? Sign In': `Dont't have an account: Sign Up`}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>

        </Container>
    )
}

export default Auth;