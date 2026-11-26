import { linkWhatsApp } from "../config";

const formatarValor = (valor) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function CardProduto({ produto }) {
  const mensagem = `Olá! Tenho interesse no produto *${produto.nome}* (${formatarValor(produto.valor)}). Ainda está disponível?`;

  return (
    <article className="card">
      <img src={produto.imagem} alt={produto.nome} loading="lazy" />
      <h2>{produto.nome}</h2>
      <p>{produto.descricao}</p>
      <strong>{formatarValor(produto.valor)}</strong>
      <a
        className="btn btn--whatsapp"
        href={linkWhatsApp(mensagem)}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tenho interesse
      </a>
    </article>
  );
}