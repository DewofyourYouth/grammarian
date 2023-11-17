<script>
  import SvelteMarkdown from "svelte-markdown";
  import { speakers } from "../../store";
</script>

<h1>Grammarian Notes</h1>
{#if $speakers.length}
  {#each $speakers as speaker}
    <section>
      <h3>{speaker.name}</h3>
      <p><strong>Um Count:</strong> {speaker.ums}</p>
      <SvelteMarkdown source={speaker.notes} />
    </section>
  {/each}
{/if}
