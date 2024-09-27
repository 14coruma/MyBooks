import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";
import Home from "./views/Home";
import SignIn from "./views/Signin";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="signin" element={<SignIn />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;