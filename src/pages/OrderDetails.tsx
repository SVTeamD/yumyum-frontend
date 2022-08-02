import React, { Component } from 'react';
import { Grid, Box, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import orderImage from '../assets/images/order.jpeg';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonM from '../components/Button';
import LinksButton from '../components/LinksButton';
import OrderHistory from '../components/OrderHistory';
// import constants from '../utils/constants';

import Orders from '../apis/v1/Orders';
import { Order } from '../apis/v1/schemas/Orders';

export default function OrderDetails() {
  const [userId, setUserId] = React.useState<number>();
  const [order, setOrder] = React.useState<Order>();
  const [show, setShow] = React.useState(false);
  const [orderHistory, setOrderHistory] = React.useState(false);
  const fetchOrder = async () => {
    const data = await Orders.getOrder(Number(userId));
    setOrder(data);
    return data;
  };
  React.useEffect(() => {
    setUserId(
      Number(
        window.location.href.substring(
          window.location.href.lastIndexOf('/') + 1
        )
      )
    );
  }, []);
  return (
    <Grid container direction="column">
      <Box
        sx={{
          flexFlow: 'column',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
          padding: '2rem',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'
        }}
      >
        <Paper>
          <Box
            component="img"
            sx={{
              alignItems: 'center'
            }}
            alt="Order Complete."
            src={orderImage}
          />
        </Paper>
        <Typography
          align="center"
          sx={{
            marginTop: '2rem',
            marginBottom: '1rem',
            fontSize: '2rem',
            fontFamily: 'Gungseo'
          }}
        >
          주문해줘서 감사해유!
        </Typography>
        <Paper sx={{ width: '100%' }}>
          <Typography
            align="center"
            sx={{
              marginTop: '1rem',
              marginBottom: '1rem',
              color: '#2E2F2F',
              fontSize: '1.5rem',
              fontFamily: 'Gungseo'
            }}
          >
            <Button
              sx={{
                color: '#000',
                fontSize: '1.5rem',
                fontStyle: 'bold',
                fontFamily: 'Gungseo',
                borderRadius: '1rem'
              }}
              onClick={() => {
                fetchOrder();
                setShow((prev: any) => !prev);
              }}
            >
              주문을 확인해보슈
            </Button>
            {show && (
              <>
                <br />
                주문번호 {order?.id}번 <br />
                합계 {order?.cost}원 <br />
                {order?.is_takeout ? '나가드슈' : '먹고가슈'} <br />
              </>
            )}
          </Typography>
        </Paper>
      </Box>
      <div className="flex flex-col items-center">
        <div className="pt-16">
          <LinksButton
            buttonName="메인화면"
            height="h-14"
            xPadding="px-32"
            link="/customer"
          />
        </div>
        <div className="pt-5">
          <ButtonM
            buttonName="상세보기"
            height="h-14"
            onClick={() => setOrderHistory(true)}
            xPadding="px-32"
          />
        </div>

        {orderHistory && (
          <OrderHistory onClose={() => setOrderHistory(false)} />
        )}
      </div>
    </Grid>
  );
}
