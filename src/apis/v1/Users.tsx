import React from 'react';
import axios from 'axios';
import { BASE_URL_DEV, BASE_URL_PROD } from '../configs/constants';
import { User, UserSchema, UserCreateSchema } from './schemas/Users';

export default class Users {
  static async getUsers(token: string | null): Promise<User> {
    const result = await axios.get(`${BASE_URL_DEV}/users/${token}/`);

    return result.data.map((user: UserSchema): User => {
      const { id, userType, name, gender, ageRange, phoneNumber, token } = user;
      return { id, userType, name, gender, ageRange, phoneNumber, token };
    });
  }

  static async createUser(data: UserCreateSchema): Promise<User> {
    const result = await axios.post(`${BASE_URL_DEV}/users`, data);
    return result.data;
  }

  static async deleteUser(userId: number) {
    const result = await axios.delete(`${BASE_URL_DEV}/users/${userId}/`);

    return result.data;
  }
}
