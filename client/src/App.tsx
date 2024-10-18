import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "./components/Navbar";
import Layout from "./views/Layout";
import Home from "./views/Home";
import Features from "./views/Features";
import SignIn from "./views/SignIn";
import PageNotFound from "./views/PageNotFound"
import { useTranslation } from 'react-i18next';

function App() {
    const { t } = useTranslation();

    const navLinks: Array<NavLink> = [
        { path: "/", displayName: t("nav.home") },
        { path: "/features", displayName: t("nav.features") },
        { path: "/signin", displayName: t("nav.signIn") },
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