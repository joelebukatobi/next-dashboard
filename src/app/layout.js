import '@/_assets/styles/main.scss';

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
