import { Map as Map_, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import * as React from 'react';
import { Global } from '@emotion/react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import SelectBar from '../components/SelectBar';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import merchant from '../assets/images/merchant.jpeg';
import Stores from '../apis/v1/Stores';
import { Store, StoreSchema } from '../apis/v1/schemas/Stores';

const drawerBleeding = 10;

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%'
});
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
  const { window, latitude, longitude } = props;
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<number>(0);
  const [toggleSelected, setToggleSelected] = React.useState<string[]>([]);
  const [positions, setPositions] = React.useState<StoreSchema[]>([]);
  const [stores, setStore] = React.useState<StoreSchema[]>([
    { id: 0, name: '', category: '', photo_url: '', points: [0, 0] }
  ]);
  const storeState: StoreSchema[] = [];
  const toggleDrawer = (newOpen: boolean, indexOf: number) => () => {
    setOpen(newOpen);
    setSelected(indexOf);
  };

  const handleBarClose = () => {
    toggleSelected.map((checked, index) => {
      const result = positions.filter((content) => content.category == checked);
      result.forEach((value, index) => {
        storeState.push(value);
      });
    });
    setStore(storeState);
    console.log(stores);
  };
  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const category = new Map<string, string>();
  category.set('식당', '🥘');
  category.set('과일가게', '🍓');
  category.set('정육점', '🍖');
  category.set('생선가게', '🐟');
  category.set('반찬가게', '🍡');
  category.set('옷가게', '👕');
  category.set('기타', '👻');

  const loadStores = async () => {
    const data = await Stores.getStores();
    setPositions(data);
  };

  React.useEffect(() => {
    loadStores();
  }, []);
  return (
    <>
      <SelectBar
        setSelected={setToggleSelected}
        handleBarClose={handleBarClose}
      />
      <Map_
        center={{
          lat: latitude,
          lng: longitude
        }}
        style={{ width: '100%', height: '90%' }}
        level={4} // 지도의 확대 레벨
      >
        {stores.map((store, index) => (
          <CustomOverlayMap
            position={{
              lat: store.points[0],
              lng: store.points[1]
            }}
            clickable={true}
          >
            <Button onClick={toggleDrawer(true, index)}>
              <div
                className="label"
                style={{
                  color: '#fff',
                  backgroundColor: '#2e2f2f',
                  borderRadius: '1rem',
                  padding: '0.32rem'
                }}
              >
                <span className="left">{category.get(store.category)}</span>
                <span className="center">{store.name}</span>
              </div>
            </Button>
          </CustomOverlayMap>
        ))}
      </Map_>
      {/* </div> */}
      <Root>
        <CssBaseline />
        <Global
          styles={{
            '.MuiDrawer-root > .MuiPaper-root': {
              height: `calc(22% - ${drawerBleeding}px)`,
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
              paddingLeft: '1rem',
              paddingRight: '1rem',
              paddingTop: '1rem',
              right: 0,
              left: 0,
              height: '100%',
              backgroundColor: '#fff'
            }}
          >
            <Puller />
            <Paper
              sx={{
                p: 2,
                margin: 'auto',
                height: '100%',
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff'
              }}
            >
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase sx={{ width: 128, height: 128 }}>
                    <Img
                      alt="complex"
                      src={merchant}
                      sx={{
                        borderRadius: '2rem',
                        border: 'solid 2px #d3d3d3'
                      }}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={6} sm container>
                  <Grid item xs container direction="column" spacing={0}>
                    <ButtonBase
                      href={`/stores/details/${stores[selected]?.id}`}
                      sx={{
                        width: '11.5rem',
                        height: '8rem',
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: '#ff1744',
                        alignItems: 'center',
                        borderRadius: '2rem',
                        border: 'solid 2px #d3d3d3',
                        boxShadow: '1rem',
                        padding: '1rem'
                      }}
                    >
                      <Grid item xs>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          textAlign="center"
                          fontWeight="bold"
                          sx={{
                            color: '#fff'
                          }}
                        >
                          {stores[selected]?.name}
                          <br />
                          주문하기
                        </Typography>
                      </Grid>
                    </ButtonBase>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </StyledBox>
        </SwipeableDrawer>
      </Root>
    </>
  );
}
