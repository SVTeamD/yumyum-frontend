import React from 'react';
import axios from 'axios';
import { BASE_URL_DEV, BASE_URL_PROD } from '../configs/constants';
import { Store, StoreSchema, StoreCreateSchema } from './schemas/Stores';

export default class Stores {
  static async getStores(): Promise<StoreSchema[]> {
    const result = await axios.get(`${BASE_URL_DEV}/stores/`);
    return result.data.map((store: StoreSchema): StoreSchema => {
      const { id, category, name, photo_url, location } = store;
      return { id, category, name, photo_url, location };
    });
  }
}
