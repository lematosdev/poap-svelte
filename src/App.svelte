<script lang="ts">
  import Header from './lib/Header.svelte';
  import Footer from './lib/Footer.svelte';
  import Form from './lib/Form.svelte';
  import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
  import '@skeletonlabs/skeleton/styles/all.css';
  import '../src/app.postcss';
  import {
    Drawer,
    ProgressRadial,
    Toast
  } from '@skeletonlabs/skeleton';
  import { loading } from './store';
</script>

<Header />
<main
  class="flex justify-center items-start mt-10 min-h-screen text-gray-800"
>
  <Drawer position="right" width="w-40">
    <nav class="mt-7 ml-6">
      <a
        class="!text-white !no-underline"
        href="https://nftforworld.com/">Inicio</a
      >
      <a
        class="!text-white !no-underline"
        href="https://nftforworld.com/contact-us/"
        >Contáctanos</a
      >
      <a
        class="!text-white !no-underline"
        href="https://nftforworld.com/consulta-poap/"
        >Consulta POAP</a
      >
      <a
        class="!text-white !no-underline"
        href="https://nftforworld.com/links/">Links</a
      >
    </nav>
  </Drawer>
  {#if !$loading}
    <Form />
    <Toast />
  {:else}
    <div
      class="w-2/3 h-300 md:w-1/3 md:h-200 lg:w-1/4 lg:h-200"
    >
      <ProgressRadial class=" p-10 mx-auto my-0" />
    </div>
  {/if}
</main>
<Footer />
