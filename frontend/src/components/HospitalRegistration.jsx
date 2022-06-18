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
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
const validationSchema = yup.object({
  name: yup.string('Enter your Name').required('Name is required'),
  id: yup.string('Enter your id').required('id is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  specializedWards: yup.string('Enter specialized wards').required('required'),
});
const HospitalRegistrationForm = () => {
  const [confirmPassword, setConfirmPassword] = useState('');
  const { formData, handleChange, addHospital } = useContext(HospitalContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.id) return;

    addHospital();
  };

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { ...formData },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      addHospital(values);
      navigate('/hospital');
    },
  });
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
          onSubmit={formik.handleSubmit}
        >
          <Typography variant="h5" fontWeight="bold" textAlign="center">
            Enter hospital details to register
          </Typography>
          <TextField
            required
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
          />
          <TextField
            required
            type="text"
            value={formik.values.id}
            onChange={formik.handleChange}
            error={formik.touched.id && Boolean(formik.errors.id)}
            helperText={formik.touched.id && formik.errors.id}
            name="id"
            label="Hospital Id"
            variant="outlined"
            fullWidth
          />
          <TextField
            required
            value={formik.values.specializedWards}
            onChange={formik.handleChange}
            error={
              formik.touched.specializedWards &&
              Boolean(formik.errors.specializedWards)
            }
            helperText={
              formik.touched.specializedWards && formik.errors.specializedWards
            }
            name="specializedWards"
            label="Specialized wards"
            variant="outlined"
            fullWidth
          />

          <TextField
            required
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
          />
          <TextField
            required
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            name="password"
            label="Password"
            variant="outlined"
            fullWidth
          />
          <TextField
            required
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
