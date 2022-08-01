import Image from "next/image";
import Link from "next/link";
import Searchbar from "../admin/searchbar";
function Navbar() {
  return (
    <nav>
      <div className="nav-left">
        <Link href="/">
          <a className="nav-logo">
          <Image src="/img/bihom_trp.png" width={172} height={74} />
          </a>
        </Link>
        <Link href="/">
          <a className="nav-title">GRANE </a>
        </Link>
        <Searchbar></Searchbar>
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