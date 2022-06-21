import React, { useEffect, useState } from 'react';
import {
  Box,
  Select,
  Button,
  Paper,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
} from '@mui/material';
import { useContext } from 'react';
import { DoctorContext } from '../context/DoctorContext';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import BackButton from './BackButton';
import { ReactComponent as DoctorSvg } from '../assets/doctor.svg';
import { PatientContext } from '../context/PatientContext';
const validationSchema = yup.object({
  name: yup.string('Enter Patient Name').required('Patient name is required'),
  id: yup.string('Enter patient id').required('Patient id is required'),
  age: yup.string('Enter your age').required('Age is required'),
  address: yup.string('Enter patient address').required('Address is required'),
  phone: yup
    .string('Enter Patient phone number')
    .required('Phone number is required'),
  gender: yup.string('Enter gender.').required('Gender is required'),
});

const recordNames = [
  'Height',
  'Weight',
  'Blood Group',
  'Blood Pressure',
  'Heart Rate',
];
const PatientForm = ({ formType }) => {
  const { formData, addPatient, setFormData } = useContext(PatientContext);
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [recordValue, setRecordValue] = useState('');

  const handleChange = (event) => {
    setRecordValue(event.target.value);
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    goToPatientPage();
  };
  const goToPatientPage = () => {
    navigate('/hospital/patients');
  };
  const formik = useFormik({
    initialValues:
      formType === 'update' && id && patient ? { ...patient } : { ...formData },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      addPatient(values);
      goToPatientPage();
    },
  });

  useEffect(() => {
    const patientList = JSON.parse(localStorage.getItem('doctorsList'));
    if (patientList && patientList.length) {
      const PATIENT = patientList.find((d) => d && d.id === id);
      if (PATIENT) {
        formik.setValues(PATIENT);
        setFormData(PATIENT);
      }
    }
  }, []);
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
              {formType === 'update'
                ? 'Update patient details'
                : 'Enter details to add new Patient'}
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
              label="Patient Id"
              variant="outlined"
              fullWidth
            />
            <TextField
              required
              type="text"
              value={formik.values.age}
              onChange={formik.handleChange}
              error={formik.touched.age && Boolean(formik.errors.age)}
              helperText={formik.touched.age && formik.errors.age}
              name="age"
              label="Age"
              variant="outlined"
              fullWidth
            />
            <TextField
              required
              type="text"
              value={formik.values.gender}
              onChange={formik.handleChange}
              error={formik.touched.gender && Boolean(formik.errors.gender)}
              helperText={formik.touched.gender && formik.errors.gender}
              name="gender"
              label="Gender"
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
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              name="phone"
              label="Phone Number"
              variant="outlined"
              fullWidth
            />
            {formType === 'update' && (
              <FormControl
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                }}
              >
                <InputLabel id="demo-simple-select-label">Record</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={recordValue}
                  label="Select"
                  onChange={handleChange}
                >
                  {recordNames.map((recordName) => (
                    <MenuItem value={recordName} key={recordName}>
                      {recordName}
                    </MenuItem>
                  ))}
                </Select>
                <TextField
                  sx={{ marginLeft: 2 }}
                  required
                  type="text"
                  value={formik.values.recordValue}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.recordValue &&
                    Boolean(formik.errors.recordValue)
                  }
                  helperText={
                    formik.touched.recordValue && formik.errors.recordValue
                  }
                  name="recordValue"
                  label="Value"
                  variant="outlined"
                  fullWidth
                />
              </FormControl>
            )}
            <Button type="submit" variant="contained" color="primary" fullWidth>
              {formType === 'update' ? 'Update' : 'Submit'}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default PatientForm;
