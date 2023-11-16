<script>
  let name = "";
  import { speakers } from "../store";

  function addSpeaker() {
    if (name) {
      $speakers = [...$speakers, name];
    }
    name = "";
  }
</script>

<form on:submit|preventDefault={addSpeaker}>
  <input bind:value={name} />
  <button type="submit"> Add Speaker</button>
</form>
