// import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Cattle from "../components/Cattle";
import Dashboard from "../components/Dashboard";
import Linechart from "../components/Linechart";
import Layout from '../components/Layout';

function Home() {
  return (
    <Layout>
    <Dashboard/>
    <Linechart/>
    </Layout>
  );
}

export default Home;
