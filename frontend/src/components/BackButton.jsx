import { IconButton } from '@mui/material';
import React from 'react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <IconButton
      onClick={goBack}
      variant="text"
      color="primary"
      sx={{ position: 'absolute', top: 70, left: 15 }}
      size="small"
    >
      <ArrowBackIosNewRoundedIcon fontSize="16px" />
      Back
    </IconButton>
  );
};

export default BackButton;
