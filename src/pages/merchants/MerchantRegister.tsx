import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useGeolocated } from 'react-geolocated';
import CategorySelect from '../../components/CategorySelect';
import ImageCrop from '../../components/ImageCrop';
import MenuImageCrop from '../../components/MenuImageCrop';
import { Typography } from '@mui/material';
import home from '../../assets/images/home.png';
import MainAppBar from '../../components/MainAppbar';
import Stores from '../../apis/v1/Stores';
import Menus from '../../apis/v1/Menus';
const defaultSrc = ' ';

export default function MerchantRegister() {
  const [storeImage, setStoreImage] = React.useState(defaultSrc);
  const [menuImage, setMenuImage] = React.useState(defaultSrc);
  const [category, setCategory] = React.useState('');

  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true
    },
    userDecisionTimeout: 5000
  });

  const registerStore = async () => {
    const store = await Stores.createStore(
      {
        user_id: Number(localStorage.getItem('userId')),
        category: category,
        description: '',
        location: [coords?.latitude, coords?.longitude]
      },
      storeImage
    );
    return store;
  };

  const registerMenu = async () => {
    const menu = await Menus.createMenus(
      {
        user_id: Number(localStorage.getItem('userId'))
      },
      menuImage
    );
    return menu;
  };
  return (
    <Box sx={{ overflow: 'auto' }}>
      <MainAppBar />
      <Box sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            marginTop: '1rem',
            marginLeft: '1.5rem',
            display: 'flex',
            alignContent: 'left',
            justifyContent: 'left',
            fontSize: '1.5rem'
          }}
        >
          <div>가게 간판 사진을 올려주세요!</div>
        </Box>
        <div className="px-4">
          <ImageCrop storeImage={storeImage} setStoreImage={setStoreImage} />
        </div>
        <Box
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center'
          }}
        >
          <CategorySelect category={category} setCategory={setCategory} />
        </Box>
        <Box
          sx={{
            marginTop: '1rem',
            marginLeft: '1.5rem',
            display: 'flex',
            alignContent: 'left',
            justifyContent: 'left',
            fontSize: '1.5rem'
          }}
        >
          <div>차림표 추가해보세요!</div>
        </Box>
        <div className="px-4">
          <MenuImageCrop menuImage={menuImage} setMenuImage={setMenuImage} />
        </div>
        <Box
          sx={{
            marginTop: '0.5rem',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem'
          }}
        >
          <div>
            <div>가게의 메뉴판을 찍어주세요!</div>
            <div>자동으로 메뉴가 등록됩니다!</div>
          </div>
        </Box>
      </Box>
      <Button
        sx={{ width: '100%' }}
        onClick={async () => {
          await registerStore();
          await registerMenu();
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '51%',
            borderTopLeftRadius: '1rem',
            borderTopRightRadius: '1rem',
            border: 'solid 1px',
            backgroundColor: '#79a7c8'
          }}
        >
          <Typography
            sx={{
              width: '100%',
              height: '50%',
              fontWeight: '800',
              padding: '3rem',
              display: 'flex',
              justifyContent: 'center',
              fontSize: '1.8rem'
            }}
          >
            <Box
              sx={{
                width: 50,
                height: 45,
                marginRight: '1rem',
                justifyContent: 'center',
                backgroundImage: `url(${home})`
              }}
            />
            가게 등록하기
          </Typography>
        </Box>
      </Button>
    </Box>
  );
}
