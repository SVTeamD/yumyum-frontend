import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  name: string;
  color: string;
  link: string;
}

export default function LinkButton({ color, link, name }: Props) {
  return (
    <div>
      <Link
        className="flex flex-wrap items-center px-5 w-22 h-11 text-black"
        style={{ backgroundColor: color }}
        to={link}
      >
        {name}
      </Link>
    </div>
  );
}
