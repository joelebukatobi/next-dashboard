'use client';
//
import React from 'react';
// Next
import Image from 'next/image';
// Components
import ProfilePicture from '@/_assets/images/dashboard-profile.png';
import { InputGroup } from '@/_components/admin/molecules/InputGroup';
import { DropDown } from '@/_components/admin/molecules/DropDown';
// HeroIcons
import {
  MagnifyingGlassIcon,
  BellIcon,
  ArrowLeftOnRectangleIcon,
  Cog8ToothIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
//

export const Header = () => {
  return (
    <nav className="admin_grid_header">
      <ul aria-label="header_nav">
        <li className="active">
          <a href="">Pages</a>
        </li>
        <li>
          <a href="">Apps</a>
        </li>
        <li>
          <a href="">Layouts</a>
        </li>
      </ul>
      <div aria-label="header-search">
        <form>
          <InputGroup type="text" placeholder="Search..." icon={<MagnifyingGlassIcon />} />
        </form>
      </div>

      <div aria-label="header_profile">
        <DropDown
          icon={<BellIcon />}
          options={[
            { text: 'Notifications', href: '/' },
            { text: 'Notifications', href: '/' },
            { text: 'Notifications', href: '/' },
          ]}
        />
        <DropDown
          // icon={<BellIcon />}
          image={<Image src={ProfilePicture} />}
          options={[
            { icon: <UserIcon />, text: 'Profile', href: '/' },
            { icon: <Cog8ToothIcon />, text: 'Settings', href: '/' },
            { icon: <ArrowLeftOnRectangleIcon />, text: 'Logout', href: '/' },
          ]}
        />
      </div>
    </nav>
  );
};
