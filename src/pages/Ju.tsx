// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import Logo from '../assets/Logo';
// import Grid from '@mui/material/Grid';

// import customerImage from '../assets/images/customer.jpeg';
// import merchantImage from '../assets/images/merchant.jpeg';
// import UploadButtons from '../components/UploadButtons';
// import CategorySelect from '../components/CategorySelect';
// import ImageCrop from '../components/ImageCrop';
// import MenuImageCrop from '../components/MenuImageCrop';
// import { fontSize } from '@mui/system';
// import { Typography } from '@mui/material';
// import home from '../assets/images/home.png';
// import { Height } from '@mui/icons-material';
// import { dts } from '../';

// export default function Ju() {
//   const [auth, setAuth] = React.useState(true);
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setAuth(event.target.checked);
//   };

//   const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div className="h-5/6 overflow-y-scroll">
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static" style={{ background: '#fff2ea' }}>
//           <Toolbar
//             sx={{
//               justifyContent: 'space-between'
//             }}
//           >
//             <IconButton
//               size="large"
//               edge="start"
//               aria-label="menu"
//               sx={{
//                 mr: 2
//               }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Logo />
//             {auth && (
//               <div>
//                 <IconButton
//                   size="large"
//                   aria-label="account of current user"
//                   aria-controls="menu-appbar"
//                   aria-haspopup="true"
//                   onClick={handleMenu}
//                 >
//                   <AccountCircle />
//                 </IconButton>
//                 <Menu
//                   id="menu-appbar"
//                   anchorEl={anchorEl}
//                   anchorOrigin={{
//                     vertical: 'top',
//                     horizontal: 'right'
//                   }}
//                   keepMounted
//                   transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'right'
//                   }}
//                   open={Boolean(anchorEl)}
//                   onClose={handleClose}
//                 ></Menu>
//               </div>
//             )}
//           </Toolbar>
//         </AppBar>

//         <Box
//           sx={{
//             marginTop: '1rem',
//             marginLeft: '1.5rem',
//             display: 'flex',
//             alignContent: 'left',
//             justifyContent: 'left',
//             fontSize: '1.5rem'
//           }}
//         >
//           <div>"가게 이름이 뭐라구유?"</div>
//         </Box>
//         {/* <Box
//         component="span"
//         sx={{
//           marginTop: '0.5rem',
//           marginLeft: '1.5rem',
//           marginRight: '1.5rem',
//           fontSize: '1.5rem',
//           border: '1px solid grey',
//           display: 'flex',
//           alignContent: 'center'
//         }}
//       >
//         <div>
//           <JuCrop />
//         </div>
//       </Box> */}
//         <div className="px-4">
//           <ImageCrop />
//         </div>

//         <Box
//           sx={{
//             display: 'flex',
//             alignContent: 'center',
//             justifyContent: 'center'
//           }}
//         >
//           <CategorySelect></CategorySelect>
//         </Box>
//         <Box
//           sx={{
//             marginTop: '1rem',
//             marginLeft: '1.5rem',
//             display: 'flex',
//             alignContent: 'left',
//             justifyContent: 'left',
//             fontSize: '1.5rem'
//           }}
//         >
//           <div>"차림표 추가해봐유!"</div>
//         </Box>
//         {/* <Box
//         component="span"
//         sx={{
//           marginTop: '0.5rem',
//           marginLeft: '1.5rem',
//           marginRight: '1.5rem',
//           fontSize: '1.5rem',
//           border: '1px solid grey',
//           display: 'flex',
//           alignContent: 'center',
//           justifyContent: 'center'
//         }}
//       >
//         <div>
//           <JuCrop />
//         </div>
//       </Box> */}
//         <div className="px-4">
//           <MenuImageCrop />
//         </div>
//         <Box
//           sx={{
//             marginTop: '0.5rem',
//             display: 'flex',
//             alignContent: 'center',
//             justifyContent: 'center',
//             fontSize: '1.5rem'
//           }}
//         >
//           <div>
//             <div>"가게의 메뉴판을 찍어주세여!</div>
//             <div>"자동으로 메뉴가 등록됩니다!</div>
//           </div>
//         </Box>
//         <div className="fixed bottom-0">
//           <Box
//             sx={{
//               // marginTop: '0.5rem',
//               width: '100%',
//               height: '51%',
//               borderTopLeftRadius: '1rem',
//               borderTopRightRadius: '1rem',
//               border: 'solid 1px',
//               backgroundColor: '#79a7c8'
//             }}
//           >
//             <Grid xs={8} item>
//               <Typography
//                 sx={{
//                   width: '100%',
//                   height: '50%',
//                   fontWeight: '800',
//                   padding: '3rem',
//                   display: 'flex',
//                   justifyContent: 'center',
//                   fontSize: '1.8rem'
//                 }}
//               >
//                 <Box
//                   sx={{
//                     width: 50,
//                     height: 45,
//                     justifyContent: 'center',
//                     backgroundImage: `url(${home})`
//                   }}
//                 ></Box>
//                 "가게 등록 마치기!"
//               </Typography>
//             </Grid>
//           </Box>
//         </div>
//       </Box>
//     </div>
//   );
// }
export {};
