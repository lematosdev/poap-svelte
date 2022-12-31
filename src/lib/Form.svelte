<script lang="ts">
  import { chartsData, loading } from '../store';
  import getData from '../utils/getData';
  import Charts from './Charts.svelte';

  const handleSubmit = async (
    event: Event & {
      currentTarget: EventTarget & HTMLFormElement;
    }
  ) => {
    $loading = true;
    const formData = new FormData(event.currentTarget);
    const eventId = formData.get('eventId');
    const data = await getData(eventId as string);
    $chartsData = data;
    $loading = false;
  };
</script>

{#if $chartsData}
  <div class="flex items-center justify-center flex-col ">
    <button
      class="text-white shadow-md rounded-xl p-6"
      on:click={() => ($chartsData = null)}
    >
      Volver
    </button>
    <Charts />
  </div>
{:else}
  <form
    class="flex flex-row items-center justify-center"
    on:submit|preventDefault={handleSubmit}
  >
    <div
      class="bg-slate-300 text-gray-800 rounded-xl p-10  shadow-lg  drop-shadow-2xl "
    >
      <div class="flex flex-initial m-5">
        <h1>Ingresa el ID del evento</h1>
      </div>
      <input
        type="number"
        id="id"
        name="eventId"
        class="h-12 my-5 px-3 text-lg text-white border focus:outline-none focus:shadow-outline"
        placeholder="Escribe tu ID"
        on:wheel={(e) => e.currentTarget.blur()}
      />
      <div class="flex items-center justify-center">
      <button class="btn btn-filled-surface btn-lg text-white">Enviar</button>
    </div>
    </div>
  </form>
{/if}

<style>
  .toast {
    background-color: red;
  }
</style>