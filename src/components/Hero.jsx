import logo from "../assets/logo.jpeg";
import { NOME_LOJA } from "../config";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__content">
        <div className="hero__texto">
          <h1>Produtos 3D cheios de cor e personalidade</h1>
          <p>Escolha seu produto no catálogo e peça direto pelo WhatsApp.</p>
          <a href="#catalogo" className="btn btn--primary">Ver catálogo</a>
        </div>
        <img className="hero__logo" src={logo} alt={NOME_LOJA} />
      </div>
    </section>
  );
}