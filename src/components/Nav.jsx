import { BsCart } from 'react-icons/bs';
export default function Nav() {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a href="/" className="navbar-brand mb-0 h1 font-monospace text-warning">
          Supreme
        </a>
        <div className="float-end">
        <button type="button" class="btn btn-warning"><BsCart/></button>
        </div>
      </div>
    </nav>
  );
}
