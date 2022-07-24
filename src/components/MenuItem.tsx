import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import OrderChoice from './OrderChoice';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'cover'
});

interface Props {
  menus: {
    title: string;
    cost: number;
    image: string;
  };
}

export default function MenuItem({ menus }: Props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ButtonBase
        sx={{ width: '100%', height: '100%' }}
        onClick={handleClickOpen}
      >
        <ListItem disablePadding sx={{ paddingLeft: '1.5rem' }}>
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
            <Box sx={{ width: '12rem', height: '100%' }}>
              <Img
                alt="complex"
                src={menus.image}
                sx={{
                  borderStartEndRadius: '1rem',
                  border: 'solid 1px #d3d3d3'
                }}
              />
            </Box>
          </ListItemAvatar>
        </ListItem>
      </ButtonBase>
      <Divider component="li" />
    </>
  );
}
