import React from 'react';
import Header from '../components/global/Header';
import Layout from '../components/global/Layout';
import LineChart from '../components/Linechart';
import Dashboard from './Dashboard';
function Home() {
  return (
    <>
    {/* <Header/> */}
      <Layout>
        <Dashboard />
        <LineChart />
      </Layout>
    </>
  );
}

export default Home;
