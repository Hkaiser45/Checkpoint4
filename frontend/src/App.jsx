import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <div className="outlet">
        <Outlet />
      </div>
    </>
  );
}

export default App;
