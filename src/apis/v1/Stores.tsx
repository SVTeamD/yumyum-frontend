import React from 'react';
import axios from 'axios';
import { BASE_URL_DEV, BASE_URL_PROD } from '../configs/constants';
import {
  Store,
  StoreSchema,
  StoreCreateSchema,
  StoreSingleSchema
} from './schemas/Stores';
import { StoreMenu } from './schemas/Menus';

export default class Stores {
  static async createStore(
    data: StoreCreateSchema,
    image: string
  ): Promise<Store> {
    const urlToObject = async (image: string) => {
      const response = await fetch(image);
      const blob = await response.blob();
      const file = new File([blob], 'store.jpg', { type: blob.type });
      return file;
    };
    const formData = new FormData();
    const form = JSON.stringify({
      user_id: data.user_id,
      category: data.category,
      description: data.description,
      location: [String(data.location[0]), String(data.location[1])]
    });
    const image_ = await urlToObject(image);
    formData.append('store_image', image_);
    formData.append('data', form);

    const result = await axios.post(`${BASE_URL_DEV}/stores/`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return result.data;
  }

  static async getStores(): Promise<StoreSchema[]> {
    const result = await axios.get(`${BASE_URL_DEV}/stores/`);
    return result.data.map((store: StoreSchema): StoreSchema => {
      const { id, category, name, photo_url, location } = store;
      return { id, category, name, photo_url, location };
    });
  }

  static async getStoreMenu(storeId: number): Promise<StoreMenu[]> {
    const result = await axios.get(`${BASE_URL_DEV}/stores/${storeId}/menus`);
    return result.data;
  }

  static async getStore(storeId: number): Promise<StoreSingleSchema> {
    const result = await axios.get(`${BASE_URL_DEV}/stores/${storeId}`);
    return result.data;
  }
}
