<script>
  import { shuffle, cardStore } from "../store";
  import FlashCard from "./FlashCard.svelte";
  export let score, isQuizActive;

  let currentCardIndex = 0,
    selectedOption = null,
    correctSound = new Audio("/sounds/correct-choice.mp3"),
    incorrectSound = new Audio("/sounds/failure-drum.mp3"),
    cards;

  $: progressWidth = 10 * (currentCardIndex + 1);

  cardStore.subscribe((data) => (cards = shuffle(data).slice(0, 10)));

  const handleCheck = () => {
    if (cards[currentCardIndex].meaning === selectedOption) {
      score += 1;

      if (correctSound) correctSound.play();
    } else {
      if (incorrectSound) incorrectSound.play();
    }

    selectedOption = null;

    if (currentCardIndex === cards.length - 1) {
      currentCardIndex = 0;
      isQuizActive = false;
    }

    currentCardIndex += 1;
  };
</script>

<section class="container">
  <header>
    <h2>Concurso</h2>

    <div role="progressbar">
      <div />
      <div style="width: {`${progressWidth}%`}" />
    </div>
  </header>

  <p>
    What does the following
    <br />
    word mean?
  </p>

  <div class="flashcard-container">
    <FlashCard card={cards[currentCardIndex]} bind:selectedOption />
  </div>

  <button class="btn" on:click={handleCheck} disabled={selectedOption === null}>
    Check
  </button>
</section>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 3em;
    width: 100%;
    max-width: 500px;
    border: 2px solid #cbd5e1;
    padding-inline: 1.5em;
    padding-block: 3em;
    border-radius: 0.75em;
  }

  header h2 {
    margin-bottom: 0.5em;
    color: #181b2e;
    font-size: 1.25em;
    text-transform: uppercase;
    font-weight: 600;
  }

  div[role="progressbar"] {
    height: 6px;
    position: relative;
    border-radius: 1em;
    overflow: hidden;
  }

  div[role="progressbar"] > div {
    position: absolute;
    height: 6px;
  }

  div[role="progressbar"] > div:nth-child(1) {
    width: 100%;
    background-color: #cfcfcf;
  }

  div[role="progressbar"] > div:nth-child(2) {
    width: 100%;
    background-color: #f97316;
    border-radius: 1em;
    transition: width 300ms ease-out;
  }

  p {
    font-size: 1.125em;
    font-weight: 600;
    color: #383838;
    text-align: center;
    line-height: 1.085;
  }

  .flashcard-container {
    display: flex;
    justify-content: center;
  }
</style>
