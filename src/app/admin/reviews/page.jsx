//  React
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
import { reviews } from '@/_utils/review';

export default function Reviews() {
  return (
    <>
      <header>
        <BreadCrumb menu="reviews" />
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
                <th>Rating</th>
                <th>Published</th>
                <th>Author</th>
                <th>Edit</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1.</td>
                <td>Jane Doe</td>
                <td>5</td>
                <td>24/05/1995</td>
                <td>Joel Onwuanaku</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Jane Doe</td>
                <td>5</td>
                <td>24/05/1995</td>
                <td>Joel Onwuanaku</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Jane Doe</td>
                <td>5</td>
                <td>24/05/1995</td>
                <td>Joel Onwuanaku</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Jane Doe</td>
                <td>5</td>
                <td>24/05/1995</td>
                <td>Joel Onwuanaku</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>5.</td>
                <td>Jane Doe</td>
                <td>5</td>
                <td>24/05/1995</td>
                <td>Joel Onwuanaku</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>6.</td>
                <td>Jane Doe</td>
                <td>5</td>
                <td>24/05/1995</td>
                <td>Joel Onwuanaku</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>7.</td>
                <td>Jane Doe</td>
                <td>5</td>
                <td>24/05/1995</td>
                <td>Joel Onwuanaku</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>8.</td>
                <td>Jane Doe</td>
                <td>5</td>
                <td>24/05/1995</td>
                <td>Joel Onwuanaku</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>9.</td>
                <td>Jane Doe</td>
                <td>5</td>
                <td>24/05/1995</td>
                <td>Joel Onwuanaku</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>10.</td>
                <td>Jane Doe</td>
                <td>5</td>
                <td>24/05/1995</td>
                <td>Joel Onwuanaku</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
