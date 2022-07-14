import React from 'react';
import { Link } from 'react-router-dom';
import LinkButton from '../components/LinkButton';
import HamburgerBar from '../images/HamburgerBar';
import Logo from '../images/Logo';
import AdminImage from '../images/AdminImage';

export default function SelectMode() {
  return (
    <div>
      <div className="flex justify-between whitespace-nowrap text-center items-center text-base">
        <div> 햄버거바 </div>
        {/* <HamburgerBar /> */}
        <Logo />
        <div> 사람모양 </div>
      </div>
      <div className="border-b w-full" style={{ borderColor: '#000000' }} />
      {/* <AdminImage /> */}
      <div className="pt-3">
        <LinkButton color="#C4C4C4" name="주인장이유?" link="/admin" />
      </div>
      <div className="pt-3">
        <LinkButton color="#C4C4C4" name="손님이유?" link="/customer" />
      </div>
    </div>
  );
}
