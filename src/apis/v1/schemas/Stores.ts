export interface Store {
  id: number;
  user_id: number;
  category: string;
  location_id: number;
  name: string;
  description: string;
  photo_url: string;
  is_active: boolean;
}
export interface StoreSchema {
  id: number | undefined;
  category: string;
  name: string | undefined;
  photo_url: string;
  location: [number, number];
}

export interface StoreCreateSchema {
  user_id: number;
  category: string;
  name: string;
  description: string;
  photo_url: string;
}

export interface SingleStoreSchema { //get
  user_id: number;
}
