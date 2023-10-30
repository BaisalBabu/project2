import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import Book from "./Components/Books/Book";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Student from "./Components/Student/Student";

function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
      <Route path="/Product" element={<Product/>}> </Route>
      <Route path="/home" element={<Home pp="GSA"/>}> </Route>
      <Route path="/Login" element={<Login a="WELCOME TO GAUTHAM "/>}> </Route>
      <Route path="/" element={<Student method='post' />}> </Route>
     </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
