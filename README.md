# Cofre Invisível — página de vendas com sistema de loja

Site estático (HTML + CSS + JS puro, sem frameworks) pronto para você editar
no VS Code e publicar. Sistema de loja com catálogo de produtos — cada compra 
vai direto para o Kiwify (sem carrinho).

## Estrutura dos arquivos

```
site/
├── index.html              → página principal (landing page)
├── loja.html               → catálogo de produtos
├── css/style.css           → cores, tipografia e layout
├── js/
│   ├── script.js           → animações da página principal
│   ├── produtos.js         → ⭐ catálogo de produtos e config Kiwify
│   └── loja.js             → interface da loja
└── README.md
```

## 1. COMEÇAR: Configure seus produtos

**EDITE `js/produtos.js`** e adicione seus produtos no array `PRODUTOS`:

```js
const PRODUTOS = [
  {
    id: 1,
    nome: "O Cofre Invisível",
    preco: 47,
    descricao: "Ebook de 8 capítulos para organizar seu dinheiro.",
    imagem: "https://via.placeholder.com/300x400?text=Seu+Produto",
    categoria: "ebook",
    detalhes: "Acesso imediato em PDF + áudio · Garantia de 7 dias",
    destaque: false  // true = coloca um badge "Mais Popular"
  },
  // ... adicione mais produtos aqui
];
```

**Dicas:**
- **`id`**: número único para cada produto (1, 2, 3, ...)
- **`preco`**: número sem vírgula (47, não 47,00)
- **`imagem`**: URL da imagem (use placeholder.com enquanto não tiver a real)
- **`categoria`**: tipo do produto (ebook, video, ferramenta, pacote, etc.)
- **`destaque`**: true se quer que apareça com badge "Mais Popular"

## 2. Configure o checkout com Kiwify

1. Vá ao painel da **Kiwify** → seu produto → "Compartilhar"
2. **Copie o link de checkout** (ex: `https://pay.kiwify.com.br/abc123xyz`)
3. Abra **`js/produtos.js`** e troque esta linha:
   ```js
   const KIWIFY_CHECKOUT_URL = "https://pay.kiwify.com.br/SEU-LINK-AQUI";
   ```
   pelo link real que copiou.

## 3. Fluxo de compra (SIMPLES)

1. Cliente entra em `loja.html`
2. Vê todos os produtos disponíveis
3. **Clica "Comprar agora"** em um produto
4. **Vai direto para o Kiwify** (checkout seguro)
5. Paga e recebe acesso imediato

**Nenhum carrinho** — cada produto é uma compra independente.

## 4. Como rodar localmente

**Opção A — Live Server (mais fácil)**
1. Instale a extensão **Live Server** no VS Code (Ritwick Dey)
2. Clique direito em `index.html` → **"Open with Live Server"**
3. A página abre em `http://127.0.0.1:5500` e atualiza automaticamente

**Opção B — Python**
```bash
cd seu-site
python3 -m http.server 8000
```
Depois abra `http://localhost:8000`

**Opção C — Node**
```bash
cd seu-site
npx serve
```

## 5. Como publicar online

- **Netlify** (mais fácil): crie conta em netlify.com → arraste sua pasta
- **Vercel**: `npm i -g vercel` → `vercel`
- **GitHub Pages**: suba para GitHub → ative em Settings → Pages

## 6. Personalizar

### Mudar cores
No topo de `css/style.css`:
```css
:root {
  --ink: #05070C;           /* preto/fundo */
  --gold: #C9A15A;          /* destaque */
  --mint: #34D399;          /* positivo */
  /* ... */
}
```

### Usar imagens do seu servidor
- Crie pasta `img/` no root
- Adicione suas imagens (ex: `img/produto-1.jpg`)
- Em `js/produtos.js`: `imagem: "img/produto-1.jpg"`

### Editar o conteúdo da página principal
- Abra `index.html`
- Procure por blocos comentados com `EDITAR AQUI`
- Troque textos, depoimentos, preços, etc.

## 7. Dúvidas

**Os produtos não aparecem**
Verifique se editou `js/produtos.js` com os dados corretos.

**O link de compra não funciona**
Você ainda não configurou `KIWIFY_CHECKOUT_URL` em `js/produtos.js`.

**Quero mais de um produto?**
Adicione quantos quiser no array `PRODUTOS` em `js/produtos.js` — cada um 
tem seu próprio botão "Comprar agora".


**Opção B — usando Python (sem instalar nada extra, se já tiver Python)**
```bash
cd site
python3 -m http.server 8000
```
Depois abra `http://localhost:8000` no navegador.

**Opção C — usando Node**
```bash
cd site
npx serve
```

## 3. Como publicar (deixar online de verdade)

Qualquer um destes é gratuito e leva poucos minutos:

- **Netlify** (mais fácil): crie conta em netlify.com → arraste a pasta
  `site` inteira para a área de deploy no painel deles.
- **Vercel**: `npm i -g vercel` → dentro da pasta `site`, rode `vercel`.
- **GitHub Pages**: suba a pasta para um repositório no GitHub → em
  Settings → Pages, selecione a branch principal como fonte.

Depois é só usar esse endereço como link de destino nos seus anúncios,
bio do Instagram, etc.

## 4. Sobre o design

- Paleta: preto/azul-marinho profundo como base, branco quente para o
  texto, e um dourado usado com moderação como assinatura (remete a
  "cofre"/patrimônio — combina com o tema de educação financeira).
- O gráfico de linha ascendente no topo da página é o elemento de
  assinatura: ele "desenha" sozinho ao carregar, ligando visualmente o
  título ao tema de crescimento financeiro.
- O sumário numerado (01–08) é o índice real dos capítulos do ebook —
  se você mudar a quantidade de capítulos, adicione ou remova blocos
  `<li class="toc__item">` em `index.html`.
- Totalmente responsivo (celular, tablet, desktop) e com uma barra de
  compra fixa que aparece no celular ao rolar a página.

## 5. Dúvidas comuns

**Os botões não estão levando para lugar nenhum.**
Você ainda não trocou `KIWIFY_CHECKOUT_URL` em `js/script.js` — enquanto
não trocar, um aviso aparece lembrando você disso.

**Quero mudar as cores.**
No topo de `css/style.css` há um bloco `:root { ... }` com todas as cores
nomeadas (`--ink`, `--navy-900`, `--gold`, etc.). Troque os valores
hexadecimais ali — o resto do site se ajusta automaticamente.

**Quero adicionar mais depoimentos ou perguntas no FAQ.**
Copie um bloco `<figure class="testimonial">` ou `<details class="faq__item">`
existente em `index.html` e cole logo abaixo, alterando o texto.
