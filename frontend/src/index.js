import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HospitalsProvider } from './context/HospitalsContext';
import { BrowserRouter } from 'react-router-dom';
import { DoctorProvider } from './context/DoctorContext';
import { PatientProvider } from './context/PatientContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HospitalsProvider>
        <DoctorProvider>
          <PatientProvider>
            <App />
          </PatientProvider>
        </DoctorProvider>
      </HospitalsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
