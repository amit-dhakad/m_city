import React from 'react';
import Footer from '../Components/footer/Footer';
import Header from '../Components/Header/Header';

const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
