import React from "react";
import { Card, CardContent, Typography, Box, Chip } from "@mui/material";
import {
  Height as HeightIcon,
  Person as GenderIcon,
  Cake as AgeIcon,
  FitnessCenter as GoalIcon,
} from "@mui/icons-material";

const DemographicInfo = ({ height, gender, age, primaryGoal }) => {
  // If no data is provided, return null or a placeholder
  if (!height && !gender && !age && !primaryGoal) {
    return null;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Personal Information
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {height && (
            <Chip
              icon={<HeightIcon />}
              label={`Height: ${height} cm`}
              variant="outlined"
              size="medium"
            />
          )}
          {gender && (
            <Chip
              icon={<GenderIcon />}
              label={`Gender: ${gender}`}
              variant="outlined"
              size="medium"
            />
          )}
          {age && (
            <Chip
              icon={<AgeIcon />}
              label={`Age: ${age}`}
              variant="outlined"
              size="medium"
            />
          )}
          {primaryGoal && (
            <Chip
              icon={<GoalIcon />}
              label={`Primary Goal: ${primaryGoal}`}
              variant="outlined"
              size="medium"
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default DemographicInfo;
