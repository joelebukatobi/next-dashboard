'use client';
import React from 'react';

// Next
import { useRouter } from 'next/navigation';

// Components
import { PlusIcon } from '@heroicons/react/24/solid';
import { BreadCrumb } from '@/_components/admin/organisms/BreadCrumb';
import { Button } from '@/_components/admin/atoms/Button';

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
            <div aria-label="input-group">
              <label for="image">Image</label>
              <div class="relative">
                <input type="file" placeholder="Upload an image" />
              </div>
            </div>
            <div aria-label="input-group">
              <label for="caption">Caption</label>
              <div class="relative">
                <input type="text" placeholder="Caption" />
              </div>
            </div>
          </div>
          <div aria-label="form-row">
            <div aria-label="input-group">
              <label for="description">Description</label>
              <textarea placeholder="Blog post description" id="description"></textarea>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
