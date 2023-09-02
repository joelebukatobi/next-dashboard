'use client';
import React from 'react';

// Components
import { Button } from '@/_components/admin/atoms/Button';
import { BreadCrumb } from '@/_components/admin/organisms/BreadCrumb';
import { PlusIcon } from '@heroicons/react/24/solid';

// Utils

export default function NewCategory() {
  return (
    <>
      <header>
        <BreadCrumb name="categories" menu="blog" />
        <Button icon={<PlusIcon />}>Publish</Button>
      </header>
      <div aria-label="body-main"></div>
    </>
  );
}
