<script>
  import Chart from 'chart.js/auto';
  import { Pie, Bar, Line } from 'svelte-chartjs';
  import ChartDataLabels from 'chartjs-plugin-datalabels';
  import { chartsData } from '../store';

  Chart.defaults.color = '#fff';
  Chart.defaults.borderColor = '#383B39';
  Chart.register(ChartDataLabels);
  
</script>

<div class="grid grid-rows-2 gap-20 items-center">
  <div>
    <Pie
      data={$chartsData.chart1}
      options={{
        responsive: true,
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
          }
        }
      }}
    />
  </div>
  <div>
    <Pie
      data={$chartsData.chart2}
      options={{
        responsive: true,
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
          }
        }
      }}
    />
  </div>
</div>
