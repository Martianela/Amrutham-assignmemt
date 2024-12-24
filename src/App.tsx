import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import FindDoctor from "./Pages/FindDoctor";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/find-doctors" element={<FindDoctor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
