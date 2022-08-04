// import React from 'react';
// import Button from './Button';
// import menusList from './MenuList';
// import MenuItem from './MenuItem';
// import { dts } from '../utils/types';

// interface Props {
//   onClose: any;
//   orderList: dts.orderList;
//   //   menusList: any;
// }

// export default function OrderHistory({ onClose, orderList }: Props) {
//   const [checked, setChecked] = React.useState([0]);
//   return (
//     // <BasicButton buttonName="확인 완료" onClick={() => window.location.replace('/mypage/orderlist')} />
//     <div
//       className="w-full h-screen top-0 z-50"
//       style={{
//         backgroundColor: 'rgba(1,1,1,0.5)',
//         position: 'fixed',
//         overflow: 'hidden'
//       }}
//     >
//       <div
//         className="rounded"
//         style={{
//           backgroundColor: '#f0f0f0',
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)'
//         }}
//       >
//         <div className="px-24 pb-10 w-full flex flex-col whitespace-nowrap font-bold ">
//           <div className="text-xl pt-12 pb-2">구매 내역</div>
//           <div className="border-b mt-1 w-full border-zinc-300" />
//           <div className="flex py-2 justify-between whitespace-nowrap text-xs">
//             <div className="px-10">메뉴</div>
//             <div className="px-10">수량</div>
//             <div className="px-10">가격</div>
//           </div>
//           {orderList.orders.map((item) => (
//             <div
//               className="grid grid-cols-3 py-2 whitespace-nowrap text-xs"
//               key={item.menu.id}
//             >
//               <div>{item.menu.name}</div>
//               <div className="font-normal text-center ">{item.quantity}</div>
//               <div className="text-center">{item.menu.cost} ₩</div>
//             </div>
//           ))}
//           {/* {menusList.map((menu: any, index: any) => (
//             <MenuItem
//               menus={menu}
//               index={index}
//               setChecked={setChecked}
//               checked={checked}
//             />
//           ))} */}

//           <div className="border-b my-5 w-full border-zinc-300" />
//           <div className="px-6 flex justify-between text-xs">
//             <div className="pl-5">총</div>
//             <div>{orderList.total} ₩</div>
//           </div>

//           <div className="px-4 pt-8 place-self-center">
//             <Button buttonName="확인 완료" onClick={onClose} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
export {};
