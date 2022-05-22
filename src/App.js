import './App.css';
import {
    HashRouter,
    Route,
    Routes,
} from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import OddajRzeczyForm from "./components/OddajRzeczyForm";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path={'/LogIn'} element={<LogIn/>}/>
                <Route path={'/Register'} element={<Register/>}/>
                <Route path={'/OddajRzeczyForm'} element={<OddajRzeczyForm/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;