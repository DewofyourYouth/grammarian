<script>
  import Counter from "../Counter.svelte";

  /**
   * @type {string}
   */
  export let name;
</script>

<h3>"Um" Counter for {name}</h3>
<Counter />
