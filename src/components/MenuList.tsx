import * as React from 'react';
import List from '@mui/material/List';
import MenuItem from './MenuItem';
import OrderDrawer from './OrderDrawer';

export default function MenuList() {
  const [checked, setChecked] = React.useState([0]);

  const menusList = [
    {
      title: '생선구이',
      cost: 10000,
      image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    },
    {
      title: '삼겹살',
      cost: 30000,
      image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    },
    {
      title: '제육볶음',
      cost: 10000,
      image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    },
    {
      title: '고등어조림',
      cost: 20000,
      image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    },
    {
      title: '한국음식',
      cost: 40000,
      image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    },
    {
      title: '한국음식',
      cost: 40000,
      image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    },
    {
      title: '한국음식',
      cost: 40000,
      image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    },
    {
      title: '한국음식',
      cost: 40000,
      image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    },
    {
      title: '한국음식',
      cost: 40000,
      image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    }
  ];
  return (
    <>
      <List
        disablePadding
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          borderRadius: '1rem',
          justifyContent: 'space-between'
        }}
      >
        {menusList.map((menu, index) => (
          <MenuItem
            menus={menu}
            index={index}
            setChecked={setChecked}
            checked={checked}
          />
        ))}
      </List>
      <OrderDrawer menus={menusList} checked={checked} />
    </>
  );
}
