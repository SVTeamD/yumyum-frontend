import React from 'react';
import axios from 'axios';
import { BASE_URL_DEV, BASE_URL_PROD } from '../configs/constants';
import { Menu, MenuSchema, MenuCreateSchema } from './schemas/Menus';

export default class Menus {
  static async createMenus(
    data: MenuCreateSchema,
    image: string
  ): Promise<Menus> {
    const urlToObject = async (image: string) => {
      const response = await fetch(image);
      const blob = await response.blob();
      const file = new File([blob], 'menu.jpg', { type: blob.type });
      return file;
    };
    const formData = new FormData();
    const form = JSON.stringify({
      user_id: data.user_id
    });
    const image_ = await urlToObject(image);
    formData.append('data', form);
    formData.append('menu_image', image_);
    console.log(image_);
    const result = await axios.post(`${BASE_URL_DEV}/menus`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
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
