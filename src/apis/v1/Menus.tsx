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
    const result = await axios.post(`${BASE_URL_DEV}/menus`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return result.data;
  }
}
