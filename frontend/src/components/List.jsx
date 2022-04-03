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

export default function ListComponent() {
  const { doctorsList, handleDoctorList, searchKeyWord } =
    React.useContext(DoctorContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    const list = JSON.parse(localStorage.getItem('doctorsList'));
    if (searchKeyWord === '') handleDoctorList(list);
    else {
      if (list) {
        const filteredList = list.filter(({ name, specification }) => {
          return searchKeyWord.split('').reduce((prev, char) => {
            return (
              prev ||
              name.indexOf(char) !== -1 ||
              specification.indexOf(char) !== -1
            );
          }, false);
        });

        if (filteredList && filteredList.length) {
          handleDoctorList(filteredList);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchKeyWord]);
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
      {doctorsList &&
        doctorsList.length &&
        doctorsList.map((listItem, index) => {
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
              onClick={() => navigate(`/hospital/doctor/${listItem.id}`)}
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
                        {listItem.specification}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              {index !== doctorsList.length - 1 && (
                <Divider variant="inset" component="li" />
              )}
            </Box>
          );
        })}
    </List>
  );
}
