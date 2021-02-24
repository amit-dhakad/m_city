import React from 'react';
import Footer from '../Components/footer/Footer';
import Header from '../Components/Header/Header';

const Layout = (props) => {
  return (
    <div>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
