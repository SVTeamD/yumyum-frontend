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

const drawerBleeding = 65;

interface Props {
  window?: () => Window;
  checked: number[];
  menus: {
    title: string;
    cost: number;
    image: string;
  }[];
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
  ...theme.typography.subtitle1,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

const Root = styled('div')(({ theme }) => ({
  //   height: '10%',
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
  const { window, menus, checked } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

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
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto'
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
              {checked.map((value, index) => (
                <Item>{menus[value].title}</Item>
              ))}
            </Stack>
          </Box>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '30%',
            overflow: 'auto'
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Typography>
              <Box sx={{ textAlign: 'center' }}>
                <Button
                  color="error"
                  variant="contained"
                  sx={{
                    p: 2,
                    borderRadius: '2rem',
                    width: '100%',
                    border: '2px solid #D72638',
                    // color: '#000',
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
    </Root>
  );
}