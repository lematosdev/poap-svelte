<script lang="ts">
  import Chart from 'chart.js/auto';
  import { Pie, Doughnut } from 'svelte-chartjs';
  import ChartDataLabels from 'chartjs-plugin-datalabels';
  import { chartsData } from '../store';
  import htmlLegendPlugin from '../utils/htmlPlugin';
  import createWorkBook from '../utils/createWorkbook';

  Chart.register([ChartDataLabels, htmlLegendPlugin]);
</script>

<div>
  <div
    class="flex items-center justify-center flex-col mt-5"
  >
    <button
      class="text-white shadow-md rounded-xl p-6 mb-5 font-bold bg-purple"
      on:click={() => ($chartsData = null)}
    >
      Volver
    </button>
    <!-- export to excel button with icon in assests folder -->
    <button
      class=" flex items-center bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
      on:click={() => createWorkBook($chartsData.excel)}
    >
      <svg
        class="mx-auto w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="#fff"
          d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"
        />
      </svg>
      Generar Excel
    </button>
  </div>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 gap-x-36 gap-y-10 mt-4 mx-7 text-center"
  >
    <div>
      <h2 class="mb-2 h-20 min-h-min">
        Presencial VS Online
      </h2>
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
      <h2 class="mb-2 h-20 min-h-min">
        Minteos Eventos Online
      </h2>
      <Doughnut
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
      <h2 class="mb-2 h-20 min-h-min">
        Minteos Eventos Presencial
      </h2>

      <Doughnut
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
          }
        }}
      />
      <div
        id="legend-container3"
        class="flex justify-start text-start"
      />
    </div>
    <div>
      <h2 class="mb-2 h-20 min-h-min">
        Eventos Presenciales
      </h2>

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
        id="legend-container4"
        class="flex justify-start text-start"
      />
    </div>
  </div>
</div>
