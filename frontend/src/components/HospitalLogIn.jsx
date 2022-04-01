import React from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Link as MUILink,
} from '@mui/material';
import { useContext } from 'react';
import { HospitalContext } from '../context/HospitalsContext';
import { Link, useNavigate } from 'react-router-dom';

const HospitalLogIn = () => {
  const { formData, handleChange, addHospital } = useContext(HospitalContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/hospital');
  };
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100vw',
        height: 'calc(100vh - 64px)',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'aliceblue',
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        Enter hospital details to log in{' '}
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          padding: 2,
          width: 300,
          height: 300,
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          type="email"
          value={formData.email}
          onChange={handleChange}
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
        />
        <TextField
          type="password"
          value={formData.password}
          onChange={handleChange}
          name="password"
          label="Password"
          variant="outlined"
          fullWidth
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
        <MUILink
          component={Link}
          to="/register"
          underline="hover"
          color="InfoText"
        >
          Don't have an account? Register!!{' '}
        </MUILink>
      </Box>
    </Box>
  );
};

export default HospitalLogIn;
