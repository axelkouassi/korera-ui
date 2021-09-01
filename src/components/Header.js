import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="App-header">
      <nav>
        <ul>
          <li>
            <Link to="/">Logo</Link>
          </li>
          <li>
            <Link to="/">Icon Login</Link>
          </li>
          <li>
            <Link>Icon Project Description</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
