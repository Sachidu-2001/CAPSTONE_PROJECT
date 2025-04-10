import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarComponent from "./Components/NavBarComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePageComponent from "./Components/HomePage/HomePageComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarComponent />
        <Routes>
          <Route path="/home" element={<HomePageComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
