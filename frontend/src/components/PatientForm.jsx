import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useContext } from 'react';
import { DoctorContext } from '../context/DoctorContext';
import { useNavigate } from 'react-router-dom';

const PatientForm = () => {
  const { formData, handleChange } = useContext(DoctorContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    goToPatientPage();
  };
  const goToPatientPage = () => {
    navigate('/hospital/patients');
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
      <Button
        onClick={goToPatientPage}
        variant="text"
        color="primary"
        sx={{ position: 'absolute', top: 70, left: 5 }}
      >
        Back
      </Button>
      <Typography variant="h5" fontWeight="bold">
        Enter details to add new Doctor
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
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default PatientForm;
