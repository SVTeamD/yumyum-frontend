import * as React from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import OrderChoice from './OrderChoice';
import Dialog from '@mui/material/Dialog';

const drawerBleeding = 65;

interface Props {
  window?: () => Window;
  checked: number[];
  menuLength: number;
  menus: {
    name: string;
    cost: number;
    photo_url: string;
    is_main_menu: boolean;
    is_active: boolean;
  }[];
  bill: number;
  handleTotalBill: () => void;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
  ...theme.typography.subtitle1,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}));

const Root = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? grey[100] : '#000'
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
  top: 10,
  left: 'calc(50% - 15px)'
}));

export default function OrderDrawer(props: Props) {
  const { window, menus, checked, menuLength, handleTotalBill } = props;
  const [open, setOpen] = React.useState(false);
  // eslint-disable-next-line prefer-const
  let [count, setCount] = React.useState(Array<number>(100).fill(0));
  // eslint-disable-next-line prefer-const
  let [totalBill, setTotalBill] = React.useState(0);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [takeOut, setTakeOut] = React.useState(false);

  const toggleTakeOut = (isTakeOut: boolean) => {
    setTakeOut(isTakeOut);
  };

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
    handleTotalBill();
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  function incrementCount(index: number) {
    count[index] = count[index] + 1;
    totalBill += menus[index].cost;
    setCount(count);
    setTotalBill(totalBill);
  }

  function decrementCount(index: number) {
    count[index] = count[index] - 1;
    if (count[index] < 0) {
      count[index] = 0;
    }
    totalBill -= menus[index].cost;
    setCount(count);
    setTotalBill(totalBill);
  }

  // React.useEffect(() => {
  //   console.log(menus.length);
  //   setCount(Array<number>(menus.length).fill(0));
  //   console.log(count);
  // });
  return (
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
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={50}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true
        }}
      >
        <StyledBox
          sx={{
            pointerEvents: 'all',
            backgroundColor: '#79A7C8',
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
          <Typography>
            <Box sx={{ textAlign: 'center' }}>
              <Button
                onClick={toggleDrawer(true)}
                sx={{
                  p: 2,
                  color: '#fff',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  fontFamily: 'sans-serif'
                }}
              >
                주문 확인하기
              </Button>
            </Box>
          </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 3,
            pb: 5,
            height: '100%',
            overflow: 'auto',
            paddingTop: '1rem'
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
              {checked.map((value, index) => (
                <Box>
                  <Item>
                    {menus[value].name}
                    <br />
                    {menus[value].cost * count[value]}원
                    <Button onClick={() => decrementCount(value)}>-</Button>
                    {count[value]}인분
                    <Button onClick={() => incrementCount(value)}>+</Button>
                  </Item>
                </Box>
              ))}
            </Stack>
          </Box>
        </StyledBox>
        <StyledBox
          sx={{
            boxShadow: '1px 3px 5px 5px #9E9E9E',
            padding: '1rem',
            height: '30%',
            overflow: 'auto'
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Typography>
              <Box
                sx={{
                  display: 'flex',
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography fontSize="1.5rem">총 금액: {totalBill}</Typography>
                <Button
                  color="error"
                  variant="contained"
                  onClick={handleClickOpen}
                  sx={{
                    p: 1,
                    borderRadius: '1rem',
                    width: '50%',
                    border: '2px solid #D72638',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    fontFamily: 'sans-serif'
                  }}
                >
                  주문하기
                </Button>
              </Box>
            </Typography>
          </Box>
        </StyledBox>
      </SwipeableDrawer>
      <Dialog open={openDialog} onClose={handleClose}>
        <OrderChoice takeOut={takeOut} cost={totalBill} />
      </Dialog>
    </Root>
  );
}
