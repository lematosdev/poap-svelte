<script>
  import Chart from 'chart.js/auto';
  import { Pie, Bar } from 'svelte-chartjs';
  import ChartDataLabels from 'chartjs-plugin-datalabels';
  import { onMount } from 'svelte';
  import { chartsData } from '../store';


  Chart.defaults.color = '#fff';
  Chart.defaults.borderColor = '#383B39';
  Chart.register(ChartDataLabels);

  // let chart;

  onMount(async () => {
    // const res = await fetch(
    //   'https://6lz6vyjs0e.execute-api.us-east-1.amazonaws.com/event/50400'
    // );
    // chart = await res.json();
    // const chart1 = createChart({
    //   ...data.chart1,
    //   plugins: [ChartDataLabels],
    // });
    // createChart(canvas2, {
    //   type: 'bar',
    //   data: {
    //     labels: [
    //       'Neko',
    //       'Blue',
    //       'Yellow',
    //       'Green',
    //       'Purple',
    //       'Orange'
    //     ],
    //     datasets: [
    //       {
    //         label: '# of Votes',
    //         data: [12, 19, 3, 5, 2, 3],
    //         backgroundColor: ['#615192', '#41B8D5'],
    //         borderWidth: 1
    //       }
    //     ]
    //   },
    //   options: {
    //     responsive: true,
    //     scales: {
    //       y: {
    //         beginAtZero: true
    //       }
    //     }
    //   }
    // });
    // createChart(canvas3, {
    //   type: 'pie',
    //   data: {
    //     labels: [
    //       'Neko',
    //       'Blue',
    //       'Yellow',
    //       'Green',
    //       'Purple',
    //       'Orange'
    //     ],
    //     datasets: [
    //       {
    //         data: [3, 5, 10, 15, 18, 19],
    //         backgroundColor: [
    //           '#6CE5E8',
    //           '#036B84',
    //           '#208BA8',
    //           '#2055A8 ',
    //           '#4D20A8'
    //         ]
    //       }
    //     ]
    //   },
    //   options: {
    //     responsive: true
    //   }
    // });
    // createChart(canvas4, {
    //   type: 'bar',
    //   data: {
    //     labels: [
    //       'Neko',
    //       'Blue',
    //       'Yellow',
    //       'Green',
    //       'Purple',
    //       'Orange'
    //     ],
    //     datasets: [
    //       {
    //         label: '# of Votes',
    //         data: [3, 5, 10, 15, 18, 19],
    //         backgroundColor: [
    //           '#036B84',
    //           '#41B8D5',
    //           '#4F628E',
    //           '#764B8E',
    //           '#4F628E'
    //         ],
    //         borderWidth: 1
    //       }
    //     ]
    //   },
    //   options: {
    //     responsive: true,
    //     scales: {
    //       y: {
    //         beginAtZero: true
    //       }
    //     }
    //   }
    // });
  });
</script>

<div class="flex items-center justify-center">
  <div>
    <!-- {#if chart} -->
    <div class="myChart">
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
  </div>
  <div>
    <h2 class="flex items-center justify-center">
      Hola Mundo
    </h2>
    <div class="myChart">
      <Bar
        data={{
          labels: ['Virtual', 'Physical'],
          datasets: [
            {
              data: [41, 70]
            }
          ]
        }}
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
</div>
<!-- {:else} -->
<!-- <h1 class="title">Loading...</h1> -->

<!-- {/if} -->
<style>
  .myChart {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
  }
</style>
