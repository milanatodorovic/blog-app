import "./App.css";
import Button from "@mui/material/Button";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Button variant="contained">Hello World</Button>
      <Main />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
