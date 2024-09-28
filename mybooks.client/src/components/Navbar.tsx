import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

/** Reprents a single link on the navbar */
export type NavLink = {
    path: string;
    displayName: string;
}

export interface NavbarProps {
    navLinks: Array<NavLink>;
}
/**
 * Navbar showing site links at top of the webpage.
 * Constructed provided an array of NavLink objects.
 */
const Navbar = (props: NavbarProps) => {
    const { navLinks } = props;

    // Current path in the react-router
    const currentPath = useLocation().pathname;

    // Keeps track of which nav link is currently active
    const [activeLink, setActiveLink] = useState(getActiveLink(navLinks, currentPath));

    // Update active link when the currentPath changes
    useEffect(() => {
        setActiveLink(getActiveLink(navLinks, currentPath));
    }, [navLinks, currentPath])

    return (
        <nav className={'navbar navbar-inverse navbar-fixed-top'} >
            <div className={'container-fluid'}>
                <Header />
                <NavLinks navLinks={navLinks} activeLinkPath={activeLink} />
            </div>
        </nav>
    );
}

/**
 * Determines path of Navlink that is currently active.
 * Does so by comparing a list of available NavLinks and the current path in
 * the react router.
 * @param navLinks
 * @param currentPath
 * @returns path of active NavLink
 */
function getActiveLink(navLinks: Array<NavLink>, currentPath: string): string {
    let activeLink: string = "";
    navLinks.forEach((navLink) => {
        if (currentPath.startsWith(navLink.path)) {
            activeLink = navLink.path;
        }
    });
    return activeLink;
}

/**
 * App header link to show in navbar
 */
const Header = () => {
    return (
        <div className={'navbar-header'}>
            <Link to="/" className={'navbar-brand'}>MyBooks</Link>
        </div>
    );
}

interface NavLinksProps {
    navLinks: Array<NavLink>;
    activeLinkPath: string;
}
/**
 * Builds links to show on site navbar, given a list of links and which link is 
 * currently active.
 */
const NavLinks = (props: NavLinksProps) => {
    const { navLinks, activeLinkPath } = props;

    return (
        <ul className={'nav navbar-nav navbar-right'}>
            {navLinks.map(navLink => (
                <li className={navLink.path == activeLinkPath ? "active" : ""}>
                    <Link to={navLink.path}>{navLink.displayName}</Link>
                </li>
            ))}
        </ul>
    );
}

export default Navbar;