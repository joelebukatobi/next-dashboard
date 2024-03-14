'use client';
import React from 'react';

// Components
import { ChevronRightIcon } from '@heroicons/react/24/solid';

export const BreadCrumb = ({ name, menu }) => {
  return (
    <nav>
      {name ? <h6>{name}</h6> : <h6>{menu}</h6>}
      <ol role="list" class="">
        <li>
          <a href="/admin"> Home </a>
        </li>
        <li>
          <ChevronRightIcon />
        </li>
        {menu ? (
          <>
            <li>
              <a href={`/admin`}>{menu} </a>
            </li>
          </>
        ) : (
          ''
        )}

        {menu && name ? (
          <>
            <li>
              <ChevronRightIcon />
            </li>
            <li>
              <a href={`/admin/${menu}/${name}`}> {name} </a>
            </li>
          </>
        ) : (
          ''
        )}
      </ol>
    </nav>
  );
};
