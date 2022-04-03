import { Box, Button, SvgIcon, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as HospitalSvg } from '../../assets/hospital.svg';

const Hospital = () => {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
      }}
    >
      <Box sx={{ width: '50%', marginTop: 4 }}>
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
          Welcome to Hospital Name
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            marginTop: 2,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              navigate('/hospital/doctors');
            }}
          >
            Doctors
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              navigate('/hospital/patients');
            }}
          >
            Patients
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hospital;
