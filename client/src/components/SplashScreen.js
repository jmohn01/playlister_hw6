import { React, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import AuthContext from '../auth';
import { GlobalStoreContext } from '../store';
import './SplashScreen.css';

const SplashScreen = () => {
  const { auth } = useContext(AuthContext);
  const { store } = useContext(GlobalStoreContext);
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate('/register');
  };
  const handleLogin = () => {
    navigate('/login');
  };
  const handleGuest = () => {
    navigate('/all-lists');
  };

  useEffect(() => {
    if (auth.loggedIn) {
      navigate('/home');
    }
    store.setScreen('SPLASH');
  }, []);

  return (
    <Box
      className='splash-screen'
      sx={{
        pt: '25vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '75vh',
      }}
    >
      
      <Typography mb={3} variant='h1' color='white'>
        Playlister
      </Typography>
      
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '50vw',
        }}
      >
        <Button variant='contained' color='grey' size='large' onClick={handleRegister}>
          Create Account
        </Button>
        <Button variant='contained' color='grey'size='large' onClick={handleLogin}>
          Login
        </Button>
        <Button variant='contained' color='grey'size='large' onClick={handleGuest}>
          Guest
        </Button>
      </Box>
    </Box>
  );
};

export default SplashScreen;
