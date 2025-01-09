import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Navigation from "./components/navbar/Navbar"
import Cagar from "./pages/Cagar"
import Request from "./pages/Request"
import DetailCagar from "./pages/DetailCagar"
import Admin from "./pages/Admin"
import Login from "./pages/Login"



function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cagar" element={<Cagar />} />
        <Route path="/cagar/:id" element={<DetailCagar />} />
        <Route path="/request" element={<Request />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
