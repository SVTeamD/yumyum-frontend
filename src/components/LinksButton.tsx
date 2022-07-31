import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  buttonName: string;
  xPadding?: string;
  height?: string;
  color?: string;
  link: string;
}

export default function BasicButton({
  buttonName,
  xPadding = 'px-10',
  height = 'h-14',
  color = '#79A7C8',
  link
}: Props) {
  return (
    <Link
      type="button"
      className={`whitespace-nowrap items-center rounded text-base font-bold text-white text-center 
        ${xPadding} object-left-top ${height} ${color}`}
      style={{ backgroundColor: '#79A7C8' }}
      to={link}
    >
      <div className="pt-3.5">{buttonName}</div>
    </Link>
  );
}
