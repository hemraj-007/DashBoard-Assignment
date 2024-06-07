// Highlights.tsx
import React from 'react';
import {  Typography, Paper, Divider, Grid } from '@mui/material';

const Highlights: React.FC = () => {
  const completedActivities = [
    { id: 1, text: 'Gurpreet Singh (Dispatch team) has created Load No. I-AAA-1325' },
    { id: 2, text: 'Aman (Driver) Picked Up goods at Location_Name for Load No. I-AAA-1325' },
    { id: 3, text: 'Gurpreet Singh (Dispatch team) has created Load No. I-AAA-1325' },
    { id: 4, text: 'Load No. I-AAA-1325 will start added by Gurpreet Singh' },
  ];

  const scheduledActivities = [
    { id: 1, text: 'Load No. I-AAA-1325 will be delivered by Aman (Driver)' },
    { id: 2, text: 'Aman (Driver) will Picked Up goods at Location_Name for Load No. I-AAA-1325' },
    { id: 3, text: 'Load No. I-AAA-1325 will start added by Gurpreet Singh' },
    { id: 4, text: 'Load No. I-AAA-1325 will start added by Gurpreet Singh' },
  ];

  return (
    <Paper elevation={3} sx={{ width: 300, ml: 2, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Todays Highlights (14)
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        19 Mar 2024
      </Typography>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={6}>
          <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
            <Typography variant="body2" color="textSecondary">
              Income
            </Typography>
            <Typography variant="h6" color="green">
              100000 CAD
            </Typography>
            <Typography variant="body2" color="textSecondary">
              2 payments received
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
            <Typography variant="body2" color="textSecondary">
              Expenses
            </Typography>
            <Typography variant="h6" color="red">
              50000 CAD
            </Typography>
            <Typography variant="body2" color="textSecondary">
              5 payments paid
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Divider />
      <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
        Completed Activities (14)
      </Typography>
      <Typography variant="body2" color="primary" sx={{ cursor: 'pointer', mb: 1 }}>
        View All
      </Typography>
      {completedActivities.map((activity:any) => (
        <Paper key={activity.id} elevation={1} sx={{ padding: 1, mb: 1 }}>
          <Typography variant="body2">{activity.text}</Typography>
        </Paper>
      ))}
      <Divider />
      <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
        Scheduled Activities (14)
      </Typography>
      <Typography variant="body2" color="primary" sx={{ cursor: 'pointer', mb: 1 }}>
        View All
      </Typography>
      {scheduledActivities.map((activity:any) => (
        <Paper key={activity.id} elevation={1} sx={{ padding: 1, mb: 1 }}>
          <Typography variant="body2">{activity.text}</Typography>
        </Paper>
      ))}
    </Paper>
  );
};

export default Highlights;
