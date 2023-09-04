'use client';
import React from 'react';

// Next
import { useRouter } from 'next/navigation';

// Components
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { PlusIcon } from '@heroicons/react/24/solid';
import { BreadCrumb } from '@/_components/admin/organisms/BreadCrumb';
import { Button } from '@/_components/admin/atoms/Button';

// Utils
import { categories } from '@/_utils/categories';

export default function Categories() {
  //
  const router = useRouter();
  return (
    <>
      <header>
        <BreadCrumb name="categories" menu="blog" />
        <Button onClick={() => router.push(`/admin/blog/categories/new`)} icon={<PlusIcon />}>
          Create
        </Button>
      </header>
      <div aria-label="body-main">
        <div>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Name</th>
                <th>Author</th>
                <th>Published</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {categories.map(({ id, published, author, name, slug }) => (
                <tr onClick={() => router.push(`/admin/blog/categories/${slug}`)} key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{author}</td>
                  <td>{published}</td>
                  <td onClick={() => router.push(`/admin/blog/categories/${slug}`)}>
                    <PencilSquareIcon />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
