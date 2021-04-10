import React from 'react';
import Layout from '../components/global/Layout';
import LineChart from '../components/Linechart';
import Dashboard from './Dashboard';
function Home() {
  return (
    <Layout>
      <Dashboard/>
      <LineChart />
    </Layout>
  );
}

export default Home;
