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

    const { email, password } = state;

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
                            <form >
                                <Grid container direction="column" spacing={2}>
                                    <Grid item>
                                        <TextField
                                            type="email"
                                            placeholder="Email"
                                            fullWidth
                                            name="username"
                                            variant="outlined"
                                            value={email}
                                            required
                                            autoFocus
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
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
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