import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./screen/Home";
import Questionnaire from "./screen/Questionnaire";
import Result from "./screen/Result";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kuesioner" element={<Questionnaire />} />
        <Route path="/hasil" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
