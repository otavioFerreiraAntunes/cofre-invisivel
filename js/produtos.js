/* ==================================================================
   PRODUTOS.JS — Catálogo de produtos do site
   
   EDITE AQUI: adicione seus produtos alterando a lista abaixo.
   Cada produto precisa de: id, nome, preço, descrição e imagem
================================================================== */

const PRODUTOS = [
  {
    id: 1,
    nome: "O Cofre Invisível",
    preco: 47,
    descricao: "Ebook de 8 capítulos para organizar seu dinheiro. Sem fórmula mágica, sem economês.",
    imagem: "https://via.placeholder.com/300x400?text=Cofre+Invisível",
    categoria: "ebook",
    detalhes: "Acesso imediato em PDF + áudio · Garantia de 7 dias"
  },
  {
    id: 2,
    nome: "Masterclass: Investimentos para Iniciantes",
    preco: 97,
    descricao: "Série de vídeos ensinando como começar a investir com pouco dinheiro.",
    imagem: "https://via.placeholder.com/300x400?text=Masterclass",
    categoria: "video",
    detalhes: "Acesso vitalício a 12 aulas + grupo exclusivo"
  },
  {
    id: 3,
    nome: "Planilha de Controle Financeiro",
    preco: 27,
    descricao: "Planilha Excel pronta para usar. Rastreie cada centavo que você gasta.",
    imagem: "https://via.placeholder.com/300x400?text=Planilha",
    categoria: "ferramenta",
    detalhes: "Arquivo Excel editável + tutorial em vídeo"
  },
  {
    id: 4,
    nome: "Pacote Completo (Ebook + Masterclass + Planilha)",
    preco: 147,
    descricao: "Economize R$ 24! Leve tudo junto e comece sua jornada financeira hoje.",
    imagem: "https://via.placeholder.com/300x400?text=Pacote+Completo",
    categoria: "pacote",
    detalhes: "Acesso a tudo + suporte por email",
    destaque: true
  }
];

/* ==================================================================
   CONFIGURAÇÃO DE CHECKOUT
   
   EDITE AQUI: seu link de checkout da Kiwify
================================================================== */

const KIWIFY_CHECKOUT_URL = "https://pay.kiwify.com.br/SEU-LINK-AQUI";
