import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <div className="nav-left">
        <Link href="/">
          <a className="nav-logo">
          </a>
        </Link>
        <Link href="/">
          <a className="nav-title">GRANE </a>
        </Link>
      </div>
      <div className="nav-right">
        <Link href="/about">
          <a className="nav-about">About</a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;