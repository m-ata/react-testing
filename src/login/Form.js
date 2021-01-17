import React, { useState } from "react";
import {
    Button,
    TextField,
    Grid,
    Paper,
    Typography,
} from "@material-ui/core";

const Login = () => {

    const [state, setState] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const { email, password } = state;

    const handleSubmit = () => {
        const isValid = validate();
        if (isValid) {

        } else {
            return;
        }
    }

    const validate = () => {
        const updatedErrors = { ...errors };
        let isValid = true;
        if (email) {
            var pattern = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
            if (!pattern.test(email)) {
                updatedErrors["email"] = "Please enter valid email address.";
                setErrors(updatedErrors);
                isValid = false;
            }
        }
        if (password) {
            if (password.length < 6) {
                updatedErrors["password"] = "Please enter atleast 6 character";
                setErrors(updatedErrors);
                isValid = false;
            }
        }
        return isValid;
    }

    return (
        <Grid container justify="center" alignItems="center" direction="row">
            <Grid item>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    spacing={2}
                >
                    <Paper
                        variant="elevation"
                        elevation={2}
                    >
                        <Grid item>
                            <Typography component="h1" variant="h5">
                                Login
                                </Typography>
                        </Grid>
                        <Grid item>
                            <form>
                                <Grid container direction="column" spacing={2}>
                                    <Grid item>
                                        <TextField
                                            // type="email"
                                            placeholder="Email"
                                            fullWidth
                                            name="username"
                                            variant="outlined"
                                            value={email}
                                            required
                                            autoFocus
                                            helperText={errors['email'] && errors['email']}
                                            onChange={(e) => {
                                                setState((prevState) => ({ ...prevState, email: e.target.value }));
                                            }}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            type="password"
                                            placeholder="Password"
                                            fullWidth
                                            name="password"
                                            variant="outlined"
                                            value={password}
                                            required
                                            onChange={(e) => {
                                                setState((prevState) => ({ ...prevState, password: e.target.value }))
                                            }}
                                            helperText={errors['password'] && errors['password']}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="button"
                                            disabled={!(email && password)}
                                            onClick={handleSubmit}
                                        >
                                            Submit
                                            </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Login;