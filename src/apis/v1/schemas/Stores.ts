//기본
export interface Store {
  id: number;
  userId: number;
  category: string;
  locationId: number;
  name: string;
  description: string;
  photoUrl: string;
}

//get
export interface StoreSchema {
  id: number;
  userId: number;
  category: string;
  locationId: number;
  name: string;
  description: string;
  photoUrl: string;
}

//create
export interface StoreCreateSchema {
  category: string;
  locationId: number;
  name: string;
  description: string;
  photoUrl: string;
}
