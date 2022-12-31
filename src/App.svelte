<script lang="ts">
  import Header from './lib/Header.svelte';
  import Footer from './lib/Footer.svelte';
  import Form from './lib/Form.svelte';
  import {
    Drawer,
    ProgressRadial,
    Toast
  } from '@skeletonlabs/skeleton';
  import { loading } from './store';
</script>

<Header />
<main class="min-h-screen mb-32 mt-10">
  <Drawer position="right" width="w-40">
    <nav>
      <a href="https://nftforworld.com/" class="underline text-white">Inicio</a>
      <a href="https://nftforworld.com/contact-us/"
        >Contáctanos</a
      >
      <a href="https://nftforworld.com/consulta-poap/"
        >Consulta POAP</a
      >
      <a href="https://nftforworld.com/links/">Links</a>
    </nav>
  </Drawer>
  {#if !$loading}
    <Form />
    <Toast />
  {:else}
    <ProgressRadial class="w-1/3 p-10 mx-auto my-0" />
  {/if}
</main>
<Footer />
