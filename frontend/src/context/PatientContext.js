import React, { useState } from 'react';

export const PatientContext = React.createContext();

export const PatientProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const addPatient = async () => {
    alert(formData);
  };

  return (
    <PatientContext.Provider
      value={{
        formData,
        handleChange,
        addPatient,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};
