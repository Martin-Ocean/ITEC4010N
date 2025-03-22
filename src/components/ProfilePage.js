import React, { useState, useEffect } from 'react';
import { 
    Box, 
    Typography, 
    Card, 
    CardContent, 
    Grid 
} from '@mui/material';
import { getUserWeightHistory } from "../utils/indexedDB";
import DemographicInfo from './DemographicInfo';

const ProfilePage = ({ username }) => {
    const [demographicData, setDemographicData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDemographicData = async () => {
            if (username) {
                const history = await getUserWeightHistory(username);
                if (history.length > 0) {
                    // Use the most recent entry for demographic info
                    const latestEntry = history[history.length - 1];
                    setDemographicData({
                        height: latestEntry.height_cm,
                        gender: latestEntry.gender,
                        age: latestEntry.age,
                        primaryGoal: latestEntry.primary_goal
                    });
                }
                setLoading(false);
            }
        };

        fetchDemographicData();
    }, [username]);

    if (loading) {
        return <Typography>Loading profile...</Typography>;
    }

    return (
        <Box sx={{ padding: 2 }}>
            <Grid container spacing={2}>
                {/* Demographic Information */}
                <Grid item xs={12}>
                    <DemographicInfo 
                        height={demographicData?.height}
                        gender={demographicData?.gender}
                        age={demographicData?.age}
                        primaryGoal={demographicData?.primaryGoal}
                    />
                </Grid>

                {/* Additional Profile Information Cards */}
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">
                                Account Details
                            </Typography>
                            <Typography variant="body1">
                                Username: {username}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">
                                Goals
                            </Typography>
                            <Typography variant="body1">
                                Primary Goal: {demographicData?.primaryGoal || 'Not set'}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProfilePage;
