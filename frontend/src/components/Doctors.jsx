import { Button, Divider, Typography } from '@mui/material';
import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import React, { useContext, useEffect } from 'react';
import ListComponent from './List';
import { useNavigate } from 'react-router-dom';
import { DoctorContext } from '../context/DoctorContext';
import BackButton from './BackButton';
const listItems = [
  {
    name: 'Dr.Shreejeeb Kesh',
    id: 'D1',
    specialization: 'ENT',
    address: 'Howrah,WB',
    phone: '8617868794',
  },
  {
    name: 'Dr.Rohan Sadhukhan',
    id: 'D2',
    specialization: 'Cardiologist',
    address: 'Howrah,WB',
    phone: '8617868794',
  },
  {
    name: 'Dr.Apurba Mondal',
    id: 'D3',
    specialization: 'Dentist',
    address: 'Howrah,WB',
    phone: '8617868794',
  },
  {
    name: 'Dr.Souvik Chakrabarty',
    id: 'D4',
    specialization: 'Neurologist',
    address: 'Howrah,WB',
    phone: '8617868794',
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

  const { doctorsList, handleDoctorList, searchKeyWord, handleSearchKeyWord } =
    useContext(DoctorContext);
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('doctorsList'));

    if (!list) {
      localStorage.setItem('doctorsList', JSON.stringify(listItems));
      handleDoctorList(listItems);
    } else {
      handleDoctorList(list);
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
        <ListComponent list={doctorsList} listType="doctor" />
      </Box>
    </div>
  );
};

export default Doctors;
