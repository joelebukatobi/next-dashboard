'use client';
import React from 'react';

// Next
import { useRouter } from 'next/navigation';

// Components
import { PlusIcon } from '@heroicons/react/24/solid';
import { BreadCrumb } from '@/_components/admin/organisms/BreadCrumb';
import { Button } from '@/_components/admin/atoms/Button';
import { InputGroup } from '@/_components/admin/molecules/InputGroup';
import { TextareaGroup } from '@/_components/admin/molecules/TextareaGroup';

export default function NewPhoto() {
  return (
    <>
      <header>
        <BreadCrumb name="photos" menu="gallery" />
        <Button icon={<PlusIcon />}>Create</Button>
      </header>

      <div aria-label="body-main">
        <form action="">
          <div aria-label="form-row">
            <InputGroup
              label="Photo"
              name="photo"
              type="file"
              id="photo"
              placeholder="Upload a thumbnail photo for the post or drop a url"
              required="required"
            />
            <InputGroup
              label="Caption"
              name="caption"
              type="text"
              id="caption"
              placeholder="Enter the image caption"
              required="required"
            />
          </div>
          <div aria-label="form-row">
            <TextareaGroup
              label="Description"
              name="description"
              id="description"
              placeholder="Enter the description of this image"
              required="required"
            />
          </div>
        </form>
      </div>
    </>
  );
}
