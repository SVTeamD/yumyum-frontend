import React from 'react';

interface Props {
  buttonName: string;
  onClick: any;
  xPadding?: string;
  height?: string;
  state?: string;
  color?: string;
}

export default function Button({
  buttonName,
  onClick,
  xPadding = 'px-12',
  height = 'h-12',
  color = '#79A7C8'
}: Props) {
  return (
    <button
      type="button"
      className={`whitespace-nowrap items-center rounded text-base font-bold text-white text-center 
        ${xPadding} object-left-top ${height} ${color}`}
      style={{ backgroundColor: '#79A7C8' }}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
}
