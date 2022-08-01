import React from 'react';
import axios from 'axios';
import { BASE_URL_DEV, BASE_URL_PROD } from '../configs/constants';
import { Order, OrderSchema, OrderCreateSchema } from './schemas/Orders';

export default class Orders {
  static async createOrder(data: OrderCreateSchema): Promise<Order> {
    const result = await axios.post(`${BASE_URL_DEV}/orders`, data);
    return result.data;
  }

  static async getOrder(userId: number | null): Promise<Order> {
    const result = await axios.get(`${BASE_URL_DEV}/orders/${userId}`);
    return result.data;
  }
}
