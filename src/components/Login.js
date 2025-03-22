import React, { useState } from "react";
import { getUser } from "../utils/indexedDB";
import {
  TextField,
  Button,
  Typography,
  Container,
  Card,
  CardContent,
  Divider,
  Box,
  Grid,
} from "@mui/material";
import { Google as GoogleIcon } from "@mui/icons-material";
import loginImage from "../assets/login_img.png";

const Login = ({ setAuthenticated, setHasAccount }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const user = await getUser(username);
    if (user && user.password === password) {
      localStorage.setItem("authenticated", "true");
      localStorage.setItem("username", username);
      setAuthenticated(true);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#F5F5F4", // Light rice color
        padding: 2,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 1200,
          height: "80vh",
          maxHeight: 800,
          borderRadius: 4,
          boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
          overflow: "hidden",
          display: "flex",
        }}
      >
        <Grid container sx={{ height: "100%" }}>
          {/* Login Form Column */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              padding: 4,
              height: "100%",
              overflowY: "auto",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="h4"
                sx={{
                  color: "#030303",
                  fontWeight: 700,
                  marginBottom: 1,
                  textAlign: "center",
                }}
              >
                WELCOME BACK
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#636364",
                  textAlign: "center",
                  marginBottom: 3,
                }}
              >
                Welcome back. Please enter your details.
              </Typography>

              <form onSubmit={handleLogin}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
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
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginY: 2,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      id="remember-me"
                      style={{ marginRight: 8 }}
                    />
                    <label
                      htmlFor="remember-me"
                      style={{ color: "#636364", cursor: "pointer" }}
                    >
                      Remember me
                    </label>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#EA454C",
                      cursor: "pointer",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Forgot password?
                  </Typography>
                </Box>

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#EA454C",
                    color: "white",
                    borderRadius: 2,
                    padding: "12px",
                    textTransform: "none",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "#D83A41",
                    },
                  }}
                >
                  Sign in
                </Button>

                <Divider sx={{ marginY: 2, color: "#636364" }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#636364",
                      backgroundColor: "#F5F5F4",
                      paddingX: 1,
                    }}
                  >
                    or
                  </Typography>
                </Divider>

                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<GoogleIcon />}
                  sx={{
                    borderColor: "#636364",
                    color: "#636364",
                    textTransform: "none",
                    borderRadius: 2,
                    padding: "12px",
                    "&:hover": {
                      borderColor: "#030303",
                      backgroundColor: "rgba(0,0,0,0.05)",
                    },
                  }}
                >
                  Sign in with Google
                </Button>

                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "center",
                    marginTop: 2,
                    color: "#636364",
                  }}
                >
                  Don't have an account?{" "}
                  <Typography
                    component="span"
                    sx={{
                      color: "#EA454C",
                      cursor: "pointer",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                    onClick={() => setHasAccount(false)}
                  >
                    Sign up
                  </Typography>
                </Typography>
              </form>
            </Box>
          </Grid>

          {/* Image Column - Hidden on smaller screens */}
          <Grid
            item
            md={6}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#030303",
              height: "100%",
              width: "100%",
            }}
          >
            <Box
              component="img"
              src={loginImage}
              alt="Login Illustration"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // This will make the image fill the entire space
                objectPosition: "center", // Center the image
              }}
            />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default Login;
