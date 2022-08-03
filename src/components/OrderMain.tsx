import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import MenuList from './MenuList';
import StoreDetails from './StoreDetails';
import Stores from '../apis/v1/Stores';
import { StoreSingleSchema } from '../apis/v1/schemas/Stores';

export default function OrderMain() {
  const [store, setStore] = React.useState<StoreSingleSchema>({
    name: '',
    photo_url: '',
    category: '',
    id: 0
  });
  const stores = {
    name: '오션네 바다횟집',
    images: '../assets/images/fishhouse'
  };

  React.useEffect(() => {
    async function fetchData() {
      const data = await Stores.getStore(
        Number(
          window.location.href.substring(
            window.location.href.lastIndexOf('/') + 1
          )
        )
      );
      setStore(data);
    }
    fetchData();
  });
  return (
    <>
      <Box sx={{ width: '100%', padding: '1rem' }}>
        <StoreDetails stores={store} />
        <br />
        <Paper sx={{ borderRadius: '1rem' }}>
          <MenuList />
        </Paper>
      </Box>
    </>
  );
}
