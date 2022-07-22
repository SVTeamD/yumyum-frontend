import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%'
});
export default function MenuList() {
  const menus = [
    {
      title: '생선구이',
      cost: 10000,
      description: ' — 이것은 음식 설명 예시 입니다. llipsum lorum  ',
      image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    },
    {
      title: '삼겹살',
      cost: 30000,
      description: ' — 이것은 음식 설명 예시 입니다. llipsum lorum  ',
      image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    },
    {
      title: '제육볶음',
      cost: 10000,
      description: ' — 이것은 음식 설명 예시 입니다. llipsum lorum  ',
      image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    },
    {
      title: '고등어조림',
      cost: 20000,
      description: ' — 이것은 음식 설명 예시 입니다. llipsum lorum  ',
      image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    },
    {
      title: '한국음식',
      cost: 40000,
      description: ' — 이것은 음식 설명 예시 입니다. llipsum lorum  ',
      image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    }
  ];
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {menus.map((menus, index) => (
        <>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={menus.title}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {menus.cost}
                  </Typography>
                  {menus.description}
                </React.Fragment>
              }
            />
            <ListItemAvatar>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img
                  alt="complex"
                  src={menus.image}
                  sx={{
                    borderRadius: '2rem',
                    border: 'solid 2px #d3d3d3'
                  }}
                />
              </ButtonBase>
            </ListItemAvatar>
          </ListItem>
          <Divider variant="inset" component="li" />
        </>
      ))}
    </List>
  );
}
