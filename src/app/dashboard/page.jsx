import { HashtagIcon, PencilSquareIcon, Square3Stack3DIcon, UsersIcon } from '@heroicons/react/24/outline';

export default function Index() {
  return (
    <>
      <div aria-label="body-card-row">
        <div className="card">
          <a href="/posts.html">
            <div>
              <PencilSquareIcon />
              <h5>12 Posts</h5>
              <p>Unleash creative content.</p>
            </div>
            <span> 01 </span>
          </a>
        </div>
        <div className="card">
          <a href="/categories.html">
            <div>
              <Square3Stack3DIcon />
              <h5>5 Categories</h5>
              <p>Organize like a pro.</p>
            </div>
            <span> 02 </span>
          </a>
        </div>
        <div className="card">
          <a href="/tags.html">
            <div>
              <HashtagIcon />
              <h5>8 Tags</h5>
              <p>Connect the dots effortlessly.</p>
            </div>
            <span> 03 </span>
          </a>
        </div>
        <div className="card">
          <a href="/users.html">
            <div>
              <UsersIcon />
              <h5>3 Users</h5>
              <p>Collaborate and conquer.</p>
            </div>
            <span> 04</span>
          </a>
        </div>
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
