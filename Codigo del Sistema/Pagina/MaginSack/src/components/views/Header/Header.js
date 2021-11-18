import { useState } from "react";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import HombreMochila from "./HombreMochila.svg";
import "./Header.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);
  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/inicio" onClick={closeMobileMenu}>
            <img className="img" src={HombreMochila} alt="Logo MyNotes" />
          </Link>
          <Link to="/inicio" className="logo-span" onClick={closeMobileMenu}>
            <span>MyNotes</span>
          </Link>
        </div>

        <div className="menu-icon" onClick={handleClick}>
          {isMenuOpen ? (
            <IoCloseSharp className="io-close" />
          ) : (
            <IoMenuSharp className="io-menu" />
          )}
        </div>

        <div className={isMenuOpen ? "nav-menu" : "nav-menu"}>
          <div className="nav-item">
            <Link className="nav-links" to="/inicio" onClick={closeMobileMenu}>
              Inicio
            </Link>
          </div>
          <div className="nav-item">
            <Link className="nav-links" to="/datos" onClick={closeMobileMenu}>
              Datos
            </Link>
          </div>

          <div className="nav-item">
            <Link
              className="nav-links"
              to="/nosotros"
              onClick={closeMobileMenu}
            >
              ¿Quiénes somos?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
