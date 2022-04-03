import React from 'react';
import {
  Box,
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useContext } from 'react';
import { DoctorContext } from '../context/DoctorContext';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
const DoctorForm = () => {
  const { formData, handleChange, addDoctor } = useContext(DoctorContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    addDoctor();
    goToDoctorsPage();
  };
  const goToDoctorsPage = () => {
    navigate('/hospital/doctors');
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
      <IconButton
        onClick={goToDoctorsPage}
        variant="text"
        color="primary"
        sx={{ position: 'absolute', top: 70, left: 15 }}
        size="small"
      >
        <ArrowBackIosNewRoundedIcon fontSize="16px" />
        Back
      </IconButton>
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
            width: 500,
            minHeight: 300,
          }}
          onSubmit={handleSubmit}
        >
          <Typography variant="h5" fontWeight="bold" textAlign="center">
            Enter details to add new Doctor
          </Typography>
          <TextField
            type="text"
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
            label="Doctor Id"
            variant="outlined"
            fullWidth
          />
          <TextField
            type="text"
            value={formData.specification}
            onChange={handleChange}
            name="specification"
            label="Specification"
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
            type="text"
            value={formData.address}
            onChange={handleChange}
            name="address"
            label="Address"
            variant="outlined"
            fullWidth
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default DoctorForm;
