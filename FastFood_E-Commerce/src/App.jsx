import { BrowserRouter } from "react-router-dom";
import NavBarComponent from "./Components/NavBarComponent";

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
