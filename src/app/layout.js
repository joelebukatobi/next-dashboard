'use client';
import React, { useEffect } from 'react';
import '@/_assets/styles/main.scss';

export default function RootLayout({ children }) {
  // Preline Installation
  useEffect(() => {
    import('preline');
  }, []);
  //
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
