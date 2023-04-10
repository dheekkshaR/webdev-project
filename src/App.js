
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/register" element={<Register/>}/>


          </Routes>

        </div>
      </BrowserRouter>
  );
}

export default App;
