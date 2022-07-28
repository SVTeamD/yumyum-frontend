import React from 'react';
import axios from 'axios';
import { BASE_URL_DEV, BASE_URL_PROD } from '../configs/constants';
import { Store, StoreSchema, StoreCreateSchema } from './schemas/Stores';

export default class Stores {
  static async getStores(): Promise<StoreSchema[]> {
    const result = await axios.get(`${BASE_URL_DEV}/stores/`);
    return result.data.map((store: StoreSchema): StoreSchema => {
      const { id, category, name, photo_url, points } = store;
      return { id, category, name, photo_url, points };
    });
  }

  // static async createUser(data: UserCreateSchema): Promise<Store> {
  //   console.log(data);
  //   const result = await axios.post(`${BASE_URL_DEV}/users`, data);
  //   console.log(result.data);
  //   return result.data;
  // }

  // static async deleteUser(userId: number) {
  //   const result = await axios.delete(`${BASE_URL_DEV}/users/${userId}/`);

  //   return result.data;
  // }
}
