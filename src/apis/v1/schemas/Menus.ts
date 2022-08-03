export interface Menu {
  id: number;
  name: string;
  cost: string;
  photo_url: string;
  is_active: true;
  is_main_menu: true;
}
export interface MenuSchema {
  store_id: number;
  name: string;
  cost: string;
  photo_url: string;
}

export interface MenuCreateSchema {
  store_id: number;
  name: string;
  cost: string;
  photo_url: string;
}
