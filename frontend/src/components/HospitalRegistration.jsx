import React from 'react';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useContext } from 'react';
import { HospitalContext } from '../context/HospitalsContext';

const HospitalRegistrationForm = () => {
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
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'aliceblue',
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        Enter hospital details{' '}
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
          value={formData.name}
          onChange={handleChange}
          name="name"
          label="Name"
          variant="outlined"
          fullWidth
        />
        <TextField
          value={formData.id}
          onChange={handleChange}
          name="id"
          label="Hospital Id"
          variant="outlined"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default HospitalRegistrationForm;
