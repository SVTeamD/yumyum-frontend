import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { styled } from '@mui/material/styles';

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
  index: number;
  checked: number[];
  setChecked: (checked: number[]) => void;
}

export default function MenuItem({ menus, index, setChecked, checked }: Props) {
  const handleToggle = (index: number) => () => {
    const currentIndex = checked.indexOf(index);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(index);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <>
      <ButtonBase sx={{ width: '100%', height: '100%' }}>
        <ListItem disablePadding>
          <ListItemButton role={undefined} onClick={handleToggle(index)} dense>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(index) !== -1}
                tabIndex={-1}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText
              primary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="h6"
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
                    variant="subtitle1"
                    color="text.primary"
                  >
                    {menus.cost}원
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItemButton>
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
