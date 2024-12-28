import React from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { Button } from '@/_components/admin/atoms/Button';
import { ChevronRightIcon, PlusIcon } from '@heroicons/react/24/solid';

export default function Reviews() {
  return (
    <>
      <header>
        <nav>
          <h6>Users</h6>
          <ol role="list" className="">
            <li>
              <a href="/"> Home </a>
            </li>
            <li>
              <ChevronRightIcon />
            </li>
            <li>
              <a href="/admin/reviews"> Users </a>
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
                <th>Email</th>
                <th>Username</th>
                <th>Role</th>
                <th>Edit</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1.</td>
                <td>Joel Onwuanaku</td>
                <td>example@mail.com</td>
                <td>joelebuka</td>
                <td>Admin</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Joel Onwuanaku</td>
                <td>example@mail.com</td>
                <td>joelebuka</td>
                <td>Admin</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Joel Onwuanaku</td>
                <td>example@mail.com</td>
                <td>joelebuka</td>
                <td>Admin</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Joel Onwuanaku</td>
                <td>example@mail.com</td>
                <td>joelebuka</td>
                <td>Admin</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>5.</td>
                <td>Joel Onwuanaku</td>
                <td>example@mail.com</td>
                <td>joelebuka</td>
                <td>Admin</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>6.</td>
                <td>Joel Onwuanaku</td>
                <td>example@mail.com</td>
                <td>joelebuka</td>
                <td>Admin</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>7.</td>
                <td>Joel Onwuanaku</td>
                <td>example@mail.com</td>
                <td>joelebuka</td>
                <td>Admin</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>8.</td>
                <td>Joel Onwuanaku</td>
                <td>example@mail.com</td>
                <td>joelebuka</td>
                <td>Admin</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>9.</td>
                <td>Joel Onwuanaku</td>
                <td>example@mail.com</td>
                <td>joelebuka</td>
                <td>Admin</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>10.</td>
                <td>Joel Onwuanaku</td>
                <td>example@mail.com</td>
                <td>joelebuka</td>
                <td>Admin</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>11.</td>
                <td>Joel Onwuanaku</td>
                <td>example@mail.com</td>
                <td>joelebuka</td>
                <td>Admin</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>12.</td>
                <td>Joel Onwuanaku</td>
                <td>example@mail.com</td>
                <td>joelebuka</td>
                <td>Admin</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>13.</td>
                <td>Joel Onwuanaku</td>
                <td>example@mail.com</td>
                <td>joelebuka</td>
                <td>Admin</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>14.</td>
                <td>Joel Onwuanaku</td>
                <td>example@mail.com</td>
                <td>joelebuka</td>
                <td>Admin</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>15.</td>
                <td>Joel Onwuanaku</td>
                <td>example@mail.com</td>
                <td>joelebuka</td>
                <td>Admin</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>16.</td>
                <td>Joel Onwuanaku</td>
                <td>example@mail.com</td>
                <td>joelebuka</td>
                <td>Admin</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>17.</td>
                <td>Joel Onwuanaku</td>
                <td>example@mail.com</td>
                <td>joelebuka</td>
                <td>Admin</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>18.</td>
                <td>Joel Onwuanaku</td>
                <td>example@mail.com</td>
                <td>joelebuka</td>
                <td>Admin</td>
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
