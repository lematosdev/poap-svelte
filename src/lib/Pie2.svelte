<script>
  import Chart from "chart.js/auto";
  import { onMount } from "svelte";

  //default values
  export const typeGraphic1 = "pie";
  export const typeGraphic2 = "bar";
  export const title1 = "Minteos Evento Online";
  export const title2 = "Minteos evento presencial";

  Chart.defaults.color = "#fff";
  Chart.defaults.borderColor = '#383B39';
  function createChart() {
    const ctx = document.getElementById("myChart");

    // @ts-ignore
    new Chart(ctx, {
      type: typeGraphic1,
      data: {
        labels: ["Virtual", "Physical"],
        datasets: [
          {
            data: [11.1, 89.9],
            backgroundColor: ["#615192", "#41B8D5"],
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  onMount(createChart);

  //2
  function createChart2() {
    const ctx2 = document.getElementById("myChart2");

    // @ts-ignore
    new Chart(ctx2, {
      type: typeGraphic2,
      data: {
        labels: ["Neko", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ["#615192", "#41B8D5"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  onMount(createChart2);

  //
  function createChart3() {
    const ctx = document.getElementById("myChart3");

    // @ts-ignore
    new Chart(ctx, {
      type: typeGraphic1,
      data: {
        labels: ["Neko", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            data: [3, 5, 10, 15, 18, 19],
            backgroundColor: ["#6CE5E8", "#41B8D5", "#208BA8","#2055A8 ","#4D20A8"],
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  onMount(createChart3);

  //2
  function createChart4() {
    const ctx = document.getElementById("myChart4");

    // @ts-ignore
    new Chart(ctx, {
      type: typeGraphic2,
      data: {
        labels: ["Neko", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [3, 5, 10, 15, 18, 19],
            backgroundColor: ["#615192", "#41B8D5","#4F628E","#764B8E","#4F628E"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  onMount(createChart4);
</script>
<div class="gradient">
<div class="div">
  <div class="container myChart">
    <h2 class="">Evento online</h2>
    <div class="myChart">
      <canvas id="myChart" />
    </div>
  </div>
  <div class="container myChart2">
    <h2 class="">Eventos presenciales</h2>
    <div class="myChart2">
      <canvas id="myChart2" class="ss" />
    </div>
  </div>
</div>
<!-- graphics 3 - 4 -->
<div class="div">
  <div class="container myChart">
    <h2 class="">Minteos evento online</h2>
    <div class="myChart">
      <canvas id="myChart3" />
    </div>
  </div>
  <div class="container myChart2">
    <h2 class="">Minteos evento presencial</h2>
    <div class="myChart4">
      <canvas id="myChart4" class="ss" />
    </div>
  </div>
</div>
</div>
<style>
  .myChart {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 250px;
   
  }
  .myChart2 {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 500px;

   
  }
  .myChart4 {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 500px;
  }
  .div {
    display: flex;
    height: 400px;
    padding-top: 30px;
    




  }
  .container {
    width: 50%;
  }

  .ss {
    width: 20px;
    height: 20px;
  }
  .gradient{
    background-color: #301060;


/*     background-color: #4158D0;
background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%); */


  }
</style>
