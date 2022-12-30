<script lang="ts">
  import Header from './lib/Header.svelte';
  import Footer from './lib/Footer.svelte';
  import Form from './lib/Form.svelte';
  import { ProgressRadial } from '@skeletonlabs/skeleton';
  import { loading } from './store';
</script>

<Header />
<main class="min-h-screen mb-32 mt-10">
  {#if !$loading}
    <Form />
  {:else}
    <ProgressRadial class="w-1/3 p-10 mx-auto my-0" />
  {/if}
</main>
<Footer />
