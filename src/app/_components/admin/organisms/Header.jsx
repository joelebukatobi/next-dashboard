'use client';
import React from 'react';
// Next
import Image from 'next/image';

//
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
//
import ProfilePicture from '@/_assets/images/dashboard-profile.png';
import { InputGroup } from '@/_components/admin/molecules/InputGroup';
import { DropDown } from '@/_components/admin/molecules/DropDown';

//
import * as Form from '@radix-ui/react-form';
import { BellAlertIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
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
        <div aria-label="input-group">
          <div className="relative">
            <Form.Root>
              <InputGroup type="text" placeholder="Search..." icon={<MagnifyingGlassIcon />} />
            </Form.Root>
          </div>
        </div>
      </div>

      <div aria-label="header_profile">
        <DropDown image={<Image src={ProfilePicture} alt="Dashboard Profile Image" />}>
          <DropdownMenu.Item className="dropdown_item">New Tab</DropdownMenu.Item>
          <DropdownMenu.Separator className="dropdown_separator" />
          <DropdownMenu.Item className="dropdown_item">New Window</DropdownMenu.Item>
          <DropdownMenu.Separator className="dropdown_separator" />
          <DropdownMenu.Item className="dropdown_item">New Private Window</DropdownMenu.Item>
        </DropDown>
      </div>
    </nav>
  );
};
