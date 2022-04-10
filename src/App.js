import { Route, Routes } from "react-router-dom";
import Homepages from "./pages/Homepages";
import Detailproject from "./pages/Detailproject";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepages />} />
      <Route path="/detailproject" element={<Detailproject />} />
    </Routes>
  );
}

export default App;
