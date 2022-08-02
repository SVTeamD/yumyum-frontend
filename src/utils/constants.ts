export const API_URL = 'http://localhost:8080/api';
const constants = {
  MENU_ITEMS: [
    {
      id: '1',
      title: '전어구이',
      cost: 10000,
      image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    },
    {
      id: '2',
      title: '연어회',
      cost: 30000,
      image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    },
    {
      id: '3',
      title: '갈치조림',
      cost: 10000,
      image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    },
    {
      id: '4',
      title: '전어회',
      cost: 20000,
      image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    },
    {
      id: '5',
      title: '한국음식',
      cost: 40000,
      image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    },
    {
      id: '6',
      title: '한국음식',
      cost: 40000,
      image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    },
    {
      id: '7',
      title: '한국음식',
      cost: 40000,
      image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    },
    {
      id: '8',
      title: '한국음식',
      cost: 40000,
      image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    },
    {
      id: '9',
      title: '한국음식',
      cost: 40000,
      image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
    }
  ],
  ORDER: {
    orders: [
      {
        menu: {
          id: '1',
          name: '짜장면',
          cost: 5000,
          image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
        },
        quantity: 1
      },
      {
        menu: {
          id: '2',
          name: '짬뽕',
          cost: 6000,
          image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
        },
        quantity: 4
      },
      {
        menu: {
          id: '3',
          name: '볶음밥',
          cost: 5500,
          image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
        },
        quantity: 3
      }
    ],
    takeout: false,
    total: 40000
  }
};
export default constants;
