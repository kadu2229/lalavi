import Header from "./components/Header";
import Hero from "./components/Hero";
import CardProduto from "./components/CardProduto";
import Footer from "./components/Footer";
import { produtos } from "./data/produtos";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <main className="catalogo" id="catalogo">
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </main>
      <Footer />
    </>
  );
}