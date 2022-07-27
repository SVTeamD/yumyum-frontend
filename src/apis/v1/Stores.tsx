import React from 'react';
import axios from 'axios';
import { BASE_URL_DEV, BASE_URL_PROD } from '../configs/constants';
import { Store, StoreSchema } from './schemas/Stores';
import { Menu, MenuSchema } from './schemas/Menus';

export default class Stores {
  //Get Read Store Info
  static async getStores(storeId: number): Promise<Store> {
    const result = await axios.get(`${BASE_URL_DEV}/stores/`);

    return result.data.map((store: StoreSchema): Store => {
      const { id, userId, category, locationId, name, description, photoUrl } =
        store;
      return {
        id,
        userId,
        category,
        locationId,
        name,
        description,
        photoUrl
      };
    });
  }

  //Get Read Menu Info ???
  static async getStoreMenu(storeId: number): Promise<Store> {
    const result = await axios.get(`${BASE_URL_DEV}/stores/${storeId}/menus/`);

    return result.data.map((menu: MenuSchema): Menu => {
      {
        const { id, storeId, name, cost, description, photoUrl } = menu;
        return {
          id,
          storeId,
          name,
          cost,
          description,
          photoUrl
        };
      }
    });
  }
  //Delete Store By Id
  static async deleteStore(storeId: number) {
    const result = await axios.delete(`${BASE_URL_DEV}/stores/${storeId}/`);

    return result.data;
  }
}
