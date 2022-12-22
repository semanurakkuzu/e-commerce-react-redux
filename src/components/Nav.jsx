import { BsCart } from 'react-icons/bs';
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand mb-0 h1 font-monospace text-warning">
          Supreme
        </Link>
        <div className="float-end">
        <Link to="/cart" type="button" className="btn btn-warning"><BsCart/></Link>
        </div>
      </div>
    </nav>
  );
}
