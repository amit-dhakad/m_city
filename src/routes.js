import React from 'react';
import { Switch } from 'react-router-dom';
import Dashboard from './Components/admin/Dashboard';
import AdminMatches from './Components/admin/matches';
import AddEditMatches from './Components/admin/matches/addEditMatches';
import AdminPlayers from './Components/admin/players';
import AddEditPlayers from './Components/admin/players/addEditPlayers';
import PrivateRoute from './Components/authRoutes/privateRoutes';
import PublicRoute from './Components/authRoutes/publicRoutes';
import Home from './Components/home';
import SignIn from './Components/signin';
import TheMatches from './Components/theMatches';
import TheTeam from './Components/theTeam';
import NotFound from './Components/ui/not_found';
import Layout from './Hoc/Layout';
const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          {...props}
          path="/admin_players/add_players"
          exact
          component={AddEditPlayers}
        />
        <PrivateRoute
          {...props}
          path="/admin_players/add_players/:id"
          exact
          component={AddEditPlayers}
        />
        <PrivateRoute
          {...props}
          path="/admin_players"
          exact
          component={AdminPlayers}
        />
        <PrivateRoute
          {...props}
          path="/dashboard"
          exact
          component={Dashboard}
        />
        <PrivateRoute
          {...props}
          path="/admin_matches/edit_match/"
          exact
          component={AddEditMatches}
        />
        <PrivateRoute
          {...props}
          path="/admin_matches/edit_match/:id"
          exact
          component={AddEditMatches}
        />
        <PrivateRoute
          {...props}
          path="/admin_matches"
          exact
          component={AdminMatches}
        />

        <PublicRoute
          {...props}
          restricted={true}
          path="/sign_in"
          exact
          component={SignIn}
        />
        <PublicRoute
          {...props}
          restricted={false}
          path="/the_matches"
          exact
          component={TheMatches}
        />
        <PublicRoute
          {...props}
          restricted={false}
          path="/the_team"
          exact
          component={TheTeam}
        />
        <PublicRoute
          {...props}
          restricted={false}
          path="/"
          exact
          component={Home}
        />
        <PublicRoute {...props} restricted={false} exact component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default Routes;
