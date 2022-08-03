import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import List from '@mui/material/List';
import MenuItem from './MenuItem';
import OrderDrawer from './OrderDrawer';
import OrderService from '../services/OrderService';
import { dts } from '../utils/types';

export default function MenuList() {
  const [checked, setChecked] = React.useState([0]);
  const [totalBill, setTotalBill] = React.useState(0);

  // start
  const [menuInfo, setMenuInfo] = useState<dts.menuDto[]>([
    { name: '', cost: 0, photo_url: '', is_active: true, is_main_menu: true }
  ]);
  const store_id = 1;
  //   [{
  //     "name": 'string'
  //     "cost": "string"
  //     "photo_url": "string"
  //     "is_active": true
  //     "is_main_menu": true}
  // ]

  // const handleKeyword = (text: any) => {
  //   console.log('text', text);

  // 메뉴 목록 조회
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/stores/${store_id}/menus`)
      .then((response) => {
        setMenuInfo(response.data);
      });
  }, []);
  // // end

  const handleTotalBill = () => {
    let total = 0;
    if (checked.length == 0) {
      total = 0;
    } else {
      checked.forEach((index) => {
        total += menuInfo[index].cost;
      });
    }

    setTotalBill(total);
  };
  const menusList = [
    {
      name: '전어구이',
      cost: 10000,
      photo_url: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    },
    {
      name: '연어회',
      cost: 30000,
      photo_url: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    },
    {
      name: '갈치조림',
      cost: 10000,
      photo_url: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    }
    // {
    //   title: '전어회',
    //   cost: 20000,
    //   image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    // },
    // {
    //   title: '한국음식',
    //   cost: 40000,
    //   image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    // },
    // {
    //   title: '한국음식',
    //   cost: 40000,
    //   image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    // },
    // {
    //   title: '한국음식',
    //   cost: 40000,
    //   image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    // },
    // {
    //   title: '한국음식',
    //   cost: 40000,
    //   image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    // },
    // {
    //   title: '한국음식',
    //   cost: 40000,
    //   image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    // }
  ];

  // // start
  // const [orderInfo, setOrderInfo] = useState<dts.orderDto>({
  //   menu: { id: '', name: '', cost: 0, image: '' },
  //   quantity: 0
  // });
  // const sendorderInfo = (e: any) => {
  //   e.preventDefault();
  //   const data = {
  //     id: orderInfo.menu.id,
  //     name: orderInfo.menu.name,
  //     cost: orderInfo.menu.cost,
  //     iamge: orderInfo.menu.image,
  //     quantity: orderInfo.quantity
  //   };
  // };
  // // end

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
        {menuInfo.map((menu, index) => (
          <MenuItem
            menus={menu}
            index={index}
            setChecked={setChecked}
            checked={checked}
          />
        ))}
      </List>

      <OrderDrawer
        menus={menuInfo}
        checked={checked}
        bill={totalBill}
        handleTotalBill={handleTotalBill}
      />
    </>
  );
}
