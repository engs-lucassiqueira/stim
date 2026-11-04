# Stim

Projeto acadêmico de uma plataforma de jogos, desenvolvido com HTML e CSS para aplicar conceitos de usabilidade, experiência do usuário, acessibilidade e responsividade.

## Acesso ao site

Endereço previsto para o GitHub Pages: https://engs-lucassiqueira.github.io/stim/

Esse endereço precisa ser confirmado depois que o grupo ativar a publicação. O pacote local não ativa o GitHub Pages.

Para abrir no computador, mantenha os arquivos e a pasta `img` juntos e abra `index.html`. As telas desta contribuição também podem ser abertas por `biblioteca.html` e `perfil.html`.

## Telas e responsabilidades

| Integrante | Telas / contribuição |
| --- | --- |
| Lucas | Base do projeto, Loja (`index.html`) e Insígnias (`insignias.html`) |
| Kauã Santos | Biblioteca (`biblioteca.html` e `biblioteca.css`) e Perfil (`perfil.html` e `perfil.css`); documentação destas duas telas |

O grupo deve acrescentar os responsáveis pelas telas Comunidade, Reviews da loja, Lista de desejos e Carrinho conforme a divisão combinada. Na base recebida para esta contribuição, essas quatro telas ainda tinham somente a estrutura inicial. A publicação final e a presença dos commits de todos precisam ser conferidas pelo grupo.

## Minha contribuição - Kauã Santos

Na Biblioteca, organizei os jogos em cartões com capa, categoria, situação de instalação, tempo de jogo e progresso das conquistas. Acrescentei filtros de Todos, Instalados e Favoritos. Eles funcionam usando os botões de opção do HTML e seletores do CSS, sem JavaScript. O usuário também pode abrir os detalhes de cada jogo.

No Perfil, organizei a identificação do jogador, suas estatísticas, a atividade recente e a primeira insígnia. As informações de jogos e horas foram mantidas coerentes com a Biblioteca. Usei links para conectar as duas telas entre si e às páginas que já existem no projeto.

Mantive o verde, o fundo escuro, a fonte e as imagens da base do grupo. Os estilos foram colocados nos arquivos das minhas telas, sem alterar `style.css`, Loja ou Insígnias.

## Conceitos aplicados nas telas Biblioteca e Perfil

### Usabilidade e navegação

- O menu permanece na mesma posição nas duas telas.
- A página atual aparece destacada e recebe `aria-current="page"`.
- Os nomes dos links indicam o destino: Minha biblioteca, Ver meu perfil e Ver todas as insígnias.
- Os filtros usam nomes e quantidades para explicar quais jogos serão exibidos.

### Experiência do usuário e escolhas de design

- Os títulos, subtítulos e espaços separam as informações por importância.
- O destaque da Biblioteca chama atenção para o jogo mais recente.
- A repetição dos cartões e das cores facilita reconhecer informações semelhantes, aplicando consistência e agrupamento por proximidade.
- A seleção do filtro e o destaque no menu dão retorno visual sobre a escolha atual.
- As horas e atividades do Perfil acompanham os dados da Biblioteca para manter a experiência coerente.

### Acessibilidade

- HTML em português, com `header`, `nav`, `main`, `section`, `article` e `footer`.
- Um título principal em cada tela e textos alternativos nas capas dos jogos.
- Link Pular para o conteúdo, visível ao receber foco.
- Foco visível para navegação com teclado.
- Filtros com `fieldset`, `legend`, `input` e `label` associados.
- Detalhes com `details` e `summary`, sem depender de passar o mouse.
- Progresso identificado com rótulo e porcentagem; estados também aparecem por escrito, além das cores.

Essas medidas auxiliam o acesso, mas não representam uma certificação completa de acessibilidade.

### Responsividade

- A grade da Biblioteca passa de quatro para duas e depois uma coluna.
- O destaque, o perfil e os painéis se reorganizam em telas menores.
- O menu quebra em linhas e os botões mantêm uma área mínima de interação.
- As imagens se adaptam à largura disponível.

## Limites do protótipo

Os dados de perfil, horas, favoritos e conquistas são exemplos visuais. O projeto não autentica contas nem instala ou executa jogos. Os filtros apenas mudam os cartões visíveis; eles não alteram favoritos ou dados salvos.

## Tecnologias

- HTML5
- CSS3, Flexbox, Grid e media queries
- Nenhuma dependência externa ou JavaScript nas duas telas desta contribuição

## Conferência da contribuição

Foram conferidos os arquivos e destinos locais, o filtro de favoritos, a abertura dos detalhes e o caminho Biblioteca → Perfil no navegador. O layout também foi inspecionado em janelas internas com larguras de 360 px e 320 px, sem transbordamento horizontal nas duas telas.

As demais telas, a integração com novas mudanças dos colegas e a publicação no GitHub Pages ficam para a conferência final do grupo.
