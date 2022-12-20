<script>
  import { Pie } from "svelte-chartjs";
  import { data, data2 } from "./data";

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
  } from "chart.js";

  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
</script>

<div class="div-chat">
  <div class="size-chart black">
    <h2 class="test">Evento Online</h2>

    <div class="test2"><Pie {data} options={{ responsive: true }}/> </div> 
  </div>
  <div class="size-chart blue">
    <h2 class="test">Minteos evento online</h2>

   <div class="test2"><Pie {data} options={{ responsive: true }}/> </div>
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
 
  .test {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .test2 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  }
</style>
