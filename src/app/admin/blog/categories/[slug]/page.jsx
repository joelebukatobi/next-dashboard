'use client';
import React from 'react';

// Components
import { PlusIcon } from '@heroicons/react/24/solid';
import { BreadCrumb } from '@/_components/admin/organisms/BreadCrumb';
import { Button } from '@/_components/admin/atoms/Button';

export default function EditCategory() {
  return (
    <>
      <header>
        <BreadCrumb name="categories" menu="blog" />
        <Button icon={<PlusIcon />}>Publish</Button>
      </header>
      <div aria-label="body-main">
        <form action="">
          <div aria-label="form-row">
            <div aria-label="input-group">
              <label for="title">Name</label>
              <div class="relative">
                <input type="text" placeholder="Enter category name" />
              </div>
            </div>
            <div aria-label="input-group">
              <label for="author">Author</label>
              <div class="relative">
                <input type="text" placeholder="Joel Onwuanaku" />
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
