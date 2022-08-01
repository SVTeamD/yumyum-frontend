import * as React from 'react';
import { useState } from 'react';
import List from '@mui/material/List';
import MenuItem from './MenuItem';
import OrderDrawer from './OrderDrawer';
import OrderService from '../services/OrderService';
import { dts } from '../utils/types';

export default function MenuList() {
  const [checked, setChecked] = React.useState([0]);
  const [totalBill, setTotalBill] = React.useState(0);

  const handleTotalBill = () => {
    let total = 0;
    if (checked.length == 0) {
      total = 0;
    } else {
      checked.forEach((index) => {
        total += menusList[index].cost;
      });
    }

    setTotalBill(total);
  };
  const menusList = [
    {
      title: '전어구이',
      cost: 10000,
      image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    },
    {
      title: '연어회',
      cost: 30000,
      image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    },
    {
      title: '갈치조림',
      cost: 10000,
      image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    },
    {
      title: '전어회',
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

  // start
  const [orderInfo, setOrderInfo] = useState<dts.orderDto>({
    menu: { id: '', name: '', cost: '', image: '' },
    quantity: 0
  });
  const sendorderInfo = (e: any) => {
    e.preventDefault();
    const data = {
      id: orderInfo.menu.id,
      name: orderInfo.menu.name,
      cost: orderInfo.menu.cost,
      iamge: orderInfo.menu.image,
      quantity: orderInfo.quantity
    };
  };
  // end

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

      <OrderDrawer
        menus={menusList}
        checked={checked}
        bill={totalBill}
        handleTotalBill={handleTotalBill}
      />
    </>
  );
}
