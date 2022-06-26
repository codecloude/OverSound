import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./App.css";
import Sounds from "./pages/Sounds";

function App() {
  return (
    <div className={"App"}>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sounds' element={<Sounds/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
