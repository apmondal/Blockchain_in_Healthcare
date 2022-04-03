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

  const [doctorsList, setDoctorsList] = useState(null);
  const [searchKeyWord, setSearchKeyWord] = React.useState('');
  const handleDoctorList = (list) => {
    setDoctorsList(list);
  };
  const handleSearchKeyWord = (e) => {
    setSearchKeyWord(e.target.value);
  };
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const addDoctor = (formData) => {
    const doctorsList = JSON.parse(localStorage.getItem('doctorsList'));
    if (!doctorsList) {
      localStorage.setItem('doctorsList', JSON.stringify([formData]));
    }

    doctorsList.push(formData);
    localStorage.setItem('doctorsList', JSON.stringify(doctorsList));
  };

  return (
    <DoctorContext.Provider
      value={{
        formData,
        handleChange,
        addDoctor,
        doctorsList,
        handleDoctorList,
        searchKeyWord,
        handleSearchKeyWord,
      }}
    >
      {children}
    </DoctorContext.Provider>
  );
};
