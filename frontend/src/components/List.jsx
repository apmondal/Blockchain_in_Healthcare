import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

export default function ListComponent({ listItems }) {
  return (
    <List sx={{ width: '100%', maxWidth: 450, bgcolor: 'background.paper' }}>
      {listItems.length &&
        listItems.map((listItem, index) => (
          <Box
            key={listItem.id}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                color: 'red',
              },
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={listItem.name} src="/static/images/avatar/1.jpg" />
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
                      {listItem.description}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            {index !== listItems.length - 1 && (
              <Divider variant="inset" component="li" />
            )}
          </Box>
        ))}
    </List>
  );
}
