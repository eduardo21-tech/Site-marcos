# Marcos Calgaro — Psicologia Clínica

Site institucional de psicologia clínica em React + Vite, com uma direção editorial acolhedora e contemporânea. A nova versão usa a paleta definida para o projeto: `#CFC2B2` (areia), `#59372A` (marrom) e `#FFFDF8` (off-white). A ilustração de cérebro enviada foi incorporada como elemento de marca no cabeçalho, na abertura e na seção Sobre.

## Rodar localmente

```bash
npm install
npm run dev
```

Depois, abra o endereço indicado pelo Vite. Para validar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura

- `src/App.jsx`: conteúdo, navegação, FAQ, formulário e links de contato.
- `src/styles.css`: identidade visual, componentes e responsividade.
- `public/brain-mark.png`: imagem enviada para a identidade do site.
- `public/manus-routes.json`: manifesto da rota principal.
- `app.config.ts`: metadados da aplicação.

O formulário de contato monta uma mensagem e abre o WhatsApp. A localização presencial aponta para uma busca do endereço no Google Maps. Antes de publicar, vale confirmar telefone, e-mail, Instagram, endereço, formações e textos profissionais.

## Próximo passo: GitHub

Quando o conteúdo estiver aprovado, o projeto pode ser conectado a um repositório GitHub e receber um primeiro commit com os arquivos de fonte. O diretório `node_modules` e a pasta `dist` não devem ser versionados.
