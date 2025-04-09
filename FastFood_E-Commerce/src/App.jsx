import { BrowserRouter } from "react-router-dom";
import NavBarComponent from "./Components/NavBarComponent";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
