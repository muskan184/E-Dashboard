import Nav from "./components/nav";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer";
import { Signup } from "./components/signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Product listing component</h1>} />
          <Route path="/add" element={<h1>add Product component</h1>} />
          <Route path="/update" element={<h1>update Product component</h1>} />
          <Route path="/logout" element={<h1>logout component</h1>} />
          <Route path="/profile" element={<h1>profile component</h1>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
