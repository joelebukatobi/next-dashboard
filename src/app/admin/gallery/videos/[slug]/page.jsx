'use client';
import React from 'react';

// Components
import { PlusIcon } from '@heroicons/react/24/solid';
import { BreadCrumb } from '@/_components/admin/organisms/BreadCrumb';
import { Button } from '@/_components/admin/atoms/Button';
import { InputGroup } from '@/_components/admin/molecules/InputGroup';
import { TextareaGroup } from '@/_components/admin/molecules/TextareaGroup';

export default function EditVideo() {
  return (
    <>
      <header>
        <BreadCrumb name="video" menu="gallery" />
        <Button icon={<PlusIcon />}>Publish</Button>
      </header>

      <div aria-label="body-main">
        <form aria-label="form-group" action="">
          <div aria-label="form-video">
            <video controls>
              <source src={`https://www.w3schools.com/html/mov_bbb.mp4#t=0.1`} />
            </video>
          </div>
          <div aria-label="form-main">
            <div aria-label="form-row">
              <InputGroup
                label="Video"
                name="video"
                type="file"
                id="video"
                placeholder="Upload a thumbnail video for the post or drop a url"
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
                placeholder="Enter the description of this video"
                required="required"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
