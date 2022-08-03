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
  const [menuInfo, setMenuInfo] = useState<dts.menuDto[]>([
    { name: '', cost: 0, photo_url: '', is_active: true, is_main_menu: true }
  ]);

  const store_id = 1;

  // 메뉴 목록 조회
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/stores/${store_id}/menus`)
      .then((response) => {
        setMenuInfo(response.data);
      });
  }, []);

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
