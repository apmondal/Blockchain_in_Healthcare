import React, { useState } from 'react';

export const DoctorContext = React.createContext();

export const DoctorProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    specification: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const addDoctor = async () => {
    alert(formData);
  };

  return (
    <DoctorContext.Provider
      value={{
        formData,
        handleChange,
        addDoctor,
      }}
    >
      {children}
    </DoctorContext.Provider>
  );
};
