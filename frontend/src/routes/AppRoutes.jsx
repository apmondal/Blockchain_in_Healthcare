import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HospitalPage from '../screens/hospital/HospitalPage';
import HospitalLogIn from '../components/HospitalLogIn';
import Hospital from '../screens/hospital/Hospital';
import Doctors from '../components/Doctors';
import Patients from '../components/Patients';
import DoctorForm from '../components/DoctorForm';
import PatientForm from '../components/PatientForm';
import PageNotFound from '../components/PageNotFound';
import HospitalRegistrationForm from '../components/HospitalRegistration';
import { RenderForm } from '../App';
import Doctor from '../components/Doctor';
import Patient from '../components/Patient';

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RenderForm />}></Route>
        <Route path="/login" element={<HospitalLogIn />}></Route>
        <Route path="/register" element={<HospitalRegistrationForm />}></Route>
        <Route path="/hospital" element={<Hospital />}></Route>
        <Route path="/hospital/doctors" element={<Doctors />}></Route>
        <Route path="/hospital/patients" element={<Patients />}></Route>
        <Route path="/hospital/add-doctor" element={<DoctorForm />}></Route>
        <Route path="/hospital/add-patient" element={<PatientForm />}></Route>
        <Route path="/hospital/doctor/:id" element={<Doctor />}></Route>
        <Route path="/hospital/patient/:id" element={<Patient />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
