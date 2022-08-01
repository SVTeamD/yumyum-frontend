export interface User {
  id: number;
  userType: boolean;
  name: string;
  gender: string;
  ageRange: string;
  phoneNumber: string;
  token: string;
}
export interface UserSchema {
  id: number;
  userType: boolean;
  name: string;
  gender: string;
  ageRange: string;
  phoneNumber: string;
  token: string;
}

export interface UserCreateSchema {
  user_type: boolean;
  name: string;
  gender: string | null;
  age_range: string | null;
  phone_num: string | null;
  token: string | null;
}
