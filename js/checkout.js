/* ==================================================================
   CHECKOUT.JS — Processamento do checkout
   
   EDITAR: Insira o link de checkout da Kiwify abaixo.
   O carinho será salvo e redirecionado para o Kiwify.
================================================================== */

const KIWIFY_CHECKOUT_URL = "https://pay.kiwify.com.br/6ez91vf";

document.addEventListener("DOMContentLoaded", () => {

  // ============================================================
  // 1) RENDERIZAR RESUMO DO PEDIDO
  // ============================================================

  function renderizarResumoPedido() {
    const container = document.getElementById("resumo-pedido");
    if (!container) return;

    const itens = carrinho.obter();
    const total = carrinho.obterTotal();

    if (itens.length === 0) {
      document.querySelector('.checkout-container').innerHTML = `
        <div style="text-align: center; padding: 60px 20px;">
          <h2>Seu carrinho está vazio</h2>
          <p style="color: var(--paper-dim); margin: 20px 0;">Volte à loja e adicione produtos antes de fazer checkout.</p>
          <a href="loja.html" class="btn btn--gold">Voltar à loja</a>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="checkout-itens">
        ${itens.map(item => `
          <div class="checkout-item">
            <div class="checkout-item__info">
              <h4>${item.nome}</h4>
              <p style="color: var(--paper-dim); font-size: 14px;">Quantidade: ${item.quantidade}x</p>
            </div>
            <div class="checkout-item__valor">
              R$ ${(item.preco * item.quantidade).toFixed(2).replace('.', ',')}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="checkout-total">
        <div class="checkout-total__linha">
          <span>Subtotal</span>
          <span>R$ ${total.toFixed(2).replace('.', ',')}</span>
        </div>
        <div class="checkout-total__linha checkout-total__linha--frete">
          <span>Frete / Entrega</span>
          <span>Grátis</span>
        </div>
        <div class="checkout-total__linha checkout-total__linha--final">
          <strong>Total a pagar</strong>
          <strong>R$ ${total.toFixed(2).replace('.', ',')}</strong>
        </div>
      </div>

      <div class="checkout-info">
        <p style="color: var(--paper-dim); font-size: 13px;">
          ✓ Pagamento seguro pela Kiwify<br>
          ✓ Acesso imediato após confirmação<br>
          ✓ Garantia incondicional de 7 dias
        </p>
      </div>
    `;
  }

  // ============================================================
  // 2) FORM DE CHECKOUT
  // ============================================================

  const form = document.getElementById("checkout-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (KIWIFY_CHECKOUT_URL.includes("SEU-LINK-AQUI")) {
        alert(
          "⚠️ Configure primeiro!\n\n" +
          "1. Vá ao painel Kiwify > seu produto\n" +
          "2. Clique em 'Compartilhar' e copie o link de checkout\n" +
          "3. Cole esse link em js/checkout.js na linha:\n" +
          "   const KIWIFY_CHECKOUT_URL = \"sua-url-aqui\""
        );
        return;
      }

      // Salva os dados do cliente (opcional - para seu sistema)
      const dados = {
        nome: document.getElementById("nome")?.value,
        email: document.getElementById("email")?.value,
        telefone: document.getElementById("telefone")?.value,
        carrinho: carrinho.obter(),
        total: carrinho.obterTotal(),
        data: new Date().toISOString()
      };

      console.log("Pedido:", dados);

      // Redireciona para Kiwify
      abrirCheckout();
    });
  }

  function abrirCheckout() {
    // Você pode adicionar aqui: salvar dados no seu servidor, disparar pixel, etc.
    // Exemplo com Firebase:
    // db.collection('pedidos').add({...dados});

    // Redireciona para o Kiwify
    window.location.href = KIWIFY_CHECKOUT_URL;
  }

  // ============================================================
  // 3) VALIDAÇÃO DO FORMULÁRIO
  // ============================================================

  const inputs = document.querySelectorAll(".checkout-form__input");
  inputs.forEach(input => {
    input.addEventListener("blur", () => {
      if (input.value.trim() === "") {
        input.classList.add("is-error");
      } else {
        input.classList.remove("is-error");
      }
    });
  });

  // ============================================================
  // 4) RENDERIZAR TUDO
  // ============================================================

  renderizarResumoPedido();
});
