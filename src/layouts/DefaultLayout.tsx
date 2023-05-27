import React, { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
