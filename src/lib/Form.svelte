<script lang="ts">
  import { chartsData, loading } from '../store';
  import getData from '../utils/getData';
  import Charts from './Charts.svelte';
  import { Avatar } from '@skeletonlabs/skeleton';

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
    <div class="bg-slate-800  rounded-xl p-10  shadow-lg  drop-shadow-2xl " >
   <!--    <label
        class="text-gray-800 mr-8 block text-center w-full font-bold text-2xl"
        for="id">Event ID</label
        shadow-slate-500/50
      > -->
      <div class="flex flex-initial m-5">
        <Avatar class="mr-6" src="https://i.imgur.com/SN52NFi.png"/>
      <h1> ID del Evento</h1>
    </div>
      <input
        type="number"
        id="id"
        name="eventId"
        class="h-8 my-5 px-3 text-white border focus:outline-none focus:shadow-outline"
        placeholder="Enter Event ID"
        on:wheel={(e) => e.currentTarget.blur()}
      />
    </div>
  </form>
{/if}
