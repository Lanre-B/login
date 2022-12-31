import React from "react";
import LoginForm from "./components/LoginForm";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/Dashboard";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/" element={<Dashboard/>}/>
                <Route path={"/signup"} element={<SignUp/>}/>
            </Routes>
        </div>
    );
}

export default App;
