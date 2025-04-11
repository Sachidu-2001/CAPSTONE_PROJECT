import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarComponent from "./Components/NavBarComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePageComponent from "./Components/HomePage/HomePageComponent";
import FooterComponent from "./Components/FooterComponent";
import LavoraConNoiComponent from "./Components/LavoraConNoi/LavoraConNoiComponent";
import "./App.css";
import NovitaComponent from "./Components/Novità/NovitaComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarComponent />
        <Routes>
          <Route path="/" element={<HomePageComponent />} />
          <Route path="/lavora-con-noi" element={<LavoraConNoiComponent />} />
          <Route path="/novita" element={<NovitaComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
