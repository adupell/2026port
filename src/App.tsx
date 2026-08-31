import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import {
  HomePage,
  AboutPage,
  MadeToPlay,
  Letterboxd,
  GravelRace,
  PageNotFound,
} from "./pages";
import { ScrollToTop } from "./assets/scrollToTop";

function App() {
  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/made-to-play" element={<MadeToPlay />} />
          <Route path="/letterboxd" element={<Letterboxd />} />
          <Route path="/letterboxd" element={<Letterboxd />} />
          <Route path="/gravel-race" element={<GravelRace />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
