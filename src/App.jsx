import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <div id="wrapper">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
