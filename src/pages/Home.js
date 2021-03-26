// import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Cattle from "../components/Cattle";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";

function Home() {
  return (
    <>
    <Header/>
      <Sidebar/>
      <Dashboard/>
      <Cattle/>
    </>
  );
}

export default Home;
