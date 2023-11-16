<script>
  import Counter from "./Counter.svelte";

  /**
   * @type {string}
   */
  export let name;
</script>

<div class="speaker" id={`${name}-speaker`}>
  <div class="speaker-name">
    <h4>Speaker:</h4>
    <h2>{name}</h2>
  </div>
  <div class="counter">
    <h3>"Um" Counter</h3>
    <Counter />
  </div>
</div>

<style>
  .speaker {
    display: flex;
    gap: 20px;
  }
  .speaker-name > h4 {
    padding-bottom: 0;
    margin-bottom: 0;
  }
  .speaker-name > h2 {
    font-size: 2rem;
    margin-top: 10px;
  }

  .counter {
    text-align: center;
  }
</style>
