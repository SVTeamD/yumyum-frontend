import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';

import Orders from '../apis/v1/Orders';

interface Props {
  takeOut: boolean;
  cost: number;
}

export default function OrderChoice({ takeOut, cost }: Props) {
  const [userId, setUserId] = React.useState<number>(0);
  const [storeId, setStoreId] = React.useState(0);
  const handleOrder = async () => {
    const data = await Orders.createOrder({
      user_id: userId,
      store_id: storeId,
      is_takeout: takeOut,
      cost: cost
    });
    return data;
  };

  React.useEffect(() => {
    setUserId(Number(localStorage.getItem('userId')));
    setStoreId(
      Number(
        window.location.href.substring(
          window.location.href.lastIndexOf('/') + 1
        )
      )
    );
  }, []);
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '10vh' }}
      >
        <Grid item xs={2}>
          <Grid container alignItems="center">
            <Grid style={{ padding: '1rem' }}>
              <Button
                onClick={() => {
                  takeOut = true;
                  handleOrder();
                }}
                variant="contained"
                color="success"
                href={`/order/details/${userId}`}
                startIcon={<TakeoutDiningIcon />}
                sx={{
                  fontSize: '1rem',
                  weight: '5rem',
                  height: '5rem',
                  color: '#000',
                  borderRadius: '1rem'
                }}
              >
                포장하기
              </Button>
            </Grid>
            <Grid style={{ padding: '1rem' }}>
              <Button
                onClick={() => {
                  takeOut = false;
                  handleOrder();
                }}
                variant="contained"
                color="primary"
                href={`/order/details/${userId}`}
                startIcon={<StoreMallDirectoryIcon />}
                sx={{
                  fontSize: '1rem',
                  weight: '5rem',
                  height: '5rem',
                  color: '#000',
                  borderRadius: '1rem'
                }}
              >
                먹고가기
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
