import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/home';
import SignIn from './Components/signin';
import Layout from './Hoc/Layout';
const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <Route exact component={SignIn} path="/sign_in" />
        <Route exact component={Home} path="/" />
      </Switch>
    </Layout>
  );
};

export default Routes;
