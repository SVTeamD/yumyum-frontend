export interface Menu {
  id: number;
  storeId: number;
  name: string;
  cost: number;
  description: string;
  photoUrl: string;
}

//get
export interface MenuSchema {
  id: number;
  storeId: number;
  name: string;
  cost: number;
  description: string;
  photoUrl: string;
}

//create
export interface MenuCreateSchema {
  name: string;
  cost: number;
  description: string;
  photoUrl: string;
}
