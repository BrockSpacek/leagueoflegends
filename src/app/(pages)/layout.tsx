"use client";
import NavBarComponent from '@/Components/NavBarComponent';
import React from 'react';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="text-white">
      {/* Navbar  */}
      <NavBarComponent />
      {/* Main Content */}
        {children}
    </div>
  );
};

export default Layout;