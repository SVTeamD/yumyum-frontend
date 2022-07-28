export interface Order {
  id: number;
  userId: number;
  storeId: number;
  datetime: string;
  cost: number;
}

//get
export interface OrderSchema {
  id: number;
  userId: number;
  storeId: number;
  datetime: string;
  cost: number;
}

//create
export interface OrderCreateSchema {
  atetime: string;
  cost: number;
}
