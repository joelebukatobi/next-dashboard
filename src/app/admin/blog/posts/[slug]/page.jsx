'use client';
import React from 'react';

// Next
import { useRouter } from 'next/navigation';

// Components
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/24/solid';
import { BreadCrumb } from '@/_components/admin/organisms/BreadCrumb';
import { Button } from '@/_components/admin/atoms/Button';

// Utils
import { categories } from '@/_utils/categories';
import { Select } from '@/_components/admin/atoms/Select';

export default function EditPost() {
  //
  const router = useRouter();
  return (
    <>
      <header>
        <BreadCrumb name="posts" menu="blog" />
        <Button icon={<PlusIcon />}>Publish</Button>
      </header>
      <div aria-label="body-main">
        <form action="">
          <div aria-label="form-row">
            <div aria-label="input-group">
              <label for="title">Title</label>
              <div class="relative">
                <input type="text" placeholder="Enter post title" />
              </div>
            </div>
            <div aria-label="input-group">
              <label for="image">Image</label>
              <div class="relative">
                <input type="file" placeholder="Upload an image" />
              </div>
            </div>
          </div>
          <div aria-label="form-row">
            <div aria-label="input-group">
              <label for="author">Author</label>
              <div class="relative">
                <input type="text" placeholder="Joel Onwuanaku" />
              </div>
            </div>
            <div aria-label="input-group">
              <label for="categories">Categories</label>
              <div class="relative">
                <Select>
                  <option value="">Please select category</option>
                  {categories.map(({ id, name }) => (
                    <option value={name} key={id}>
                      {name}
                    </option>
                  ))}
                </Select>
              </div>
            </div>
            <div aria-label="input-group">
              <label for="tags">Tags</label>
              <div class="relative">
                <input type="text" placeholder="Enter tags e.g. Web Dev, Cloud Computing, ..." />
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
