import React from 'react';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useContext } from 'react';
import { DoctorContext } from '../context/DoctorContext';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as DoctorSvg } from '../assets/doctor.svg';
import BackButton from './BackButton';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup.string('Enter your Name').required('Name is required'),
  id: yup.string('Enter your id').required('id is required'),
  specialization: yup
    .string('Enter your specialization')
    .required('Specialization is required'),
  address: yup.string('Enter your address').required('address is required'),
  hospitalIds: yup
    .string('Enter your Hospital ids.')
    .required('Hospital ids is required'),
});
const DoctorForm = () => {
  const { formData, addDoctor } = useContext(DoctorContext);
  const formik = useFormik({
    initialValues: { ...formData },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      addDoctor(values);
      goToDoctorsPage();
    },
  });
  const navigate = useNavigate();

  const goToDoctorsPage = () => {
    navigate('/hospital/doctors');
  };
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <BackButton />
      <Box sx={{ width: '50%', marginLeft: 10 }}>
        <DoctorSvg width="100%" height="100%" />
      </Box>
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
              width: 500,
              minHeight: 300,
            }}
            onSubmit={formik.handleSubmit}
          >
            <Typography variant="h5" fontWeight="bold" textAlign="center">
              Enter details to add new Doctor
            </Typography>
            <TextField
              required
              type="text"
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
              label="Doctor Id"
              variant="outlined"
              fullWidth
            />
            <TextField
              required
              type="text"
              value={formik.values.specialization}
              onChange={formik.handleChange}
              error={
                formik.touched.specialization &&
                Boolean(formik.errors.specialization)
              }
              helperText={
                formik.touched.specialization && formik.errors.specialization
              }
              name="specialization"
              label="Specialization"
              variant="outlined"
              fullWidth
            />

            <TextField
              required
              type="text"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
              name="address"
              label="Address"
              variant="outlined"
              fullWidth
            />
            <TextField
              required
              type="text"
              value={formik.values.hospitalIds}
              onChange={formik.handleChange}
              error={
                formik.touched.hospitalIds && Boolean(formik.errors.hospitalIds)
              }
              helperText={
                formik.touched.hospitalIds && formik.errors.hospitalIds
              }
              name="hospitalIds"
              label="Hospital ids"
              variant="outlined"
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default DoctorForm;
