import Create from "./Create";
import Read from "./Read";
import UpdatedData from "./UpdatedData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Create />}/>
        <Route path="/read" element={ <Read />}/>
        <Route path="/update" element={ <UpdatedData />}/>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
