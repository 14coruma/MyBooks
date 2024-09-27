import { Outlet, Link } from "react-router-dom";

function Layout() {

    return (<div>
        <Link to="/">Home</Link>
        <Link to="/signin">Sign In</Link>
        <Outlet />
    </div>);
}

export default Layout;
