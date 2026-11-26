import { NOME_LOJA, INSTAGRAM, linkWhatsApp } from "../config";

export default function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="footer__content">
        <strong>{NOME_LOJA}</strong>
        <div className="footer__links">
          <a
            href={linkWhatsApp("Olá! Gostaria de falar com vocês.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
        <small>© {new Date().getFullYear()} {NOME_LOJA}. Todos os direitos reservados.</small>
      </div>
    </footer>
  );
}