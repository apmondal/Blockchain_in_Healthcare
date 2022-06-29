import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { DoctorContext } from '../context/DoctorContext';

export default function ListComponent({ list, listType }) {
  const navigate = useNavigate();

  return (
    <List
      sx={{
        width: '100%',
        // maxWidth: 450,
        maxHeight: '60vh',
        bgcolor: 'background.paper',
        overflowY: 'scroll',
      }}
    >
      {list &&
        list.length &&
        list.map((listItem, index) => {
          if (!listItem) return null;
          return (
            <Box
              key={listItem.id}
              sx={{
                cursor: 'pointer',
                transition: '.25s ease',
                '&:hover': {
                  color: 'darkblue',
                  backgroundColor: 'aliceblue',
                  transform: 'translateY(-5px)',
                },
              }}
              component="div"
              onClick={() => navigate(`/hospital/${listType}/${listItem.id}`)}
            >
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt={listItem.name}
                    src="/static/images/avatar/1.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={listItem.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {listItem.specialization}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              {index !== list.length - 1 && (
                <Divider variant="inset" component="li" />
              )}
            </Box>
          );
        })}
    </List>
  );
}
