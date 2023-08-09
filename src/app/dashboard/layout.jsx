import { Footer } from '@/_components/admin/organisms/Footer';
import { Header } from '@/_components/admin/organisms/Header';
import { Sidebar } from '@/_components/admin/organisms/Sidebar';
export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <div className="admin">
      {/* Include shared UI here e.g. a header or sidebar */}
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
