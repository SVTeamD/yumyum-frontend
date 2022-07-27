import React from 'react';
import axios from 'axios';
import { BASE_URL_DEV, BASE_URL_PROD } from '../configs/constants';
import { Order, OrderSchema } from './schemas/Orders';

export default class Users {
  static async getOrders(orderId: number): Promise<Order> {
    const result = await axios.get(`${BASE_URL_DEV}/orders`);

    return result.data.map((order: OrderSchema): Order => {
      const { id, userId, storeId, datetime, cost } = order;
      return { id, userId, storeId, datetime, cost };
    });
  }

  static async getOrdersById(id: number): Promise<Order> {
    const result = await axios.get(`${BASE_URL_DEV}/orders/${id}`);

    return result.data.map((order: OrderSchema): Order => {
      const { id, userId, storeId, datetime, cost } = order;
      return { id, userId, storeId, datetime, cost };
    });
  }

  static async getOrdersByUserId(userId: number): Promise<Order> {
    const result = await axios.get(`${BASE_URL_DEV}/orders/user/${userId}`);

    return result.data.map((order: OrderSchema): Order => {
      const { id, userId, storeId, datetime, cost } = order;
      return { id, userId, storeId, datetime, cost };
    });
  }

  static async getOrdersByStoreId(storeId: number): Promise<Order> {
    const result = await axios.get(`${BASE_URL_DEV}/orders/store/${storeId}`);

    return result.data.map((order: OrderSchema): Order => {
      const { id, userId, storeId, datetime, cost } = order;
      return { id, userId, storeId, datetime, cost };
    });
  }

  static async deleteOrder(orderId: number) {
    const result = await axios.delete(`${BASE_URL_DEV}/orders/${orderId}/`);

    return result.data;
  }
}
