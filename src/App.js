import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import RudimentPage from "./pages/rudiment/RudimentPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rudiment/:id" element={<RudimentPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
