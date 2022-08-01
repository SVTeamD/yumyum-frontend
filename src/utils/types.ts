// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace dts {
  export interface menuDto {
    id: string;
    name: string;
    cost: string;
    image: string;
  }

  export interface orderDto {
    menu: menuDto;
    quantity: number;
  }

  export interface orderList {
    orders: Array<orderDto>;
    takeout: boolean;
    total: number;
  }
}
