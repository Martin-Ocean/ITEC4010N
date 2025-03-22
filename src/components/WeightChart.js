import React, { useEffect, useState } from "react";
import { getUserWeightHistory } from "../utils/indexedDB";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { Typography, Box, Grid, Card, CardContent, Chip } from "@mui/material";
import {
  ShowChart as WeightIcon,
  Speed as BMIIcon,
  WorkOutline as BodyFatIcon,
} from "@mui/icons-material";

const MetricsChart = ({ username }) => {
  const [metricsData, setMetricsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (username) {
        const history = await getUserWeightHistory(username);
        if (history.length > 0) {
          setMetricsData(history);
        }
        setLoading(false);
      }
    };
    fetchData();
  }, [username]);

  // Common chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#121906",
        titleColor: "white",
        bodyColor: "#D3EBA6",
        borderColor: "#8A1E2F",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(138, 30, 47, 0.1)",
        },
        ticks: {
          color: "#121906",
        },
      },
      y: {
        grid: {
          color: "rgba(138, 30, 47, 0.1)",
        },
        ticks: {
          color: "#121906",
        },
      },
    },
    elements: {
      line: { tension: 0.4 },
      point: {
        radius: 5,
        hoverRadius: 7,
      },
    },
  };

  // If no data, return loading or no data message
  if (loading) {
    return <Typography>Loading metrics...</Typography>;
  }

  if (!metricsData || metricsData.length === 0) {
    return <Typography>No metrics data available.</Typography>;
  }

  // Prepare data for charts
  const weightData = {
    labels: metricsData.map((entry) =>
      new Date(entry.date).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Weight (kg)",
        data: metricsData.map((entry) => entry.weight),
        borderColor: "#549EC4",
        backgroundColor: "rgba(84, 158, 196, 0.2)",
        borderWidth: 2,
      },
    ],
  };

  const bodyFatData = {
    labels: metricsData.map((entry) =>
      new Date(entry.date).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Body Fat (%)",
        data: metricsData.map((entry) => entry.body_fat_percentage || 0),
        borderColor: "#8A1E2F",
        backgroundColor: "rgba(138, 30, 47, 0.2)",
        borderWidth: 2,
      },
    ],
  };

  const bmiData = {
    labels: metricsData.map((entry) =>
      new Date(entry.date).toLocaleDateString()
    ),
    datasets: [
      {
        label: "BMI",
        data: metricsData.map((entry) => entry.bmi),
        borderColor: "#D3EBA6",
        backgroundColor: "rgba(211, 235, 166, 0.2)",
        borderWidth: 2,
      },
    ],
  };

  // Calculate key statistics
  const stats = {
    weight: {
      current: metricsData[metricsData.length - 1].weight,
      change:
        metricsData[metricsData.length - 1].weight - metricsData[0].weight,
    },
    bodyFat: {
      current: metricsData[metricsData.length - 1].body_fat_percentage || 0,
      change:
        metricsData[metricsData.length - 1].body_fat_percentage -
        (metricsData[0].body_fat_percentage || 0),
    },
    bmi: {
      current: metricsData[metricsData.length - 1].bmi,
      change: metricsData[metricsData.length - 1].bmi - metricsData[0].bmi,
    },
  };

  return (
    <Box>
      {/* Progress Summary */}
      <Grid container spacing={2} sx={{ marginBottom: 3 }}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Progress Summary
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Chip
                  color={stats.weight.change > 0 ? "error" : "success"}
                  icon={<WeightIcon />}
                  label={`Weight: ${stats.weight.current.toFixed(1)} kg 
                                    (${
                                      stats.weight.change > 0 ? "+" : ""
                                    }${stats.weight.change.toFixed(1)} kg)`}
                />
                <Chip
                  color={stats.bodyFat.change > 0 ? "error" : "success"}
                  icon={<BodyFatIcon />}
                  label={`Body Fat: ${stats.bodyFat.current.toFixed(1)}% 
                                    (${
                                      stats.bodyFat.change > 0 ? "+" : ""
                                    }${stats.bodyFat.change.toFixed(1)}%)`}
                />
                <Chip
                  icon={<BMIIcon />}
                  label={`BMI: ${stats.bmi.current.toFixed(1)} 
                                    (${
                                      stats.bmi.change > 0 ? "+" : ""
                                    }${stats.bmi.change.toFixed(1)})`}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Metrics Charts */}
      <Grid container spacing={2}>
        {/* Weight Chart */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Weight Progress
              </Typography>
              <Box sx={{ height: 300 }}>
                <Line data={weightData} options={chartOptions} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Body Fat Chart */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Body Fat Progress
              </Typography>
              <Box sx={{ height: 300 }}>
                <Line data={bodyFatData} options={chartOptions} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* BMI Chart */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                BMI Progress
              </Typography>
              <Box sx={{ height: 300 }}>
                <Line data={bmiData} options={chartOptions} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MetricsChart;
