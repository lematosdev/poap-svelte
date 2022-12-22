<script>
  import { Pie, Bar } from "svelte-chartjs";
  import { data2 } from "./data";
  import {
    Chart,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement,
  } from "chart.js";

  Chart.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement
  );
  export let title1 = "Informacion";
  export let title2 = "Informacion2";
  const data = {
  labels: ['Red', 'Blue',"neko"],
  datasets: [
    {
      label: 'NFT Votos',
      data: [12, 19,50],
      backgroundColor: [
        'rgba(0, 20, 71, 0.5)',
        'rgba(98,  182, 239,0.4)',
        'rgba(255, 218, 128,0.4)',
      ],
      borderWidth: 2,
      borderColor: [
        'rgba(255, 134, 159, 1)',
        'rgba(98,  182, 239, 1)',
        'rgba(255, 218, 128,0.4)',
      ],
    },
  ],
};
</script>

<div class="div-chat">
   <div class="size-chart black">
    <h2 class="h2-1">{title1}</h2>

     <div class="pie-1">
      <div class="bar-1">
        <div class="pricesa">
        <Pie {data} options={{ responsive: true }} />
      </div>
      </div>
     </div>
     </div>
      <div class="size-chart blue">
      <h2 class="h2-2">{title2}</h2>
      <div class="bar-2">
      <Bar  {data2} width={100} height={50} options={{ responsive: true }} />
    </div>
  </div>
</div>


<style>
  .blue {
    background-color: blue;
    padding-bottom: 150px;
    padding-top: 90px;
    width: 100%;
  }
  .black {
    background-color: coral;
    padding-bottom: 150px;
    padding-top: 90px;
    width: 100%;
  }

  .h2-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 200px;
  }
  .h2-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 170px;
  }
  .bar-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    margin-left: 200px;
  }
  .pie-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    margin-left: 10px;
  }
  .bar-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    margin-right: 170px;
  }
  .pricesa {
    width: 200px;
    height: 200px;
  }
</style>
