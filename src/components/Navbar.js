import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-title">Mugmal Store</div>
      <div className="nav-buttons">
        <a href="#" className="nav-link">Inicio</a>
        <a href="#" className="nav-link">Productos</a>
        <a href="#" className="nav-link">Contacto</a>
      </div>
    </nav>
  );
}

export default Navbar;
