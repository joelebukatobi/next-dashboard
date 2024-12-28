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

// Utils
import { categories } from '@/_utils/categories';
import { Select } from '@/_components/admin/atoms/Select';

export default function NewPost() {
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
            <InputGroup
              label="Title"
              name="title"
              type="text"
              id="title"
              placeholder="Enter post title"
              required="required"
            />
            <InputGroup
              label="Image"
              name="image"
              type="file"
              id="image"
              placeholder="Upload a thumbnail image for the post or drop a url"
              required="required"
            />
          </div>
          <div aria-label="form-row">
            <InputGroup
              label="Author"
              name="author"
              type="text"
              id="author"
              placeholder="Joel Onwuanaku"
              required="required"
            />
            <div aria-label="input-group">
              <label for="categories">Categories</label>
              <div className="relative">
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

            <InputGroup
              label="Tags"
              name="tags"
              type="text"
              id="tags"
              placeholder="Enter tags e.g. Web Dev, Cloud Computing, ..."
              required="required"
            />
          </div>
          <div aria-label="form-row">
            <TextareaGroup
              label="Description"
              name="description"
              id="description"
              placeholder="Enter the description of this post"
              required="required"
            />
          </div>
        </form>
      </div>
    </>
  );
}
