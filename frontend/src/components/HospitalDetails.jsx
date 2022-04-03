import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Details from './Details';

const HospitalDetails = () => {
  const [hospital, setHospital] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const HOSPITAL = JSON.parse(localStorage.getItem('hospital'));
    if (!HOSPITAL) {
      navigate('/register');
    }

    setHospital(HOSPITAL);
  }, []);
  return <Details details={hospital} />;
};

export default HospitalDetails;
