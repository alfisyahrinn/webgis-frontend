import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Navigation from "./components/navbar/Navbar"
import Cagar from "./pages/Cagar"



function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cagar" element={<Cagar />} />
        <Route path=":id" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
