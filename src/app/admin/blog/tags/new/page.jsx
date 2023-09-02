'use client';
import React from 'react';

// Next
import { useRouter } from 'next/navigation';

// Components
import { PlusIcon } from '@heroicons/react/24/solid';
import { BreadCrumb } from '@/_components/admin/organisms/BreadCrumb';
import { Button } from '@/_components/admin/atoms/Button';

export default function NewTag() {
  return (
    <>
      <header>
        <BreadCrumb name="tags" menu="blog" />
        <Button icon={<PlusIcon />}>Create</Button>
      </header>

      <div aria-label="body-main"></div>
    </>
  );
}
