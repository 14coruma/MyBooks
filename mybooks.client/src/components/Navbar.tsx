import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className={'navbar navbar-inverse navbar-fixed-top'} >
            <div className={'container-fluid'}>
                <div className={'navbar-header'}>
                    <Link to="/" className={'navbar-brand'}>MyBooks</Link>
                </div>
                <ul className={'nav navbar-nav'}>
                    <li className={'active'}><Link to="/">Home</Link></li>
                </ul>
                <ul className={'nav navbar-nav navbar-right'}>
                    <li><Link to="/signin">Sign In</Link></li>
                </ul>
            </div>
        </nav>
  );
}

export default Navbar;