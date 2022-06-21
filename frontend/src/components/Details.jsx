import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import BackButton from './BackButton';

const formatAttributes = (attr) => {
  const letters = attr.split('');
  letters[0] = letters[0].toUpperCase();
  return letters.join('');
};

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
        <div>
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
                        {formatAttributes(attr)}:
                      </Typography>
                      <Typography variant="h6">
                        &nbsp;{details[attr]}
                      </Typography>
                    </>
                  )}
                </Box>
              );
            return null;
          })}
        </div>
      </Paper>
    </>
  );
};

export default Details;
