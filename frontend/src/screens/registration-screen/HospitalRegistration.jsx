import React from 'react';
import { Button } from '@mui/material';
import { useContext } from 'react';
import { HospitalContext } from '../../context/HospitalsContext';

const HospitalRegistrationForm = () => {
  const {
    connectWallet,
    connectedAccount,
    formData,
    handleChange,
    addHospital,
  } = useContext(HospitalContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) return;

    addHospital();
  };
  return (
    <div>
      {connectedAccount === '' && (
        <Button onClick={connectWallet}>Connect</Button>
      )}

      <form>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default HospitalRegistrationForm;
