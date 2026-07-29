/**Olá, essa é uma aula mais para mostrar o potencial do Javascript e como podemos apresentar dados usando a biblioteca Chart.js, então bora?

Importância de Gráficos e Visualização de Dados
Gráficos e visualizações são ferramentas poderosas para transmitir informações de maneira clara e eficaz. Eles podem ajudar a identificar padrões, tendências e outliers, tornando-os especialmente úteis em aplicações web modernas.

Instalando Chart.js com NPM
Para começar, você precisará instalar o Chart.js. Aqui está o passo a passo para fazê-lo usando npm:

Execute o comando npm install chart.js.
Depois de instalado, você pode importar o Chart.js em seu projeto JavaScript. */

import Chart from 'chart.js/auto';

/**Exemplos Práticos com Chart.js
Gráfico de Barras
HTML:*/

<canvas id="barChart"></canvas>

const ctx = document.getElementById('barChart').getContext('2d');
const myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março'],
        datasets: [{
            label: 'Vendas',
            data: [12, 19, 3],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
});

/**Gráfico de Linha
HTML:

1
<canvas id="lineChart"></canvas> */

const lineCtx = document.getElementById('lineChart').getContext('2d');
const myLineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['Semana 1', 'Semana 2', 'Semana 3'],
        datasets: [{
            label: 'Visitantes',
            data: [100, 200, 150],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
});

/**Conclusão
Nesta aula, exploramos o poder de JavaScript para gráficos e visualização de dados através da biblioteca Chart.js. O objetivo foi demonstrar como, com algumas linhas de código, você pode criar visualizações impressionantes. Esperamos que você tenha gostado. Mesmo que não tenhamos exercícios hoje, encorajamos você a brincar com os exemplos e a experimentar diferentes tipos de dados e configurações! */