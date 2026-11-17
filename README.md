# Portfólio · Pedro Gonçalves

Site pessoal em HTML, CSS e JavaScript puros, sem build. Bilíngue (PT/EN) com troca na própria página.

## Estrutura

```
index.html      conteúdo (textos em português)
style.css       visual: tokens de cor/tipografia no topo do arquivo
script.js       troca de idioma (dicionário PT/EN)
assets/         foto
curriculo.pdf   adicione aqui o seu currículo
```

## Editar textos

Todo texto traduzível tem um `data-i18n="chave"` no HTML e a mesma chave em `script.js`,
nos objetos `pt` e `en`. Ao mudar um texto, atualize as duas línguas no `script.js`
(e o português no HTML, que é o que aparece antes do JavaScript carregar).

## Publicar

**GitHub Pages:** suba os arquivos num repositório (por exemplo `goncalvespedroo.github.io`),
vá em *Settings → Pages* e escolha a branch `main`, pasta `/ (root)`.

**Vercel:** importe o repositório; não precisa de comando de build nem de pasta de saída.
