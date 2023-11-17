<script>
  import Counter from "./Counter.svelte";
  import Notes from "./Notes.svelte";
  import SvelteMarkdown from "svelte-markdown";
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
  export let name;
  const speaker = $speakers.find((speaker) => speaker.name === name);
</script>

<div class="speaker" id={`${speaker.name}-speaker`}>
  <div class="speaker-name">
    <h4>Speaker:</h4>
    <h2>{speaker.name}</h2>
    <Counter {speaker} />
  </div>

  <div class="notes-section">
    <Notes {speaker} />
  </div>
  <!-- <div class="preview-section">
    <h3>Preview:</h3>
    <section class="preview-md">
      <SvelteMarkdown
        source={$speakers.find((s) => s.name === speaker.name).notes}
      />
    </section>
  </div> -->
</div>

<style>
  .speaker {
    display: flex;
    gap: 20px;
    justify-content: space-evenly;
    align-items: baseline;
  }
  .speaker-name > h4 {
    padding-bottom: 0;
    margin-bottom: 0;
  }
  .speaker-name > h2 {
    font-size: 2rem;
    margin-top: 10px;
  }
  /* .preview-section {
    text-align: left;
    width: 300px;
  }
  .preview-md {
    border: 2px #555 solid;
    padding: 0 15px;
    border-radius: 10px;
    min-height: 130px;
  }
  .notes-section {
    padding-top: 10px;
  } */
</style>
