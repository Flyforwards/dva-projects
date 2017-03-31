import React from 'react';
import { connect } from 'dva';
import styles from './App.css';
import Layout from '../components/Index.js';
 function App() {
  return (
    <div className={styles.normal}>
      Route Component: App
      <Footer />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(App);
