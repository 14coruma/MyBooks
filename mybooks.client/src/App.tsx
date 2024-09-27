import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";
import Home from "./views/Home";
import SignIn from "./views/SignIn";
import PageNotFound from "./views/PageNotFound"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;