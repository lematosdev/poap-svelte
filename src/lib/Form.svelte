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
  <div class="flex items-center justify-center flex-col">
    <button
      class="text-white shadow-md rounded-xl p-6"
      on:click={() => ($chartsData = null)}
    >
      Go back
    </button>
    <Charts />
  </div>
{:else}
  <form
    class="flex flex-row items-center justify-center"
    on:submit|preventDefault={handleSubmit}
  >
    <div class="bg-slate-300 shadow-md rounded-xl p-10">
      <label
        class="text-gray-800 mr-8 block text-center w-full font-bold text-2xl"
        for="id">Event ID</label
      >
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
