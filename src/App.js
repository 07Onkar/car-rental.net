import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Models from "./pages/Models";
import Testimonials from "./pages/TestimonialsPage";
import Team from "./pages/Team";
import SignIn from "./pages/SignIn"
import Register from "./pages/Register"
import "../src/dist/styles.css";


function App() {
  return (
    <div className="App">
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/models" element={<Models />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      
    </div>
  );
}

export default App;
