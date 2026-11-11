# jgmtz.github.io

Portfólio de João Guilherme Matzenbacher. Site estático em [Astro](https://astro.build), com React só nas partes interativas (mostrador da trajetória e demonstrações dos projetos). PT em `/`, EN em `/en/`.

## Rodar no computador

```sh
npm install
npm run dev       # abre em http://localhost:4321
npm run build     # gera a pasta dist/
```

## Onde editar

| O quê | Onde |
|---|---|
| Todos os textos (PT e EN), links, e-mail | `src/content.ts` |
| Chave do formulário (Web3Forms) | `WEB3FORMS_KEY` em `src/content.ts` |
| Foto | `public/foto.jpg` e `HAS_PHOTO = true` |
| Currículo | `public/curriculo.pdf` e `HAS_CV = true` |
| Cores e fontes | `src/styles/global.css` |
| Home | `src/components/HomePage.astro` |
| Páginas de projeto | `src/components/ProjectPage.astro` |
| Demonstrações | `src/components/demos/` |

## Publicar no GitHub Pages (primeira vez)

1. No GitHub, crie um repositório público chamado exatamente `jgmtz.github.io`.
2. Nesta pasta:
   ```sh
   git add .
   git commit -m "Primeira versão do portfólio"
   git remote add origin https://github.com/jgmtz/jgmtz.github.io.git
   git push -u origin main
   ```
3. No repositório: **Settings > Pages > Source: GitHub Actions**.
4. Em um ou dois minutos o site fica em https://jgmtz.github.io. Depois disso, cada `git push` publica de novo.

## Formulário de contato

1. Crie a chave em https://web3forms.com usando `joaoguimatz@gmail.com` (as mensagens chegam nesse e-mail).
2. Cole em `WEB3FORMS_KEY`. A chave é pública por design; pode ir para o repositório.
