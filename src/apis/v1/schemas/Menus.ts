export interface Menu {
  id: number;
  name: string;
  cost: number;
  photo_url: string;
  is_main_menu: boolean;
  is_active: boolean;
}

export interface MenuSchema {
  user_id: number;
  store_id: number;
  is_takeout: boolean;
  cost: number;
}

export interface MenuCreateSchema {
  user_id: number;
}
