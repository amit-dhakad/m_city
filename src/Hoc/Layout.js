import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../Components/footer/Footer';
import Header from '../Components/Header/Header';
import Home from '../Components/home';

const Layout = (props) => {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact component={Home} path="/" />
      </Switch>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
