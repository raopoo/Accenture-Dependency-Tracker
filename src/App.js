import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import TableData from "./Components/Table";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Subscription from "./Containers/Pages/Subscription";
import Libraries from "./Containers/Pages/Libraries";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<TableData />}></Route>
                    <Route
                        path="/subscription"
                        element={<Subscription></Subscription>}
                    ></Route>
                    <Route
                        path="/libraries"
                        element={<Libraries></Libraries>}
                    ></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
