import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Siderslider from './components/LayOut/Sider.js';
import Hello from './components/Content/List.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Siderslider} />
      <Route path="index" component={Hello} />
    </Router>
  );
}

export default RouterConfig;
