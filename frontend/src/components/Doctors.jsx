import { Button, Divider, Typography } from '@mui/material';
import { Box, Paper } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import React, { useContext, useEffect } from 'react';
import ListComponent from './List';
import { useNavigate } from 'react-router-dom';
import { DoctorContext } from '../context/DoctorContext';
import BackButton from './BackButton';
const listItems = [
  { name: 'Dr.Shreejeeb Kesh', id: '1', specialization: 'ENT' },
  { name: 'Dr.Rohan Sadhukhan', id: '2', specialization: 'Cardiologist' },
  { name: 'Dr.Apurba Mondal', id: '3', specialization: 'Dentist' },
  { name: 'Dr.Souvik Chakrabarty', id: '4', specialization: 'Neurologist' },
];

const listItems1 = [
  {
    name: 'Shreejeeb Kesh',
    id: 'P1',
    age: '23',
    gender: 'M',
    address: 'JGEC',
    phone: '8617868793',
    BloodGroup: 'AB+',
  },
  {
    name: 'Rohan Sadhukhan',
    id: 'P2',
    age: '22',
    gender: 'M',
    address: 'JGEC',
    phone: '8617868793',
    BloodGroup: 'AB+',
  },
  {
    name: 'Apurba Mondal',
    id: 'P3',
    age: '22',
    gender: 'M',
    address: 'JGEC',
    phone: '8617868793',
    BloodGroup: 'AB+',
  },
  {
    name: 'Souvik Chakrabarty',
    id: 'P4',
    age: '24',
    gender: 'M',
    address: 'JGEC',
    phone: '8617868793',
    BloodGroup: 'AB+',
  },
];
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'aliceblue',
  '&:hover': {
    backgroundColor: 'aliceblue',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const Doctors = () => {
  const navigate = useNavigate();

  const { searchKeyWord, handleSearchKeyWord } = useContext(DoctorContext);
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('doctorsList'));

    if (!list) {
      localStorage.setItem('doctorsList', JSON.stringify(listItems1));
    }
  }, []);
  return (
    <div>
      <BackButton />
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          justifyContent: 'flex-end',
          mt: 2,
          mr: 2,
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => navigate('/hospital/add-doctor')}
        >
          Add Doctor
        </Button>
      </Box>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', mx: 20, my: 4, px: 4 }}
        component={Paper}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            my: 0.5,
          }}
        >
          <Typography variant="h5">Available Doctors</Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              type="text"
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchKeyWord}
              onChange={handleSearchKeyWord}
            />
          </Search>
        </Box>
        <Divider />
        <ListComponent />
      </Box>
    </div>
  );
};

export default Doctors;
