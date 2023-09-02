import { Card } from '@/_components/admin/molecules/Card';
import { DocumentTextIcon, Square3Stack3DIcon, TagIcon, UsersIcon } from '@heroicons/react/24/solid';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

export default function Index() {
  return (
    <>
      <div aria-label="body-row">
        <Card href="/" icon={<DocumentTextIcon />} heading="12 Posts" caption="Unleash creative content" number="01" />
        <Card
          href="/"
          icon={<Square3Stack3DIcon />}
          heading="5 Categories"
          caption="Unleash creative content"
          number="01"
        />
        <Card href="/" icon={<TagIcon />} heading="8 Tags" caption="Organize like a pro." number="03" />
        <Card href="/" icon={<UsersIcon />} heading="3 Users" caption="Collaborate and conquer." number="04" />
      </div>
      <header>
        <nav>
          <h5>Recent Posts</h5>
          <hr />
        </nav>
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
              <tr>
                <td>1.</td>
                <td>Git Workflow: Connecting Through SSH</td>
                <td>Web Dev, Reviews</td>
                <td>Web Dev</td>
                <td>24/05/1995</td>
                <td>Joel Onwuanaku</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Git Workflow: Connecting Through SSH</td>
                <td>Web Dev, Reviews</td>
                <td>Web Dev</td>
                <td>24/05/1995</td>
                <td>Joel Onwuanaku</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Git Workflow: Connecting Through SSH</td>
                <td>Web Dev, Reviews</td>
                <td>Web Dev</td>
                <td>24/05/1995</td>
                <td>Joel Onwuanaku</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Git Workflow: Connecting Through SSH</td>
                <td>Web Dev, Reviews</td>
                <td>Web Dev</td>
                <td>24/05/1995</td>
                <td>Joel Onwuanaku</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>5.</td>
                <td>Git Workflow: Connecting Through SSH</td>
                <td>Web Dev, Reviews</td>
                <td>Web Dev</td>
                <td>24/05/1995</td>
                <td>Joel Onwuanaku</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>6.</td>
                <td>Git Workflow: Connecting Through SSH</td>
                <td>Web Dev, Reviews</td>
                <td>Web Dev</td>
                <td>24/05/1995</td>
                <td>Joel Onwuanaku</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>7.</td>
                <td>Git Workflow: Connecting Through SSH</td>
                <td>Web Dev, Reviews</td>
                <td>Web Dev</td>
                <td>24/05/1995</td>
                <td>Joel Onwuanaku</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>8.</td>
                <td>Git Workflow: Connecting Through SSH</td>
                <td>Web Dev, Reviews</td>
                <td>Web Dev</td>
                <td>24/05/1995</td>
                <td>Joel Onwuanaku</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>9.</td>
                <td>Git Workflow: Connecting Through SSH</td>
                <td>Web Dev, Reviews</td>
                <td>Web Dev</td>
                <td>24/05/1995</td>
                <td>Joel Onwuanaku</td>
                <td>
                  <PencilSquareIcon />
                </td>
              </tr>
              <tr>
                <td>10.</td>
                <td>Git Workflow: Connecting Through SSH</td>
                <td>Web Dev, Reviews</td>
                <td>Web Dev</td>
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
