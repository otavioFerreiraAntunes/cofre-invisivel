/* ==================================================================
   COFRE INVISÍVEL — script.js

   >>> O ÚNICO TRECHO QUE VOCÊ PRECISA EDITAR PARA VENDER É ESTE <<<

   1. Vá até o painel da Kiwify > seu produto > "Compartilhar" e
      copie o link de checkout (algo como
      https://pay.kiwify.com.br/xxxxxxx).
   2. Cole esse link na constante KIWIFY_CHECKOUT_URL abaixo.

   Todos os botões de compra da página (topo, hero, oferta, CTA final
   e barra fixa do celular) usam automaticamente esse mesmo link —
   você só precisa trocar em um lugar.
================================================================== */

const KIWIFY_CHECKOUT_URL = "https://pay.kiwify.com.br/6ez91vf";

document.addEventListener("DOMContentLoaded", () => {

  /* --------------------------------------------------------------
     1) Aplica o link da Kiwify a todos os botões de compra e
        registra qual botão foi clicado (fica salvo no console e
        pode ser plugado a um pixel de analytics se você quiser).
  ----------------------------------------------------------------*/
  const buyButtons = document.querySelectorAll(".js-buy-btn");

  buyButtons.forEach((btn) => {
    btn.setAttribute("href", KIWIFY_CHECKOUT_URL);
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "noopener noreferrer");

    btn.addEventListener("click", (event) => {
      const location = btn.dataset.location || "desconhecido";

      // Ponto de extensão: dispare aqui seu pixel do Facebook,
      // Google Ads, TikTok, etc. Exemplo:
      // if (typeof fbq === "function") fbq('track', 'InitiateCheckout');

      console.log(`[Cofre Invisível] clique em comprar — origem: ${location}`);

      if (KIWIFY_CHECKOUT_URL.includes("SEU-LINK-AQUI")) {
        event.preventDefault();
        alert(
          "Antes de publicar: abra js/script.js e troque KIWIFY_CHECKOUT_URL " +
          "pelo link de checkout real do seu produto na Kiwify."
        );
      }
    });
  });

  /* --------------------------------------------------------------
     2) Barra fixa de compra no celular — aparece depois que a
        pessoa rola para além da seção inicial.
  ----------------------------------------------------------------*/
  const stickyBar = document.getElementById("stickyBar");
  const hero = document.querySelector(".hero");

  if (stickyBar && hero) {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        stickyBar.classList.toggle("is-visible", !entry.isIntersecting);
      },
      { rootMargin: "-10% 0px 0px 0px" }
    );
    heroObserver.observe(hero);
  }

  /* --------------------------------------------------------------
     3) Revelação suave de seções ao rolar a página.
  ----------------------------------------------------------------*/
  const revealTargets = document.querySelectorAll(
    ".section, .strip, .testimonial, .toc__item"
  );

  revealTargets.forEach((el) => el.classList.add("reveal"));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealTargets.forEach((el) => revealObserver.observe(el));
});
