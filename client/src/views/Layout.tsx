import { Outlet } from "react-router-dom";
import Navbar, { NavLink } from "../components/Navbar";

export interface LayoutProps {
    navLinks: Array<NavLink>;
}
/**
 * Layout of every page in the site
 */
function Layout(props: LayoutProps) {
    const { navLinks } = props;

    return (<div>
        <Navbar navLinks={navLinks} />
        <Outlet />
    </div>);
}

export default Layout;