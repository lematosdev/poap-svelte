<script lang="ts">
  import Header from './lib/top.svelte';
  import Footer from './lib/footer.svelte';
  import Charts from './lib/Charts.svelte';
  import Form from './lib/Form.svelte';
  import { chartsData } from './store';
  import {
    AppBar,
    ProgressBar,
    ProgressRadial
  } from '@skeletonlabs/skeleton';
</script>

<Header />
<main>
  <Form />
  {#if $chartsData}
    <Charts />
    {JSON.stringify($chartsData.chart1)}
  {:else}
    <ProgressRadial class="w-1/3 p-10 mx-auto my-0" />
  {/if}
</main>
<Footer />
