// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace dts {
  export interface menuDto {
    name: string;
    cost: number;
    photo_url: string;
    is_active: boolean;
    is_main_menu: boolean;
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
