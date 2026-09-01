import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Vinyl from "./pages/Vinyl";
import Projects from "./pages/Projects";
import Values from "./pages/Values";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />

        <main className="flex-1 md:ml-16 mb-16 md:mb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vinyl" element={<Vinyl />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/my-values" element={<Values />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;