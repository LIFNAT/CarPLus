import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login.jsx";
import Register from "./components/Register.jsx";

//admin
import HomeAd from "../Admin/HomeAd.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/homead" element={<HomeAd/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
