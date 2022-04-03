import { Box, Button, SvgIcon, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as HospitalSvg } from '../../assets/hospital.svg';

const Hospital = () => {
  const navigate = useNavigate();
  const [hospital, setHospital] = useState(null);

  useEffect(() => {
    const HOSPITAL = JSON.parse(localStorage.getItem('hospital'));
    if (!HOSPITAL) {
      navigate('/register');
    }

    setHospital(HOSPITAL);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        gap: 5,
      }}
    >
      <Box sx={{ width: '500px', marginTop: 4, marginRight: 10 }}>
        <HospitalSvg width="100%" height="100%" />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h3" color="darkblue" textAlign="center">
          {hospital && hospital.name
            ? hospital.name
            : 'Welcome to Hospital Name'}
        </Typography>
        <Box sx={{ mt: '15px', mb: '5px' }}>
          <Button
            variant="contained"
            color="info"
            size="large"
            onClick={() => {
              navigate('/hospital/details');
            }}
            fullWidth
          >
            View Details
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => {
              navigate('/hospital/doctors');
            }}
          >
            View Doctors
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => {
              navigate('/hospital/patients');
            }}
          >
            View Patients
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hospital;
