import { Button, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ListComponent from '../../components/List';
const listItems = [
  { name: 'Shreejeeb Kesh1', id: 1, description: 'lorem ipsum' },
  { name: 'Shreejeeb Kesh2', id: 2, description: 'lorem ipsum' },
  { name: 'Shreejeeb Kesh3', id: 3, description: 'lorem ipsum' },
  { name: 'Shreejeeb Kesh5', id: 4, description: 'lorem ipsum' },
  { name: 'Shreejeeb Kesh6', id: 5, description: 'lorem ipsum' },
  { name: 'Shreejeeb Kesh7', id: 6, description: 'lorem ipsum' },
];
const HospitalPage = () => {
  return (
    <div>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-end', mt: 2 }}>
        <Button variant="contained" color="secondary">
          Add Doctor
        </Button>
        <Button variant="contained" color="secondary">
          Add Patient
        </Button>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', mx: 20, my: 4 }}>
        <Typography variant="h5">Available Doctors</Typography>
        <Divider />
        <ListComponent listItems={listItems} />
      </Box>
    </div>
  );
};

export default HospitalPage;
