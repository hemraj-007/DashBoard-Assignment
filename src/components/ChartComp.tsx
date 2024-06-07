import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Box, Typography, Grid, Paper } from '@mui/material';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartComponent: React.FC = () => {
  const data = {
    labels: ['Upcoming', 'Ongoing', 'Completed'],
    datasets: [
      {
        data: [50, 100, 50],
        backgroundColor: ['#FFC107', '#8E44AD', '#1ABC9C'],
        hoverBackgroundColor: ['#FFEB3B', '#9B59B6', '#16A085'],
      },
    ],
  };

  const charts = [
    { title: 'Orders', data },
    { title: 'Trips', data },
    { title: 'Revenue', data },
    { title: 'Expenses', data: { ...data, labels: ['Freight Charge', 'Driver Charge', 'Other Charges'] } },
  ];

  return (
    <Box>
      <Grid container spacing={2}>
        {charts.map((chart, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6" component="div" gutterBottom>
                {chart.title}
              </Typography>
              <Doughnut data={chart.data} />
              <Box mt={2}>
                {chart.data.labels.map((label, idx) => (
                  <Box display="flex" justifyContent="space-between" key={idx} mt={1}>
                    <Typography>{label}</Typography>
                    <Typography>{chart.data.datasets[0].data[idx]}</Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ChartComponent;
