import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Details from './Details';

const Patient = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState(null);
  useEffect(() => {
    const patientList = JSON.parse(localStorage.getItem('patientList'));
    console.log(patientList, id);
    if (patientList && patientList.length) {
      const PATIENT = patientList.find((d) => d && d.id === id);
      if (PATIENT) setPatient(PATIENT);
      console.log(PATIENT);
    }
  }, []);

  return (
    <div>
      {' '}
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          justifyContent: 'flex-end',
          mt: 2,
          mr: 2,
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => navigate(`/hospital/${id}/update`)}
        >
          Update Patient
        </Button>
      </Box>
      {patient && <Details details={patient} />}
    </div>
  );
};

export default Patient;
