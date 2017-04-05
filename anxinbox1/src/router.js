import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Layout from "./routes/Layout.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Layout} />
    </Router>
  );
}

export default RouterConfig;
