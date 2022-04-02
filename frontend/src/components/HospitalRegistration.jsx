import React, { useState } from 'react';
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
import { Link } from 'react-router-dom';

const HospitalRegistrationForm = () => {
  const [confirmPassword, setConfirmPassword] = useState('');
  const { formData, handleChange, addHospital } = useContext(HospitalContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.id) return;

    addHospital();
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
      <Paper sx={{ marginTop: 6 }}>
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
            Enter hospital details to register
          </Typography>
          <TextField
            value={formData.name}
            onChange={handleChange}
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
          />
          <TextField
            type="text"
            value={formData.id}
            onChange={handleChange}
            name="id"
            label="Hospital Id"
            variant="outlined"
            fullWidth
          />
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
          <TextField
            type="password"
            value={confirmPassword}
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
            name="password"
            label="Confirm Password"
            variant="outlined"
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>
          <MUILink
            component={Link}
            to="/login"
            underline="hover"
            color="InfoText"
          >
            Already have an account? Log in!!{' '}
          </MUILink>
        </Box>
      </Paper>
    </Box>
  );
};

export default HospitalRegistrationForm;
