// import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import User from "../components/User";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import Layout from '../components/Layout';

function Home() {
  return (
    <Layout>
      <Dashboard/>
    </Layout>
  );
}

export default Home;
