'use client';
import React, { useState } from 'react';
//
import { useRouter } from 'next/navigation';
//
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const MenuItem = ({ icon, text, subMenuItems, href }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  //
  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);

  return (
    <details className="group [&_summary::-webkit-details-marker]:hidden admin_sidebar-nav--dropdown">
      <summary onClick={() => (subMenuItems ? toggleSubMenu() : router.push(`${href}`))}>
        <div>
          {icon}
          <span>{text}</span>
        </div>
        {subMenuItems && (
          <span className={`group-open: ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
            <ChevronDownIcon />
          </span>
        )}
      </summary>
      {subMenuItems && isOpen && (
        <nav>
          {subMenuItems.map((item, index) => (
            <a key={index} href={item.href} className="sub-menu-item">
              {item.icon}
              <span>{item.text}</span>
            </a>
          ))}
        </nav>
      )}
    </details>
  );
};

export { MenuItem };
