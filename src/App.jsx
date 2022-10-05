import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
// pages
import Home from "./pages/Home"
import Create from "./pages/Create"
import Update from "./pages/Update"


function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>Supa Smoothies</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create">Create New Smoothie</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
