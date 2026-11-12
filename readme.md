# Inclui+ — Acessibilidade para todos

Projeto institucional demonstrativo sobre acessibilidade, inclusão e autonomia.

## Funcionalidades
- Layout responsivo para computador, tablet e celular.
- Navegação por teclado e link para pular ao conteúdo.
- Painel de acessibilidade: aumento/redução de texto, alto contraste e fonte legível.
- Leitura em voz alta com a API de síntese de voz do navegador.
- Diretório de locais com busca e filtros.
- Links de pesquisa dos locais no Google Maps.
- Formulário de relato com validação e armazenamento local no navegador.
- Conteúdo institucional, orientações e links para fontes oficiais.

## Organização
- `index.html`: estrutura e conteúdo das seções.
- `css/style.css`: identidade visual, responsividade e estados de acessibilidade.
- `js/script.js`: filtros, painel, leitura por voz e formulário.

## Importante sobre os dados
Os estabelecimentos do diretório são **fictícios e demonstrativos**. Não são recomendações nem possuem acessibilidade verificada. Antes de publicar, substitua-os por locais reais, confirme cada recurso presencialmente ou com fonte confiável e informe a data da verificação.

O formulário salva os relatos apenas no `localStorage` do navegador utilizado. Não há servidor, envio de e-mail ou painel administrativo conectado. Para uso real, será necessário criar backend, banco de dados, autenticação, política de privacidade e canal responsável por receber e tratar os relatos.

## Acessibilidade
O projeto utiliza HTML semântico, rótulos em formulários, textos alternativos quando há imagens, foco visível, suporte a teclado e respeito à preferência de movimento reduzido. Isso não garante conformidade automática: faça testes com leitores de tela, teclado, ferramentas de auditoria e pessoas com deficiência.

## Referências
- Lei Brasileira de Inclusão — Lei nº 13.146/2015: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm
- W3C — Web Content Accessibility Guidelines (WCAG): https://www.w3.org/WAI/standards-guidelines/wcag/
- eMAG — Modelo de Acessibilidade em Governo Eletrônico: https://emag.governoeletronico.gov.br/
- Ministério dos Direitos Humanos e da Cidadania: https://www.gov.br/mdh/pt-br/navegue-por-temas/pessoa-com-deficiencia
