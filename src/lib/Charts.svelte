<script lang="ts">
  import Chart from 'chart.js/auto';
  import { Pie, Bar } from 'svelte-chartjs';
  import ChartDataLabels from 'chartjs-plugin-datalabels';
  import { chartsData } from '../store';

  Chart.defaults.color = '#fff';
  Chart.defaults.borderColor = '#383B39';
  Chart.register(ChartDataLabels);
</script>

<div
  class="grid grid-cols-2 gap-32 items-center text-center mt-4"
>
  <div>
    <h2 class="mb-2">Presencial VS Online</h2>
    <Pie
      data={$chartsData.chart1}
      options={{
        plugins: {
          legend: {
            display: false
          },
          datalabels: {
            formatter: (value, dnct1) => {
              let sum = 0;
              let dataArr =
                dnct1.chart.data.datasets[0].data;
              dataArr.map((data) => {
                sum += Number(data);
              });

              let percentage =
                ((value * 100) / sum).toFixed(2) + '%';
              return percentage;
            },
            backgroundColor: '#262A27',
            borderRadius: 8,
            textStrokeWidth: 0.2
          }
        }
      }}
    />
  </div>
  <div>
    <h2 class="mb-2">Minteos Eventos Online</h2>

    <Pie
      data={$chartsData.chart2}
      options={{
        plugins: {
          datalabels: {
            formatter: (value, dnct1) => {
              let sum = 0;
              let dataArr =
                dnct1.chart.data.datasets[0].data;
              dataArr.map((data) => {
                sum += Number(data);
              });

              let percentage =
                ((value * 100) / sum).toFixed(2) + '%';
              return percentage;
            },
            backgroundColor: '#262A27',
            borderRadius: 8,
            textStrokeWidth: 0.2
          },
          legend: {
            display: false
          }
        }
      }}
    />
  </div>
  <div>
    <h2 class="mb-2">Minteos Eventos Presencial</h2>

    <Bar
      data={$chartsData.chart3}
      options={{
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              display: false
            },
            grid: { drawTicks: false, drawBorder: false }
          },
          x: {
            beginAtZero: true,
            ticks: {
              display: false
            },
            grid: { drawTicks: false, drawBorder: false }
          }
        }
      }}
    />
  </div>
  <div>
    <h2 class="mb-2">Eventos Presenciales</h2>

    <Bar
      data={$chartsData.chart4}
      options={{
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              display: false
            },
            grid: { drawTicks: false, drawBorder: false }
          },
          x: {
            beginAtZero: true,
            ticks: {
              display: false
            },
            grid: { drawTicks: false, drawBorder: false }
          }
        }
      }}
    />
  </div>
</div>
