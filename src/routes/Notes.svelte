<script>
  import { speakers } from "../store";
  /***
   * @typedef {Object} Speaker
   * @property {string} name - The speaker's name
   * @property {number} ums - The amount of time the speaker uses ums or filler words.
   * @property {string} notes - Notes on the speakers grammar and use of the English language
   */

  /**
   * @type {Speaker}
   */
  export let speaker;
  function saveSpeakerData() {
    console.log(speaker);
    $speakers = $speakers.map((s) =>
      s.name === speaker.name ? { ...speaker } : { ...s }
    );
    alert(`Saved data for speaker ${speaker.name}`);
  }
</script>

<h4>Notes (markdown supported)</h4>
<hr />
<div
  class="speaker-notes"
  bind:innerText={speaker.notes}
  id={`${speaker.name}-notes`}
  contenteditable="true"
/>
<button class="btn btn-primary" on:click={saveSpeakerData}>Save</button>
<button
  class="btn btn-danger"
  on:click={() =>
    ($speakers = $speakers.filter((s) => s.name !== speaker.name))}
  >Delete Speaker</button
>

<style>
  .speaker-notes {
    border: 2px cornflowerblue solid;
    padding: 10px;
    width: 300px;
    min-height: 120px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
</style>
