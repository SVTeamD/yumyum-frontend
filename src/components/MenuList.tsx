import * as React from 'react';
import List from '@mui/material/List';
import MenuItem from './MenuItem';
import OrderDrawer from './OrderDrawer';
import Stores from '../apis/v1/Stores';
import { StoreMenu } from '../apis/v1/schemas/Menus';

export default function MenuList() {
  const [checked, setChecked] = React.useState([0]);
  const [totalBill, setTotalBill] = React.useState(0);
  const [menusList, setMenusList] = React.useState<StoreMenu[]>([
    { name: '', cost: 0, photo_url: '', is_active: true, is_main_menu: false }
  ]);

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
  React.useEffect(() => {
    async function fetchData() {
      const data = await Stores.getStoreMenu(
        Number(
          window.location.href.substring(
            window.location.href.lastIndexOf('/') + 1
          )
        )
      );
      console.log(data);
      setMenusList(data);
    }
    fetchData();
    console.log(menusList);
  }, []);

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
        menuLength={menusList.length}
        bill={totalBill}
        handleTotalBill={handleTotalBill}
      />
    </>
  );
}
