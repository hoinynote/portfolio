import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    // [수정] max-w-7xl -> max-w-5xl (너비를 적절히 줄여 안정감 확보)
    <main className="container mx-auto max-w-5xl px-6 md:px-8 min-h-screen">
      {children}
    </main>
  );
};

export default Layout;