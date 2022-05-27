import {initializeApp} from 'firebase/app';
import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import OddajRzeczyForm from "./components/OddajRzeczyForm";

const firebaseConfig = {
    apiKey: "AIzaSyDMX6OLIFU1QAQDeotmLjQ7Kwv1slcq8rs",
    authDomain: "oddaj-rzeczy-d5512.firebaseapp.com",
    projectId: "oddaj-rzeczy-d5512",
    storageBucket: "oddaj-rzeczy-d5512.appspot.com",
    messagingSenderId: "1026771203635",
    appId: "1:1026771203635:web:10f4f6b0d7c1dde34f5546"
};

initializeApp(firebaseConfig);

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