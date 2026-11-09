import { useState } from "react";
import "./Header.css";

const navigation = [
  { label: "Обо мне", href: "#about" },
  { label: "Навыки", href: "#skills" },
  { label: "Проекты", href: "#projects" },
  { label: "Контакты", href: "#contacts" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__container">
        <a className="header__logo" href="#home" onClick={closeMenu}>
          MF<span>.</span>
        </a>

        <button
          className={`header__burger ${menuOpen ? "header__burger--active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Открыть меню"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

        <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="header__link"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header__contact" href="mailto:your-email@example.com">
          Давайте работать вместе
          <span>↗</span>
        </a>
      </div>
    </header>
  );
}