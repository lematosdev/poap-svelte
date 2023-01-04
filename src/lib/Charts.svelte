<script lang="ts">
  import Chart from 'chart.js/auto';
  import { Pie, Bar } from 'svelte-chartjs';
  import ChartDataLabels from 'chartjs-plugin-datalabels';
  import { chartsData } from '../store';
  import htmlLegendPlugin from '../utils/htmlPlugin';

  Chart.register([ChartDataLabels, htmlLegendPlugin]);
</script>

<div
  class="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4 mx-7 text-center w-3/4"
>
  <div>
    <h2 class="mb-2 h-20 min-h-min">Presencial VS Online</h2>
    <Pie
      data={$chartsData.chart1}
      options={{
        responsive: true,
        plugins: {
          htmlLegend: {
            containerID: 'legend-container'
          },
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
            color: 'white',
            textStrokeWidth: 0.2
          }
        }
      }}
    />
    <div
      id="legend-container"
      class="flex justify-start text-start"
    />
  </div>
  <div class="">
    <h2 class="mb-2 h-20 min-h-min">Minteos Eventos Online</h2>
    <Pie
      data={$chartsData.chart2}
      options={{
        responsive: true,
        plugins: {
          htmlLegend: {
            containerID: 'legend-container2'
          },
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
            color: 'white',
            textStrokeWidth: 0.2
          }
        }
      }}
    />
    <div
      id="legend-container2"
      class="flex justify-start text-start"
    />
  </div>
  <div>
    <h2 class="mb-2 h-20 min-h-min">Minteos Eventos Presencial</h2>

    <Pie
      data={$chartsData.chart3}
      options={{
        responsive: true,

        plugins: {
          htmlLegend: {
            containerID: 'legend-container3'
          },
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
            color: 'white',
            textStrokeWidth: 0.2
          }
        },
      }}
    />
    <div
      id="legend-container3"
      class="flex justify-start text-start"
    />
  </div>
  <div>
    <h2 class="mb-2 h-20 min-h-min">Eventos Presenciales</h2>

    <Pie
      data={$chartsData.chart4}
      options={{
        responsive: true,
        plugins: {
          htmlLegend: {
            containerID: 'legend-container4'
          },
          legend: {
            display: false
          }, datalabels: {
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
            color: 'white',
            textStrokeWidth: 0.2
          }
        },
      }}
    />
    <div
      id="legend-container4"
      class="flex justify-start text-start"
    />
  </div>
</div>
