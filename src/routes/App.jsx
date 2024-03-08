import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItems from "../components/FetchItems";


function App() {
  
  return (
    <>
      <Header></Header>
      <FetchItems></FetchItems>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
