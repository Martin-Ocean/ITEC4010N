import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { saveUserMetrics, getUserMetrics } from "../utils/indexedDB";
import MetricsChart from "./WeightChart";
import ProfilePage from "./ProfilePage";

import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Card,
  CardContent,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material";

// Icons
import {
  Dashboard as DashboardIcon,
  AddCircleOutline as GenerateIcon,
  Person as ProfileIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";

const drawerWidth = 240;

const InformationForm = ({ setAuthenticated }) => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    height_cm: "",
    weight_kg: "",
    body_fat_percentage: "",
    primary_goal: "",
  });

  const [aiResponse, setAiResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const username = localStorage.getItem("username");

  useEffect(() => {
    const loadLatestMetrics = async () => {
      if (username) {
        const latestMetrics = await getUserMetrics(username);
        if (latestMetrics) setFormData(latestMetrics);
      }
    };
    loadLatestMetrics();
  }, [username]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (username) {
      await saveUserMetrics(username, formData);
    }

    try {
      const axios = (await import("axios")).default;
      const response = await axios.post(
        "https://us-central1-itec4010n.cloudfunctions.net/generateFitnessPlan",
        {
          userInfo: formData,
          fitnessGoals: { primary_goal: formData.primary_goal },
          dietPreferences: {},
          healthConsiderations: {},
          trackingPreferences: {},
          aiPersonalization: {},
        }
      );

      setAiResponse(
        response.data.choices[0]?.message?.content || "No response"
      );
    } catch (error) {
      console.error("API Error:", error);
      setAiResponse("Failed to generate a plan.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authenticated");
    localStorage.removeItem("username");
    setAuthenticated(false);
  };

  const menuItems = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      value: "dashboard",
    },
    {
      text: "Generate",
      icon: <GenerateIcon />,
      value: "generate",
    },
    {
      text: "Profile",
      icon: <ProfileIcon />,
      value: "profile",
    },
  ];

  // Function to get initials
  const getInitials = (name) => {
    if (!name) return "U";
    const parts = name.split(" ");
    return parts.length > 1
      ? `${parts[0][0]}${parts[1][0]}`.toUpperCase()
      : name[0].toUpperCase();
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar Navigation */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "none",
            backgroundColor: "#FFFFFF",
            boxShadow: "2px 0 10px rgba(0,0,0,0.05)",
            padding: 2,
          },
        }}
      >
        {/* User Avatar at the Top */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 3,
          }}
        >
          <Avatar
            sx={{
              width: 80,
              height: 80,
              bgcolor: "#EA454C",
              fontSize: "2rem",
            }}
          >
            {getInitials(username)}
          </Avatar>
        </Box>

        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.value}
              button
              onClick={() => setActiveTab(item.value)}
              sx={{
                marginBottom: 1,
                borderRadius: 2,
                ...(activeTab === item.value
                  ? {
                      backgroundColor: "rgba(234, 69, 76, 0.1)",
                      color: "#EA454C",
                    }
                  : {}),
              }}
            >
              <ListItemIcon
                sx={{
                  color: activeTab === item.value ? "#EA454C" : "inherit",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}

          <ListItem
            button
            onClick={handleLogout}
            sx={{
              marginTop: "auto",
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "rgba(234, 69, 76, 0.05)",
              },
            }}
          >
            <ListItemIcon>
              <LogoutIcon color="error" />
            </ListItemIcon>
            <ListItemText
              primary="Logout"
              primaryTypographyProps={{ color: "error" }}
            />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: "#F5F5F4",
          padding: 3,
        }}
      >
        {/* Render different content based on active tab */}
        {activeTab === "dashboard" && <MetricsChart username={username} />}

        {activeTab === "generate" && (
          <Card sx={{ maxWidth: 600, margin: "0 auto" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Generate Fitness Plan
              </Typography>
              <TextField
                label="Age"
                type="number"
                fullWidth
                margin="normal"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
              <TextField
                select
                label="Gender"
                fullWidth
                margin="normal"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </TextField>
              <TextField
                label="Height (cm)"
                type="number"
                fullWidth
                margin="normal"
                name="height_cm"
                value={formData.height_cm}
                onChange={handleChange}
              />
              <TextField
                label="Weight (kg)"
                type="number"
                fullWidth
                margin="normal"
                name="weight_kg"
                value={formData.weight_kg}
                onChange={handleChange}
              />
              <TextField
                label="Body Fat (%)"
                type="number"
                fullWidth
                margin="normal"
                name="body_fat_percentage"
                value={formData.body_fat_percentage}
                onChange={handleChange}
              />
              <TextField
                select
                label="Primary Goal"
                fullWidth
                margin="normal"
                name="primary_goal"
                value={formData.primary_goal}
                onChange={handleChange}
              >
                <MenuItem value="fat_loss">Fat Loss</MenuItem>
                <MenuItem value="muscle_gain">Muscle Gain</MenuItem>
                <MenuItem value="general_fitness">General Fitness</MenuItem>
              </TextField>

              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSubmit}
                disabled={loading}
                sx={{ marginTop: 2 }}
              >
                {loading ? "Generating..." : "Generate Plan"}
              </Button>

              {/* AI Response Display */}
              {aiResponse && (
                <Card sx={{ marginTop: 2 }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Your AI-Generated Plan
                    </Typography>
                    <ReactMarkdown
                      components={remarkGfm}
                      children={aiResponse}
                    />
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        )}

        {activeTab === "profile" && <ProfilePage username={username} />}
      </Box>
    </Box>
  );
};

export default InformationForm;
