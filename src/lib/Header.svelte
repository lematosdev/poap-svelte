<script lang="ts">
  import { AppBar, drawerStore } from "@skeletonlabs/skeleton";

  function drawerOpen(): void {
    drawerStore.open();
    //open
  }
</script>

<AppBar background="bg-black py-1">
  <svelte:fragment slot="lead">
    <a href="https://nftforworld.com/"
      ><img
        class="img-logo sm:pl-32 md:pl-1 lg:pl-32"
        src="https://nftforworld.com/wp-content/uploads/2021/08/Diseno-sin-titulo-8.png"
        alt="logo"
      /></a
    >
  </svelte:fragment>
  <svelte:fragment slot="trail">
    <nav class="hidden sm:block sm:pr-20 md:pr-1 lg:pr-20">
      <a href="https://nftforworld.com/">Inicio</a>
      <a href="https://nftforworld.com/contact-us/">Contáctanos</a>
      <a href="https://nftforworld.com/consulta-poap/">Consulta POAP</a>
      <a href="https://nftforworld.com/links/">Links</a>
    </nav>
    <button
      on:click={drawerOpen}
      class="active:bg-gray-800 block sm:hidden p-3 rounded"
    >
      <div class="space-y-2">
        <div class="w-8 h-0.5 bg-gray-400" />
        <div class="w-8 h-0.5 bg-gray-400" />
        <div class="w-8 h-0.5 bg-gray-400" />
      </div>
    </button>
  </svelte:fragment>
</AppBar>

