import React, { Component } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import order from '../assets/images/order.jpeg';
import Paper from '@mui/material/Paper';
import Button from '../components/Button';
import LinksButton from '../components/LinksButton';
// import OrderHistory from '../components/OrderHistory';
import constants from '../utils/constants';

export default function OrderDetails() {
  const dummy = {};
  const [orderHistory, setOrderHistory] = useState(false);

  // start
  // keyword 변화를 위한 함수
  const [orders, setOrders] = useState([]);
  const [orderid, setOrderid] = useState([]);
  const [keywords, setKeywords] = useState('');

  const onChange = (e: any) => {
    setKeywords(e.target.value);
  };

  const handleKeyword = (text: any) => {
    console.log('text', text);
    // 카테고리 전체 조회
    axios.get('http://localhost:8080/api/orders').then((response) => {
      setOrders(response.data);
    });
  };

  // 카테고리 생성
  useEffect(() => {
    axios.post('http://localhost:8080/api/orders', {
      order_id: keywords
    });
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/orders/{order_id}')
      .then((response) => {
        setOrders(response.data);
      });
  }, []);

  // end

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
            src={order}
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
          <Button
            buttonName="상세보기"
            height="h-14"
            onClick={() => setOrderHistory(true)}
            xPadding="px-32"
          />
        </div>

        {/* {orderHistory && (
          <OrderHistory
            onClose={() => setOrderHistory(false)}
            orderList={constants.ORDER}
          />
        )} */}
      </div>
    </Grid>
  );
}
