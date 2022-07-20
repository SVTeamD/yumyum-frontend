import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import * as React from 'react';
import { Global } from '@emotion/react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import SelectBar from '../components/SelectBar';

const drawerBleeding = 10;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light'
      ? grey[100]
      : theme.palette.background.default
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800]
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)'
}));

interface Props {
  window?: () => Window;
  latitude: number;
  longitude: number;
}

export default function MarketMap(props: Props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<number>(0);

  const toggleDrawer = (newOpen: boolean, indexOf: number) => () => {
    setOpen(newOpen);
    setSelected(indexOf);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const positions = [
    {
      title: '성민이네 과일가게',
      latlng: { lat: 33.450705, lng: 126.570677 }
    },
    {
      title: '인철이네 생선가게',
      latlng: { lat: 33.450936, lng: 126.569477 }
    },
    {
      title: '주원이네 정육점',
      latlng: { lat: 33.450879, lng: 126.56994 }
    },
    {
      title: '주희네 백반',
      latlng: { lat: 33.450723, lng: 126.57008 }
    },
    {
      title: '현정이네 칼국수',
      latlng: { lat: 33.450693, lng: 126.570738 }
    },
    {
      title: '상우네 국밥',
      latlng: { lat: 33.4506393, lng: 126.570738 }
    }
  ];
  return (
    <>
      {/* <div style={{ position: 'relative', zIndex: '1' }}> */}
      <SelectBar />
      {/* </div> */}
      {/* <div style={{ position: 'relative', zIndex: '2' }}> */}
      <Map
        center={{
          lat: positions[0].latlng.lat,
          lng: positions[0].latlng.lng
        }}
        style={{ width: '100%', height: '90%' }}
        level={1} // 지도의 확대 레벨
      >
        {positions.map((position, index) => (
          <CustomOverlayMap
            position={{
              lat: position.latlng.lat,
              lng: position.latlng.lng
            }}
            clickable={true}
          >
            <Button onClick={toggleDrawer(true, index)}>
              <div
                className="label"
                style={{ color: '#000', backgroundColor: '#fff' }}
              >
                <span className="left">{index}</span>
                <span className="center">{position.title}</span>
                <span className="right"></span>
              </div>
            </Button>
          </CustomOverlayMap>
        ))}
      </Map>
      {/* </div> */}
      <Root>
        <CssBaseline />
        <Global
          styles={{
            '.MuiDrawer-root > .MuiPaper-root': {
              height: `calc(50% - ${drawerBleeding}px)`,
              overflow: 'visible'
            }
          }}
        />
        <SwipeableDrawer
          container={container}
          anchor="bottom"
          open={open}
          onClose={toggleDrawer(false, selected)}
          onOpen={toggleDrawer(true, selected)}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true
          }}
        >
          <StyledBox
            sx={{
              position: 'absolute',
              top: -drawerBleeding,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              visibility: 'visible',
              right: 0,
              left: 0
            }}
          >
            <Puller />
            <Typography
              sx={{
                p: 2,
                color: 'text.secondary'
              }}
            >
              {selected}
            </Typography>
          </StyledBox>
          <StyledBox
            sx={{
              px: 2,
              pb: 2,
              height: '100%',
              overflow: 'auto'
            }}
          >
            {selected}
            Hello
            {/* <Skeleton variant="rectangular" height="100%" /> */}
          </StyledBox>
        </SwipeableDrawer>
      </Root>
    </>
  );
}
