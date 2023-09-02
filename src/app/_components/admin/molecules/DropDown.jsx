import React from 'react';
// Next
import Link from 'next/link';
//
import { Button } from '@/_components/admin/atoms/Button';

export const DropDown = ({ className, options, text, icon, image }) => {
  return (
    <div aria-label="dropdown" className="hs-dropdown relative inline-flex">
      <Button
        className={`${className} hs-dropdown-toggle`}
        id="hs-dropdown-default"
        type="button"
        icon={icon ? icon : image}
      >
        {text}
      </Button>

      <ul
        className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 w-[8rem] hidden z-10 min-w-[16rem] bg-white shadow-md rounded-[.4rem] p-[.8rem]"
        aria-labelledby="hs-dropdown-default"
      >
        {options && (
          <>
            {options.map((item, index) => (
              <>
                <li key={index} href={item.href}>
                  {item.icon}
                  {item.text}
                </li>
                <hr />
              </>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};
