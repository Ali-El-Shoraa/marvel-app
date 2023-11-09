import Logo from "./components/Logo";
import Home from "./components/Home";
import Description from "./pages/Description";
import Input from "./components/Input";
import Searched from "./pages/Searched";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Logo />
        <Input />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marvel-app/" element={<Home />} />
          <Route path="/marvel-app/Description/:id" element={<Description />} />
          <Route path="/marvel-app/searched/:name" element={<Searched />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
