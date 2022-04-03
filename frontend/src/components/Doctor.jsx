import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from './Details';

const Doctor = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  useEffect(() => {
    const doctorList = JSON.parse(localStorage.getItem('doctorsList'));
    console.log(doctorList, id);
    if (doctorList && doctorList.length) {
      const DOCTOR = doctorList.find((d) => d && d.id === id);
      if (DOCTOR) setDoctor(DOCTOR);
      console.log(DOCTOR);
    }
  }, []);

  return <div>{doctor && <Details details={doctor} />}</div>;
};

export default Doctor;
