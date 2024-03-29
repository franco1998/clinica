import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './Components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  PatientList as PatientListView,
  UserList as UserListView,
  Typography as TypographyView,
  Secciones as SeccionesView,
  Account as AccountView,
  Settings as SettingsView,
  NotFound as NotFoundView
} from './views';

import {
  H1_6 as H1_6View,
  P1_h as P1_HView,
  UCE_E as UCE_EView,
  UCO_E as UCO_EView,
  UTI_E as UTI_EViwe
} from './views/Secciones/components/Expandido';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/doctores"
      />
      <RouteWithLayout
        component={PatientListView}
        exact
        layout={MainLayout}
        path="/pacientes"
      />
      <RouteWithLayout
        component={P1_HView}
        exact
        layout={MainLayout}
        path="/P1"
      />
      <RouteWithLayout
        component={SeccionesView}
        exact
        layout={MainLayout}
        path="/secciones"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <RouteWithLayout
        component={H1_6View}
        exact
        layout={MainLayout}
        path="/H1_6"
      />
      <RouteWithLayout
        component={UCE_EView}
        exact
        layout={MainLayout}
        path="/UCE"
      />
      <RouteWithLayout
        component={UCO_EView}
        exact
        layout={MainLayout}
        path="/UCO"
      />
      <RouteWithLayout
        component={UTI_EViwe}
        exact
        layout={MainLayout}
        path="/UTI"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
