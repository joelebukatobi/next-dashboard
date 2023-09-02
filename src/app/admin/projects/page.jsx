import React from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { Button } from '@/_components/admin/atoms/Button';
import { ChevronRightIcon, PlusIcon } from '@heroicons/react/24/solid';

export default function Projects() {
  return (
    <>
      <header>
        <nav>
          <h6>Projects</h6>
          <ol role="list" class="">
            <li>
              <a href="/"> Home </a>
            </li>
            <li>
              <ChevronRightIcon />
            </li>
            <li>
              <a href="/admin/tags"> Projects </a>
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
                <th>Projects</th>
                <th>Published</th>
                <th>Author</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Web Dev, Software Development</td>
                <td>24/05/1995</td>
                <td>Joel Onwuanaku</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Web Dev, Software Development</td>
                <td>24/05/1995</td>
                <td>Joel Onwuanaku</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Web Dev, Software Development</td>
                <td>24/05/1995</td>
                <td>Joel Onwuanaku</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Web Dev, Software Development</td>
                <td>24/05/1995</td>
                <td>Joel Onwuanaku</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>5.</td>
                <td>Web Dev, Software Development</td>
                <td>24/05/1995</td>
                <td>Joel Onwuanaku</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>6.</td>
                <td>Web Dev, Software Development</td>
                <td>24/05/1995</td>
                <td>Joel Onwuanaku</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>7.</td>
                <td>Web Dev, Software Development</td>
                <td>24/05/1995</td>
                <td>Joel Onwuanaku</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>8.</td>
                <td>Web Dev, Software Development</td>
                <td>24/05/1995</td>
                <td>Joel Onwuanaku</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>9.</td>
                <td>Web Dev, Software Development</td>
                <td>24/05/1995</td>
                <td>Joel Onwuanaku</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>10.</td>
                <td>Web Dev, Software Development</td>
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
