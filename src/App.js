import Accueil from "./pages/Accueil";
import {Routes, Route} from "react-router-dom";
import Doc from "./pages/Doc";
import Navbar from "./components/Navbar/Navbar";
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/documentation" element={<Doc />} />
      </Routes>
    </div>
  );
}

export default App;
