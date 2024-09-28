import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "./components/Navbar";
import Layout from "./views/Layout";
import Home from "./views/Home";
import Features from "./views/Features";
import SignIn from "./views/SignIn";
import PageNotFound from "./views/PageNotFound"

function App() {
    const navLinks: Array<NavLink> = [
        { path: "/", displayName: "Home" },
        { path: "/features", displayName: "Features" },
        { path: "/signin", displayName: "Sign In" },
    ];

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout navLinks={navLinks} />}>
                    <Route index element={<Home />} />
                    <Route path="features" element={<Features />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;