import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Doctor = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState();
  useEffect(() => {
    const doctorList = JSON.parse(localStorage.getItem('doctorsList'));

    if (doctorList && doctorList.length) {
      const DOCTOR = doctorList.find((d) => d && d.id === id);
      if (DOCTOR) setDoctor(DOCTOR);
      console.log(DOCTOR);
    }
  }, []);

  return (
    <div>
      {JSON.stringify(doctor)} {id}
    </div>
  );
};

export default Doctor;
