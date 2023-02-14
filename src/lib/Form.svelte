<script lang="ts">
  import { chartsData, loading } from '../store';
  import getData from '../utils/getData';

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

<form
  class="flex flex-col items-center justify-center bg-violet-800 text-violet-50 rounded-xl p-8 shadow-lg sm:w-1/2"
  on:submit|preventDefault={handleSubmit}
>
  <span class="text-center text-2xl sm:text-4xl">
    INGRESA EL ID DEL EVENTO
  </span>
  <input
    type="number"
    id="id"
    name="eventId"
    required
    class="sm:w-1/3 my-7 text-xl placeholder:text-gray-800 text-gray-800 bg-violet-100 text-center border focus:outline-none focus:shadow-outline"
    placeholder="Escribe tu ID"
    on:wheel={(e) => e.currentTarget.blur()}
  />

  <div class="checkbox mb-3">
    <!-- The following line controls and configures the Turnstile widget. -->
    <div
      class="cf-turnstile"
      data-sitekey="0x4AAAAAAAB_vYWBkjgVuXCq"
      data-theme="light"
    />
    <!-- end. -->
  </div>

  <button
    class="btn btn-filled-surface btn-base sm:btn-base text-white bg-purple font-bold"
    >Enviar</button
  >
</form>
