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
import { tags } from '@/_utils/tags';

export default function Tags() {
  //
  const router = useRouter();
  return (
    <>
      <header>
        <BreadCrumb name="tags" menu="blog" />
        <Button onClick={() => router.push(`/admin/blog/tags/new`)} icon={<PlusIcon />}>
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
              {tags.map(({ id, published, author, name }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{author}</td>
                  <td>{published}</td>
                  <td>
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
