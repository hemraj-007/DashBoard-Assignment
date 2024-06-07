// Sidebar.tsx
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Box, useTheme } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DirectionsIcon from '@mui/icons-material/Directions';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import logo from '../images/logo3.webp';

const Sidebar: React.FC = () => {
  const theme = useTheme();

  const icons = [
    { icon: <DashboardIcon />, label: 'Dashboard' },
    { icon: <AddBoxIcon />, label: 'Add' },
    { icon: <DirectionsIcon />, label: 'Directions' },
    { icon: <AssignmentIcon />, label: 'Assignments' },
    { icon: <LocalShippingIcon />, label: 'Shipping' },
    { icon: <DriveEtaIcon />, label: 'Drive' },
    { icon: <BusinessCenterIcon />, label: 'Business' },
    { icon: <DescriptionIcon />, label: 'Documents' },
    { icon: <SettingsIcon />, label: 'Settings' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 60,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 60, boxSizing: 'border-box', backgroundColor: theme.palette.background.default, color: theme.palette.text.primary },
      }}
    >
       <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
        <img src={logo} alt="Logo" style={{ width: 40, height: 40 }} />
      </Box>
      <Divider />
      <List>
        {icons.map((item:any, index:any) => (
          <ListItem button key={index}>
            <ListItemIcon sx={{ color: theme.palette.text.primary }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
