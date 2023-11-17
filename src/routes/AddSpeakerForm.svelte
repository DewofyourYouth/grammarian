<script>
  let name = "";
  import { speakers } from "../store";

  function addSpeaker() {
    if (name) {
      $speakers = [...$speakers, { name, ums: 0, notes: "" }];
    }
    name = "";
  }
</script>

<form on:submit|preventDefault={addSpeaker}>
  <input bind:value={name} />
  <button class="btn btn-primary" type="submit">add a speaker</button>
</form>
