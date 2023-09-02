import { Footer } from '@/_components/admin/organisms/Footer';
import { Header } from '@/_components/admin/organisms/Header';
import { Sidebar } from '@/_components/admin/organisms/Sidebar';
// Favicon
export const metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
};

export default function DashboardLayout({ children }) {
  return (
    <div className="admin">
      <Sidebar />
      <div className="admin_grid">
        <Header />
        <div className="admin_grid_body">{children}</div>
        <Footer />
      </div>
      <nav></nav>
    </div>
  );
}
