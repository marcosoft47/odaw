document.addEventListener('DOMContentLoaded', function () {
    const table = document.querySelector('table');
    const linhas = Array.from(table.querySelectorAll('tr')).slice(1);
    const campoBusca = document.getElementById('filtro-jogo');
    const campoGenero = document.getElementById('filtro-genero');
    const botaoLimpar = document.getElementById('limpar-filtro');
    const resultado = document.getElementById('resultado-filtro');

    // Preencher o campo de gênero com opções únicas
    const generos = [...new Set(
        linhas
            .map(linha => linha.cells[3]?.textContent.trim())
            .filter(genero => genero && genero !== '')
    )].sort((a, b) => a.localeCompare(b));

    // Adicionar todos os gêneros como opções
    generos.forEach(function (genero) {
        const option = document.createElement('option');
        option.value = genero.toLowerCase();
        option.textContent = genero;
        campoGenero.appendChild(option);
    });

    function aplicarFiltros() {
        const textoBusca = campoBusca.value.trim().toLowerCase();
        const generoSelecionado = campoGenero.value;
        let totalVisivel = 0;

        linhas.forEach(function (linha) {
            // Obter os valores das células, garantindo que não sejam nulos
            const nome = linha.cells[0]?.textContent.trim().toLowerCase() || '';
            const genero = linha.cells[3]?.textContent.trim().toLowerCase() || '';
            const analise = linha.cells[1]?.textContent.trim().toLowerCase() || '';
            const status = linha.cells[5]?.textContent.trim().toLowerCase() || '';

            // Verificar se o texto de busca combina com qualquer uma das colunas relevantes
            const matchTexto = !textoBusca ||
                nome.includes(textoBusca) ||
                genero.includes(textoBusca) ||
                analise.includes(textoBusca) ||
                status.includes(textoBusca);

            const matchGenero = generoSelecionado === 'todos' || genero === generoSelecionado;
            const deveMostrar = matchTexto && matchGenero;

            linha.style.display = deveMostrar ? '' : 'none';

            if (deveMostrar) {
                totalVisivel += 1;
            }
        });

        resultado.textContent = totalVisivel === 0
            ? 'Nenhum jogo encontrado com esses filtros.'
            : `Mostrando ${totalVisivel} jogo(s).`;
    }

    campoBusca.addEventListener('input', aplicarFiltros);
    campoGenero.addEventListener('change', aplicarFiltros);
    botaoLimpar.addEventListener('click', function () {
        campoBusca.value = '';
        campoGenero.value = 'todos';
        aplicarFiltros();
        campoBusca.focus();
    });

    aplicarFiltros();
});
