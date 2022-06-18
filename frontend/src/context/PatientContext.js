import React, { useState } from 'react';

export const PatientContext = React.createContext();

export const PatientProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    age: '',
    gender: '',
    address: '',
    phone: '',
  });
  const [patientList, setPatientList] = useState(null);
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const addPatient = async () => {
    const patientList = JSON.parse(localStorage.getItem('patientsList'));
    if (!patientList) {
      localStorage.setItem('patientsList', JSON.stringify([formData]));
    }

    patientList.push(formData);
    localStorage.setItem('patientsList', JSON.stringify(patientList));
  };

  return (
    <PatientContext.Provider
      value={{
        formData,
        handleChange,
        addPatient,
        setFormData,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};
