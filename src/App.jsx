import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import { ThemeProvider } from "./components/ThemeContext"; 
import "./App.css";


const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-all duration-500">
        <Navbar />
        <main>
          <Home />
          <About />
          <Articles />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
