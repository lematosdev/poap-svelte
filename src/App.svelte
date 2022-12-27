<script lang="ts">
  import Header from './lib/top.svelte';
  import Footer from './lib/footer.svelte';
  import Form from './lib/Form.svelte';
  import {
    AppShell,
    ProgressRadial
  } from '@skeletonlabs/skeleton';
  import { chartsData, loading } from './store';
  import Charts from './lib/Charts.svelte';
</script>

<!-- <Header /> -->
<!-- <main> -->
<!-- <Form /> -->
<!-- {#if $chartsData} -->
<!-- <Charts /> -->
<!-- {JSON.stringify($chartsData.chart1)} -->
<!-- {:else} -->
<!-- <ProgressRadial class="w-1/3 p-10 mx-auto my-0" /> -->
<!-- {/if} -->
<!-- </main> -->
<!-- <Footer /> -->

<AppShell>
  <Header />
  <div class="m-48">
    {#if !$loading}
      <Form />
    {:else}
      <ProgressRadial class="w-1/3 p-10 mx-auto my-0" />
    {/if}
  </div>
  <Footer />
</AppShell>
