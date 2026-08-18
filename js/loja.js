/* ==================================================================
   LOJA.JS — Interface da loja (exibe produtos e vai direto para Kiwify)
================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  // ============================================================
  // 1) RENDERIZAR PRODUTOS NA PÁGINA
  // ============================================================
  
  function renderizarProdutos() {
    const container = document.getElementById("produtos-grid");
    if (!container) return;

    container.innerHTML = PRODUTOS.map(produto => `
      <div class="produto-card ${produto.destaque ? 'produto-card--destaque' : ''}">
        <img src="${produto.imagem}" alt="${produto.nome}" class="produto-card__imagem">
        
        ${produto.destaque ? '<div class="produto-card__badge">Mais Popular</div>' : ''}
        
        <div class="produto-card__conteudo">
          <h3 class="produto-card__nome">${produto.nome}</h3>
          <p class="produto-card__categoria">${produto.categoria}</p>
          <p class="produto-card__descricao">${produto.descricao}</p>
          <p class="produto-card__detalhes">${produto.detalhes}</p>
          
          <div class="produto-card__footer">
            <span class="produto-card__preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</span>
            <button class="btn btn--gold btn--sm js-buy-btn" data-id="${produto.id}">
              Comprar agora
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Adiciona event listeners aos botões
    document.querySelectorAll('.js-buy-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const produtoId = parseInt(btn.dataset.id);
        irParaCheckout(produtoId);
      });
    });
  }

  // ============================================================
  // 2) REDIRECIONAR DIRETO PARA KIWIFY
  // ============================================================

  function irParaCheckout(produtoId) {
    const produto = PRODUTOS.find(p => p.id === produtoId);
    
    if (!produto) return;

    if (KIWIFY_CHECKOUT_URL.includes("SEU-LINK-AQUI")) {
      alert(
        "⚠️ Erro de configuração!\n\n" +
        "1. Vá ao painel Kiwify > seu produto\n" +
        "2. Clique em 'Compartilhar' e copie o link de checkout\n" +
        "3. Cole esse link em js/produtos.js na linha:\n" +
        "   const KIWIFY_CHECKOUT_URL = \"sua-url-aqui\""
      );
      return;
    }

    // Log para analytics (opcional)
    console.log(`[Compra iniciada] Produto: ${produto.nome} (ID: ${produto.id}) - Preço: R$ ${produto.preco}`);

    // Redireciona direto para Kiwify
    window.location.href = KIWIFY_CHECKOUT_URL;
  }

  // ============================================================
  // 3) NOTIFICAÇÕES
  // ============================================================

  function mostrarNotificacao(mensagem) {
    const notificacao = document.createElement('div');
    notificacao.className = 'notificacao';
    notificacao.textContent = mensagem;
    document.body.appendChild(notificacao);

    setTimeout(() => notificacao.classList.add('is-visible'), 10);
    setTimeout(() => {
      notificacao.classList.remove('is-visible');
      setTimeout(() => notificacao.remove(), 300);
    }, 2500);
  }

  window.mostrarNotificacao = mostrarNotificacao;

  // ============================================================
  // 4) RENDERIZAR PRODUTOS
  // ============================================================

  renderizarProdutos();
});
