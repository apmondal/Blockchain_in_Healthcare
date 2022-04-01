import { Button } from '@mui/material';
import { useContext } from 'react';
import './App.css';
import HospitalRegistrationForm from './components/HospitalRegistration';
import { HospitalContext } from './context/HospitalsContext';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/system';
import HospitalPage from './screens/hospital/HospitalPage';
import HospitalLogIn from './components/HospitalLogIn';
function RenderForm() {
  const { connectWallet, connectedAccount } = useContext(HospitalContext);
  return (
    <div>
      {connectedAccount === '' ? (
        <Box
          sx={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            onClick={connectWallet}
            variant="contained"
            color="primary"
            size="large"
          >
            Connect your metamask wallet
          </Button>
        </Box>
      ) : (
        <HospitalRegistrationForm />
      )}
    </div>
  );
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<RenderForm />}></Route>
      <Route path="/login" element={<HospitalLogIn />}></Route>
      <Route path="/register" element={<HospitalRegistrationForm />}></Route>
      <Route path="/hospital" element={<HospitalPage />}></Route>
    </Routes>
  );
}

export default App;
