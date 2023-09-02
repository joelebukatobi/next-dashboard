import React from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { Button } from '@/_components/admin/atoms/Button';
import { ChevronRightIcon, PlusIcon } from '@heroicons/react/24/solid';

export default function Reviews() {
  return (
    <>
      <header>
        <nav>
          <h6>Reviews</h6>
          <ol role="list" class="">
            <li>
              <a href="/"> Home </a>
            </li>
            <li>
              <ChevronRightIcon />
            </li>
            <li>
              <a href="/admin/reviews"> Reviews </a>
            </li>
          </ol>
        </nav>
        <Button icon={<PlusIcon />}>Create</Button>
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
