'use client';
import React from 'react';

// Next
import Image from 'next/image';

// Components
import { PlusIcon } from '@heroicons/react/24/solid';
import { BreadCrumb } from '@/_components/admin/organisms/BreadCrumb';
import { Button } from '@/_components/admin/atoms/Button';
import { InputGroup } from '@/_components/admin/molecules/InputGroup';
import { TextareaGroup } from '@/_components/admin/molecules/TextareaGroup';

export default function EditPhoto() {
  return (
    <>
      <header>
        <BreadCrumb name="photos" menu="gallery" />
        <Button icon={<PlusIcon />}>Publish</Button>
      </header>

      <div aria-label="body-main">
        <form aria-label="form-group">
          <div aria-label="form-video">
            <Image src={`https://placehold.co/600x400`} width={100} height={100} />
          </div>
          <div aria-label="form-main">
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
          </div>
        </form>
      </div>
    </>
  );
}
