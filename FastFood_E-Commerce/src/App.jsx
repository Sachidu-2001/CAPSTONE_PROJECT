import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarComponent from "./Components/NavBarComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePageComponent from "./Components/HomePage/HomePageComponent";
import FooterComponent from "./Components/FooterComponent";
import LavoraConNoiComponent from "./Components/LavoraConNoi/LavoraConNoiComponent";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarComponent />
        <Routes>
          <Route path="/" element={<HomePageComponent />} />
          <Route path="/lavora-con-noi" element={<LavoraConNoiComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
