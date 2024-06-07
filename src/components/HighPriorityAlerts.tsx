// HighPriorityAlerts.tsx
import React from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const HighPriorityAlerts: React.FC = () => {
  const alerts = [
    {
      title: 'Driver Raised Concern',
      description: 'Load No : 12454, Bill To : RoaDo demo Bangalore',
      date: '13 Feb 24',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Reefer Temp. out of range',
      description: 'Load No : 12454, Bill To : RoaDo demo Bangalore',
      date: '13 Feb 24',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" gutterBottom>
          High Priority alerts (14)
        </Typography>
        <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
          View All
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {alerts.map((alert, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper elevation={2} sx={{ padding: 2 }}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" alignItems="center">
                  <PersonIcon />
                  <Box ml={2}>
                    <Typography variant="subtitle1">{alert.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {alert.description}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" color="textSecondary">
                  {alert.date}
                </Typography>
              </Box>
              <Typography variant="body2" mt={2}>
                {alert.details}
              </Typography>
              <Box display="flex" justifyContent="flex-end" mt={2}>
                <Button size="small" color="primary">
                  Ignore
                </Button>
                <Button size="small" color="primary" variant="contained" sx={{ ml: 1 }}>
                  Resolve
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default HighPriorityAlerts;
