import React, { ReactElement } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { HomePage } from '../Pages/HomePage';
import { withLayout } from '../helpers/withLayout';
import { routerPath } from './routerPath';
import { NewsPage } from '../Pages/NewsPage';
import { AboutPage } from '../Pages/AboutPage';
import { ThemesPage } from '../Pages/ThemesPage';
import { LoginPage } from '../Pages/LoginPage';

export const useRouter = (isAuth: boolean): ReactElement => {
  if (!isAuth) {
    return (
      <Switch>
        <Route path={routerPath.home} exact component={withLayout(HomePage)} />
        <Redirect to={routerPath.home} />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path={routerPath.home} exact component={withLayout(HomePage)} />
      <Route path={routerPath.news} exact component={withLayout(NewsPage)} />
      <Route path={routerPath.about} exact component={withLayout(AboutPage)} />
      <Route path={routerPath.login} exact component={LoginPage} />
      <Route
        path={routerPath.themes}
        exact
        component={withLayout(ThemesPage)}
      />
      <Redirect to={routerPath.home} />
    </Switch>
  );
};
