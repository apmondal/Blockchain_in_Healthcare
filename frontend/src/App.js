import { Button } from '@mui/material';
import { useContext } from 'react';
import './App.css';
import HospitalRegistrationForm from './components/HospitalRegistration';
import { HospitalContext } from './context/HospitalsContext';
function App() {
  const { connectWallet, connectedAccount } = useContext(HospitalContext);
  return (
    <div>
      {connectedAccount === '' ? (
        <Button onClick={connectWallet}>Connect</Button>
      ) : (
        <HospitalRegistrationForm />
      )}
    </div>
  );
}

export default App;
