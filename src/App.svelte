<script>
  import QuizScreen from "./components/QuizScreen.svelte";
  import EndScreen from "./components/EndScreen.svelte";

  let score = 0,
    isQuizActive = true;
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main>
  {#if isQuizActive}
    <QuizScreen bind:score bind:isQuizActive />
  {:else}
    <EndScreen bind:score bind:isQuizActive />
  {/if}
</main>

<style>
  main {
    display: grid;
    place-items: center;
    min-height: 100dvh;
    background-color: #e9e9e9;
    padding: 1.5em;
  }
</style>
