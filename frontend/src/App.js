import {BrowserRouter, Routes, Route} from "react-router-dom";
import Todolist from "./components/todolist";
import Addtodo from "./components/addtodo";
import Edittodo from "./components/edittodo";

function App() {
  return (
    <div className='container'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todolist/>}/>
        <Route path="/add" element={<Addtodo/>}/>
        <Route path="/edit/:id" element={<Edittodo/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
