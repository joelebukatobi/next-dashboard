// React
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
import { projects } from '@/_utils/projects';

export default function Projects() {
  //
  const router = useRouter();
  return (
    <>
      <header>
        <BreadCrumb menu="projects" />
        <Button onClick={() => router.push(`/admin/projects/new`)} icon={<PlusIcon />}>
          Create
        </Button>
      </header>

      <div aria-label="body-main">
        <div>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Projects</th>
                <th>Author</th>
                <th>Published</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {projects.map(({ id, published, author, project, slug }) => (
                <tr onClick={() => router.push(`/admin/projects/${slug}`)} key={id}>
                  <td>{id}</td>
                  <td>{project}</td>
                  <td>{author}</td>
                  <td>{published}</td>
                  <td onClick={() => router.push(`/admin/projects/${slug}`)}>
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
