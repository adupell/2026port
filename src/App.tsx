import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import {
  HomePage,
  AboutPage,
  MadeToPlay,
  Letterboxd,
  GravelRace,
} from "./pages";
import { ScrollToTop } from "./assets/scrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/made-to-play" element={<MadeToPlay />} />
          <Route path="/letterboxd" element={<Letterboxd />} />
          <Route path="/letterboxd" element={<Letterboxd />} />
          <Route path="/gravel-race" element={<GravelRace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
