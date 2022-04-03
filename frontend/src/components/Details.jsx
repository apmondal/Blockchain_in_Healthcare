import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import BackButton from './BackButton';

const Details = ({ details }) => {
  if (!details) {
    return (
      <>
        <Typography variant="h1" color="teal" textAlign="center">
          Sorry!!No Data Found.
        </Typography>
      </>
    );
  }
  return (
    <>
      <BackButton />
      <Paper sx={{ mx: 20, mt: 10, padding: 4 }}>
        {Object.keys(details).map((attr) => {
          if (attr && attr !== 'password' && details[attr].length)
            return (
              <Box key={attr} sx={{ display: 'flex', width: '100%' }}>
                {attr === 'name' ? (
                  <Typography variant="h3" textAlign="center" color="green">
                    {details[attr]}
                  </Typography>
                ) : (
                  <>
                    <Typography variant="h6" fontWeight="bold">
                      {attr}:
                    </Typography>{' '}
                    <Typography variant="h6">{details[attr]}</Typography>
                  </>
                )}
              </Box>
            );
          return null;
        })}
      </Paper>
    </>
  );
};

export default Details;
