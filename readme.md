# Tarefa 33 — Página Pessoal com DaisyUI

## 1. Componentes DaisyUI Utilizados
* **Navbar & Hero:** Utilizados no cabeçalho para identificação (`navbar`) e destaque inicial (`hero`).
* **Card (`card`, `card-body`, `card-title`, `card-actions`):** Usados na seção de projetos para exibir os 3 cards.
* **Badge (`badge-primary`, `badge-outline`):** Usados na seção de apresentação para destacar as habilidades.
* **Button (`btn-primary`, `btn-outline`, `btn-sm`):** Utilizados nos botões de ação do cabeçalho, cards e formulário.
* **Input (`input-bordered`):** Utilizado no formulário de contato.

## 2. Justificativa das Escolhas
Optei por combinar `navbar` e `hero` no cabeçalho para permitir fácil navegação e, ao mesmo tempo, causar um impacto visual imediato com o título de apresentação.

## 3. Ajustes com Tailwind CSS Puro
* **Grid Responsivo:** Utilizei as classes utilitárias `grid grid-cols-1 md:grid-cols-3 gap-6` no container dos cards, pois o DaisyUI não força o layout em colunas para os cards.
* **Espaçamento:** Utilizei `space-y-12` e `py-12` do Tailwind para garantir uma boa hierarquia visual e margens consistentes entre as seções.

## 4. Reflexão sobre Temas
Testei a página nos temas `dark` e `light` alterando o atributo `data-theme` na tag `<html>`. A página se comportou melhor no tema `dark`, pois as cores de contraste das `badges` e dos botões sobressaíram com mais legibilidade sobre o fundo `bg-base-200`.