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
import { posts } from '@/_utils/posts';

export default function Posts() {
  //
  const router = useRouter();
  return (
    <>
      <header>
        <BreadCrumb name="posts" menu="blog" />
        <Button onClick={() => router.push(`/admin/blog/posts/new`)} icon={<PlusIcon />}>
          Create
        </Button>
      </header>
      <div aria-label="body-main">
        <div>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Title</th>
                <th>Tags</th>
                <th>Category</th>
                <th>Published</th>
                <th>Author</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {posts.map(({ id, title, published, author, tags, category }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title.length > 40 ? `${title.substring(0, 40)}...` : title}</td>
                  <td>{tags.join(', ')}</td>
                  <td>{category}</td>
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
