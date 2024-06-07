// QuickActions.tsx
import React from 'react';
import { Box, Typography, Paper, Divider } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

const QuickActions: React.FC = () => {
  return (
    <Paper elevation={3} sx={{ padding: 2, marginBottom: 4 }}>
      <Typography variant="h6" gutterBottom>
        Quick Actions
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', flexGrow: 1 }}>
          <AddCircleOutlineIcon />
          <Typography variant="body2">Create Indents</Typography>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', flexGrow: 1 }}>
          <DirectionsCarIcon />
          <Typography variant="body2">Add Vehicle</Typography>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', flexGrow: 1 }}>
          <DriveEtaIcon />
          <Typography variant="body2">Add Trailer</Typography>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', flexGrow: 1 }}>
          <PersonAddIcon />
          <Typography variant="body2">Add Driver</Typography>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', flexGrow: 1 }}>
          <NoteAddIcon />
          <Typography variant="body2">Add Indents</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default QuickActions;
