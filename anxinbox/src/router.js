import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Siderslider from './components/LayOut/Sider.js';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Siderslider} />
    </Router>
  );
}

export default RouterConfig;
