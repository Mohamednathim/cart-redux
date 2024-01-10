import "./App.css";
import Header from "./components/Header";
import CartList from "./components/CartList";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<CartList />}></Route>
      </Routes>
    </>
  );
}

export default App;
