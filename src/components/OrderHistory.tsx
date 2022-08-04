import React from 'react';
import Button from './Button';

interface Props {
  orderId: number | undefined;
  total: number | undefined;
  orderType: boolean | undefined;
  onClose: any;
}

export default function OrderHistory({
  orderId,
  total,
  orderType,
  onClose
}: Props) {
  return (
    <div
      className="w-full h-screen top-0 z-50"
      style={{
        backgroundColor: 'rgba(1,1,1,0.5)',
        position: 'fixed',
        overflow: 'hidden'
      }}
    >
      <div
        className="rounded"
        style={{
          backgroundColor: '#f0f0f0',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="px-24 pb-10 w-full flex flex-col whitespace-nowrap font-bold ">
          <div className="text-xl pt-12 pb-2">구매 내역</div>
          <div className="border-b mt-1 w-full border-zinc-300" />
          <div className="flex py-2 justify-between whitespace-nowrap text-xs">
            <div className="px-10">주문번호 {orderId}번</div>
            <div className="px-10">{orderType ? '나가드슈' : '먹고가슈'}</div>
          </div>

          <div className="border-b my-5 w-full border-zinc-300" />
          <div className="px-6 flex justify-between text-xs">
            <div className="pl-5">총</div>
            <div>₩{total}</div>
          </div>

          <div className="px-4 pt-8 place-self-center">
            <Button buttonName="확인 완료" onClick={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
}
