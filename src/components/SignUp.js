import React, { useState } from "react";
import { saveUser, getUser } from "../utils/indexedDB";
import { TextField, Button, Typography, Container, Card, CardContent } from "@mui/material";

const SignUp = ({ setHasAccount }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError("");

        if (!username || !password) {
            setError("Both fields are required");
            return;
        }

        const existingUser = await getUser(username);
        if (existingUser) {
            setError("Username already exists. Please choose another.");
            return;
        }

        await saveUser(username, password);
        alert("Sign-up successful! Please login.");
        setHasAccount(true);
    };

    return (
        <Container maxWidth="sm">
            <Card sx={{ padding: 3, marginTop: 5 }}>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        Sign Up
                    </Typography>
                    {error && <Typography color="error">{error}</Typography>}
                    <form onSubmit={handleSignUp}>
                        <TextField
                            label="Username"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Sign Up
                        </Button>
                    </form>
                    <Button fullWidth sx={{ marginTop: 2 }} onClick={() => setHasAccount(true)}>
                        Already have an account? Login
                    </Button>
                </CardContent>
            </Card>
        </Container>
    );
};

export default SignUp;
