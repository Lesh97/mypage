import { BrowserRouter as Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./routes/Profile";
import Portfolio from "./routes/Portfolio";
import Contact from "./routes/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </>
  );
}

export default App;
