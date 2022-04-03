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
import * as yup from 'yup';
import { useFormik } from 'formik';
const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});
const HospitalLogIn = () => {
  const { formData, handleChange, addHospital } = useContext(HospitalContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/hospital');
  };
  const formik = useFormik({
    initialValues: { ...formData },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
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
          onSubmit={formik.handleSubmit}
        >
          <Typography variant="h5" fontWeight="bold" textAlign="center">
            Enter hospital details to log in{' '}
          </Typography>
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
