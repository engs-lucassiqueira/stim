// Carrinho da Stim: guarda os jogos no navegador (localStorage)
(function () {
    var CHAVE = 'stimCarrinho';

    function lerCarrinho() {
        try {
            return JSON.parse(localStorage.getItem(CHAVE)) || [];
        } catch (erro) {
            return [];
        }
    }

    function salvarCarrinho(lista) {
        try {
            localStorage.setItem(CHAVE, JSON.stringify(lista));
        } catch (erro) {
            // se o navegador bloquear o armazenamento, o carrinho só não fica salvo
        }
    }

    function formatarPreco(valor) {
        if (valor === 0) {
            return 'Gratuito';
        }
        return 'R$ ' + valor.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    function estaNoCarrinho(nome) {
        return lerCarrinho().some(function (jogo) {
            return jogo.nome === nome;
        });
    }

    // Mostra a quantidade de jogos no link CARRINHO do menu
    function atualizarContador() {
        var quantidade = lerCarrinho().length;
        var links = document.querySelectorAll('nav a[href="carrinho.html"]');
        links.forEach(function (link) {
            link.textContent = quantidade > 0 ? 'CARRINHO (' + quantidade + ')' : 'CARRINHO';
        });
    }

    function marcarComoAdicionado(botao) {
        botao.textContent = 'No carrinho ✓';
        botao.classList.add('adicionado');
        botao.title = 'Clique para abrir o carrinho';
    }

    // Botões "Adicionar ao carrinho" da loja e da lista de desejos
    function prepararBotoes() {
        var botoes = document.querySelectorAll('[data-add-carrinho]');
        botoes.forEach(function (botao) {
            if (estaNoCarrinho(botao.dataset.nome)) {
                marcarComoAdicionado(botao);
            }

            botao.addEventListener('click', function () {
                if (estaNoCarrinho(botao.dataset.nome)) {
                    window.location.href = 'carrinho.html';
                    return;
                }

                var lista = lerCarrinho();
                lista.push({
                    nome: botao.dataset.nome,
                    genero: botao.dataset.genero,
                    preco: Number(botao.dataset.preco),
                    imagem: botao.dataset.imagem
                });
                salvarCarrinho(lista);
                marcarComoAdicionado(botao);
                atualizarContador();
            });
        });
    }

    function removerDoCarrinho(nome) {
        var lista = lerCarrinho().filter(function (jogo) {
            return jogo.nome !== nome;
        });
        salvarCarrinho(lista);
        mostrarCarrinho();
        atualizarContador();
    }

    function criarItem(jogo) {
        var item = document.createElement('article');
        item.className = 'item-carrinho';

        var imagem = document.createElement('img');
        imagem.src = jogo.imagem;
        imagem.alt = 'Capa do jogo ' + jogo.nome;

        var info = document.createElement('div');
        info.className = 'info-item';

        var titulo = document.createElement('h2');
        titulo.textContent = jogo.nome;

        var genero = document.createElement('p');
        genero.textContent = jogo.genero;

        var aviso = document.createElement('span');
        aviso.textContent = 'Disponível para compra';

        info.appendChild(titulo);
        info.appendChild(genero);
        info.appendChild(aviso);

        var areaPreco = document.createElement('div');
        areaPreco.className = 'preco-item';

        var preco = document.createElement('p');
        preco.textContent = formatarPreco(jogo.preco);

        var excluir = document.createElement('button');
        excluir.type = 'button';
        excluir.className = 'botao-excluir';
        excluir.textContent = 'Excluir do carrinho';
        excluir.addEventListener('click', function () {
            removerDoCarrinho(jogo.nome);
        });

        areaPreco.appendChild(preco);
        areaPreco.appendChild(excluir);

        item.appendChild(imagem);
        item.appendChild(info);
        item.appendChild(areaPreco);
        return item;
    }

    // Monta a lista e o resumo na página do carrinho
    function mostrarCarrinho() {
        var listaItens = document.getElementById('itens-carrinho');
        if (!listaItens) {
            return;
        }

        var jogos = lerCarrinho();
        listaItens.innerHTML = '';

        if (jogos.length === 0) {
            var vazio = document.createElement('div');
            vazio.className = 'carrinho-vazio';
            vazio.innerHTML = '<h2>Seu carrinho está vazio</h2>' +
                '<p>Adicione jogos pela loja ou pela lista de desejos.</p>';
            listaItens.appendChild(vazio);
        } else {
            jogos.forEach(function (jogo) {
                listaItens.appendChild(criarItem(jogo));
            });
        }

        var subtotal = jogos.reduce(function (soma, jogo) {
            return soma + jogo.preco;
        }, 0);

        var precoTexto = subtotal === 0 ? 'R$ 0,00' : formatarPreco(subtotal);
        document.getElementById('subtotal').textContent = precoTexto;
        document.getElementById('total').textContent = precoTexto;
        document.getElementById('quantidade').textContent =
            jogos.length === 1 ? '1 jogo' : jogos.length + ' jogos';
    }

    prepararBotoes();
    mostrarCarrinho();
    atualizarContador();
})();
