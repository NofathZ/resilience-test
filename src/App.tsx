import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./screen/Home";
import Questionnaire from "./screen/Questionnaire";
import Result from "./screen/Result";
import Guide from "./screen/Guide";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/panduan" element={<Guide />} />
        <Route path="/kuesioner" element={<Questionnaire />} />
        <Route path="/hasil" element={<Navigate to={"/kuesioner"} replace />} />
        <Route path="/hasil/:type" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
