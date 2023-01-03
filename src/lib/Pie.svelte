<script>
    import Chart from "chart.js/auto";
    import { onMount } from "svelte";
  
    //default values
    export const typeGraphic1 = "pie";
    export const typeGraphic2 = "bar";
    export const title1 = "Minteos Evento Online";
    export const title2 = "Minteos evento presencial";
  
    function createChart3() {
      const ctx = document.getElementById("myChart3");
  
      // @ts-ignore
      new Chart(ctx, {
        type: typeGraphic1,
        data: {
          labels: ["Virtual", "Physical","neko"],
          datasets: [
            {
              data: [11.1, 89.9,10],
              backgroundColor: ["#887CAF", "#615192","#261758","#13073A","#403075"],
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
  </script>
  
  <div class="div">
    <div class="container myChart">
      <h2 class="">{title1}</h2>
      <div class="myChart">
        <canvas id="myChart3" />
      </div>
    </div>
    <div class="container myChart2">
      <h2 class="">{title1}</h2>
      <div class="myChart2">
        <canvas id="myChart2" class="ss" />
      </div>
    </div>
  </div>
  
  <style>
    .myChart {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 250px;
      background-color: rgb(226, 43, 67);
    }
    .myChart2 {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 500px;
  
      background-color: blueviolet;
    }
    .div {
      display: flex;
      height: 400px;
      margin-top: 100px;
      padding-top: 30px;
      background-color: brown;
    }
    .container {
      width: 50%;
    }
  
    .ss {
      width: 20px;
      height: 20px;
    }
  </style>
  