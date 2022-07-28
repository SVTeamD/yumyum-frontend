import React from 'react';
import axios from 'axios';
import { BASE_URL_DEV, BASE_URL_PROD } from '../configs/constants';
import { User, UserSchema, UserCreateSchema } from './schemas/Users';

export default class Users {
  static async getUsers(userId: number): Promise<User> {
    const result = await axios.get(`${BASE_URL_DEV}/users/${userId}/`);

    return result.data.map((user: UserSchema): User => {
      const { id, userType, name, gender, ageRange, phoneNumber } = user;
      return { id, userType, name, gender, ageRange, phoneNumber };
    });
  }

  static async createUser(data: UserCreateSchema): Promise<User> {
    console.log(data);
    const result = await axios.post(`${BASE_URL_DEV}/users`, data);
    console.log(result.data);
    return result.data;
  }

  static async deleteUser(userId: number) {
    const result = await axios.delete(`${BASE_URL_DEV}/users/${userId}/`);

    return result.data;
  }
}
