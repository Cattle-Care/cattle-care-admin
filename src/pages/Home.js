import React from 'react';
import Layout from '../components/global/Layout';
import Dashboard from '../components/Dashboard';
import LineChart from '../components/Linechart';

function Home() {
  return (
    <Layout>
      <Dashboard />
      <LineChart />
    </Layout>
  );
}

export default Home;
