export interface Order {
  id: number;
  user_id: number;
  store_id: number;
  datetime: string;
  is_takeout: boolean;
  cost: number;
  is_active: boolean;
}

export interface OrderSchema {
  user_id: number;
  store_id: number;
  is_takeout: boolean;
  cost: number;
}

export interface OrderCreateSchema {
  user_id: number;
  store_id: number;
  is_takeout: boolean;
  cost: number;
}
