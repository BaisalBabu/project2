import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import Book from "./Components/Books/Book";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
      <Route path="/Product" element={<Product/>}> </Route>
      <Route path="/home" element={<Home/>}> </Route>
      <Route path="/" element={<Login/>}> </Route>
     </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
