<script>
  export let card, selectedOption;
</script>

<section>
  <article>
    <span>{card.word}</span>
  </article>

  <div class="options-container">
    {#each [card.meaning, ...card.options].toSorted() as option (option)}
      <button
        class="option"
        style="background-color: {selectedOption === option
          ? '#f97316'
          : 'transparent'}; color: {selectedOption === option ? '#f3f3f3' : '#151515'}"
        on:click={() => (selectedOption = option)}
      >
        {option}
      </button>
    {/each}
  </div>
</section>

<style>
  section {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3em;
    width: 100%;
  }

  article {
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    display: grid;
    place-items: center;
    height: 240px;
    width: 240px;
    background-color: #f3f3f3;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
      var(--tw-shadow);
    cursor: pointer;
    border-radius: 0.75em;
    transition: transform 300ms ease-in;
  }

  article:hover {
    transform: translateY(-8px);
  }

  span {
    font-size: 2.2rem;
    color: #313131;
    font-weight: 600;
  }

  .options-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1em;
    width: 80%;
  }

  .option {
    border: 2px solid #f97316;
    padding: 5px;
    border-radius: 0.5em;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    outline: none;
  }
</style>
