import React, { useState } from 'react';
import { Container, Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import ChartComponent from './components/ChartComp';
import Header from './components/Header';
import QuickActions from './components/QuickActions';
import HighPriorityAlerts from './components/HighPriorityAlerts';
import Sidebar from './components/Navbar';
import Highlights from './components/Highlight';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const handleToggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <Header darkMode={darkMode} onToggleDarkMode={handleToggleDarkMode} /><br />
          <Container sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1 }}>
            <Box sx={{ flexGrow: 1, pr: 2 }}>
              <ChartComponent />
              <br />
              <QuickActions />
              <HighPriorityAlerts />
            </Box>
            <Box >
              <Highlights />
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
