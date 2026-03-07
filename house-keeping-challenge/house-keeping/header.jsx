
export default function Header() {
  return (
    <header className="header">
      <img className="nav-logo" src="react-logo.png" alt="React logo" />
      <nav>
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );
}