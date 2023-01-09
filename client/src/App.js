import './App.css';
import Home from './component/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from './component/Create'
import Edit from './component/Edit';
function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
             <Route path="/" element={<Home />}/>
             <Route path="/create" element={<Create />}/>
             <Route path="/edit" element={<Edit />}/>

         </Routes>
        </Router>

    </div>
  );
}

export default App;
