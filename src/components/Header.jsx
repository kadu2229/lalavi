import logo from "../assets/logo.jpeg";
import { NOME_LOJA, INSTAGRAM, linkWhatsApp } from "../config";

export default function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <a href="#inicio" className="header__logo">
          <img src={logo} alt={NOME_LOJA} />
        </a>
        <nav className="header__nav">
          <a href="#catalogo">Catálogo</a>
          <a href="#contato">Contato</a>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </nav>
        <a
          className="btn btn--whatsapp"
          href={linkWhatsApp("Olá! Vim pelo catálogo e gostaria de mais informações.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}