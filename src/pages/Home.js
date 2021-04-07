// import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Cattle from "../components/Cattle";
import Dashboard from "../components/Dashboard";
import LineChart from "../components/Linechart";
import Layout from '../components/Layout';

function Home() {
  return (
    <Layout>
    <Dashboard/>
    <LineChart/>
    </Layout>
  );
}

export default Home;
