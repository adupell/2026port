import "./App.css";
import { Header } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home";
import { AboutPage } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
