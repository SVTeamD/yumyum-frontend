import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%'
});

interface Props {
  menus: {
    title: string;
    cost: number;
    image: string;
  };
}

export default function MenuItem({ menus }: Props) {
  return (
    <>
      <ButtonBase sx={{ width: '100%' }}>
        <ListItem>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="h5"
                  color="text.primary"
                >
                  {menus.title}
                </Typography>
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="h6"
                  color="text.primary"
                >
                  {menus.cost}원
                </Typography>
              </React.Fragment>
            }
          />
          <ListItemAvatar>
            <Box sx={{ width: 185, height: 128 }}>
              <Img
                alt="complex"
                src={menus.image}
                sx={{
                  borderRadius: '1rem',
                  border: 'solid 2px #d3d3d3'
                }}
              />
            </Box>
          </ListItemAvatar>
        </ListItem>
      </ButtonBase>
      <Divider component="li" sx={{ borderBottomWidth: '0.2rem' }} />
    </>
  );
}
