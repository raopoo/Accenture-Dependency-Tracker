import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from './Containers/Pages/Dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Libraries from "./Containers/Pages/Libraries";
import Login from "./Containers/Pages/Login";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Dashboard />}></Route>
                    <Route
                        path="/libraries"
                        element={<Libraries></Libraries>}
                    ></Route> 
                    <Route path="/login" element={<Login></Login>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
