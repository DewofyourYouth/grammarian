<script>
  import SvelteMarkdown from "svelte-markdown";
  import { speakers } from "../../store";
</script>

<h1>Grammarian Report</h1>
{#if $speakers.length}
  {#each $speakers as speaker}
    <section>
      <h2>{speaker.name}</h2>
      <hr />
      <p><strong>Um Count:</strong> {speaker.ums}</p>
      <SvelteMarkdown source={speaker.notes} />
    </section>
  {/each}
{/if}

<style>
  h2 {
    font-size: 3rem;
    margin-bottom: 0;
  }
</style>
