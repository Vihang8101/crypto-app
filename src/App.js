import "./App.css";
import Home from "../src/component/home";
import Bitcoin_Detail from "../src/component/Bitcoin_Detail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App contanier">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/xyz/:id" element={<Bitcoin_Detail />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
