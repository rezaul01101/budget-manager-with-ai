import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import Home from "./pages/Home/Home"
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-linear-to-br from-purple-900 via-blue-900 to-purple-800">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/faq" element={<FAQPage />} /> */}
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> */}
          </Routes>
        </main>
        {/* <Newsletter /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
