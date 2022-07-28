import React from 'react';
import axios from 'axios';
import { BASE_URL_DEV, BASE_URL_PROD } from '../configs/constants';
import { Menu, MenuSchema } from './schemas/Menus';

export default class Menus {
  //Get Read Main menu
  static async getMenus(menuId: number): Promise<Menu> {
    const result = await axios.get(`${BASE_URL_DEV}/menus/main`);

    return result.data.map((menu: MenuSchema): Menu => {
      const { id, storeId, name, cost, description, photoUrl } = menu;
      return {
        id,
        storeId,
        name,
        cost,
        description,
        photoUrl
      };
    });
  }
  //Get Read Menu By Id
  static async getMenusById(menuId: number): Promise<Menu> {
    const result = await axios.get(`${BASE_URL_DEV}/menus/${menuId}/`);

    return result.data.map((menu: MenuSchema): Menu => {
      const { id, storeId, name, cost, description, photoUrl } = menu;
      return {
        id,
        storeId,
        name,
        cost,
        description,
        photoUrl
      };
    });
  }
  //Get Read Menu By Name
  static async getMenusByName(menuName: string): Promise<Menu> {
    const result = await axios.get(`${BASE_URL_DEV}/menus/${menuName}/`);

    return result.data.map((menu: MenuSchema): Menu => {
      const { id, storeId, name, cost, description, photoUrl } = menu;
      return {
        id,
        storeId,
        name,
        cost,
        description,
        photoUrl
      };
    });
  }
  //Delete Delete Menu My Id
  static async deleteStore(menuId: number) {
    const result = await axios.delete(`${BASE_URL_DEV}/menus/${menuId}/`);

    return result.data;
  }
}
