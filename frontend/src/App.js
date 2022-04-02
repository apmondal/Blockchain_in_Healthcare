import { Button } from '@mui/material';
import { useContext } from 'react';
import './App.css';
import HospitalRegistrationForm from './components/HospitalRegistration';
import { HospitalContext } from './context/HospitalsContext';
import Header from './components/Header';
import { Box } from '@mui/system';
import AppRoutes from './routes/AppRoutes';

export function RenderForm() {
  const { connectWallet, connectedAccount } = useContext(HospitalContext);
  return (
    <div>
      {connectedAccount === '' ? (
        <Box
          sx={{
            width: '100vw',
            height: 'calc(100vh - 64px)',
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
    <>
      <Header />
      <AppRoutes />
    </>
  );
}

export default App;
