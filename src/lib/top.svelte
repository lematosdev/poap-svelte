<script>
  import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar background="bg-black">
  <svelte:fragment slot="lead">
    <a href="https://nftforworld.com/"
      ><img
        class="img-logo"
        src="https://nftforworld.com/wp-content/uploads/2021/08/Diseno-sin-titulo-8.png"
        alt="logo"
      /></a
    >
  </svelte:fragment>
  <svelte:fragment slot="trail">
    <nav>
      <a href="https://nftforworld.com/">Inicio</a>
      <a href="https://nftforworld.com/contact-us/"
        >Contáctanos</a
      >
      <a href="https://nftforworld.com/consulta-poap/"
        >Consulta POAP</a
      >
      <a href="https://nftforworld.com/links/">Links</a>
    </nav>
  </svelte:fragment>
</AppBar>
