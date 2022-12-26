<script lang="ts">
  import { chartsData } from '../store';
  import getData from '../utils/getData';

  const handleSubmit = async (
    event: Event & {
      currentTarget: EventTarget & HTMLFormElement;
    }
  ) => {
    const formData = new FormData(event.currentTarget);
    const eventId = formData.get('eventId');
    const data = await getData(eventId as string);
    $chartsData = data;
  };

  
</script>

<form
  class="flex items-center justify-center"
  on:submit|preventDefault={handleSubmit}
>
  <label class="mr-8 bg-red-500" for="id">Event ID</label>
  <input
    type="number"
    id="id"
    name="eventId"
    on:wheel={(e) => e.currentTarget.blur()}
  />
</form>
