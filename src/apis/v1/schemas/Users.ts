export interface User {
  id: number;
  isCustomer: boolean;
  name: string;
  gender: string;
  ageRange: string;
  phoneNumber: string;
}
export interface UserSchema {
  id: number;
  isCustomer: boolean;
  name: string;
  gender: string;
  ageRange: string;
  phoneNumber: string;
}

export interface UserCreateSchema {
  isCustomer: boolean | null;
  name: string;
  gender: string | null;
  ageRange: string | null;
  phoneNumber: string | null;
}
