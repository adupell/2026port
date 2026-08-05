import "./App.css";
import { Header } from "./components";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <HomePage />
      </BrowserRouter>
    </>
  );
}

export default App;
