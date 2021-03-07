import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/home';
import Layout from './Hoc/Layout';
const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <Route exact component={Home} path="/" />
      </Switch>
    </Layout>
  );
};

export default Routes;
