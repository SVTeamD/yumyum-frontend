import React from 'react';
import axios from 'axios';
import { BASE_URL_DEV, BASE_URL_PROD } from '../configs/constants';
import { Menu, MenuSchema, MenuCreateSchema } from './schemas/Menus';

export default class Menus {
  static async createMenu(data: MenuCreateSchema): Promise<Menu> {
    const result = await axios.post(`${BASE_URL_DEV}/menus`, data);
    return result.data;
  }

  static async getMenus(menuId: number | null): Promise<Menu> {
    const result = await axios.get(`${BASE_URL_DEV}/menus/${menuId}`);
    return result.data;
  }

  static async getMenu(menuName: string | null): Promise<Menu> {
    const result = await axios.get(`${BASE_URL_DEV}/menus/${menuName}`);
    return result.data;
  }
}
