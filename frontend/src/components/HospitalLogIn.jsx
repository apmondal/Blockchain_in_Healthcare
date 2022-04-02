import React from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Link as MUILink,
  Paper,
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
        alignItems: 'center',
        backgroundColor: 'aliceblue',
      }}
    >
      <Paper sx={{ marginTop: 8 }}>
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
            width: 400,
            minHeight: 300,
          }}
          onSubmit={handleSubmit}
        >
          <Typography variant="h5" fontWeight="bold" textAlign="center">
            Enter hospital details to log in{' '}
          </Typography>
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
      </Paper>
    </Box>
  );
};

export default HospitalLogIn;
