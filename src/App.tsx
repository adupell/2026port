import "./App.css";
import { Header } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
