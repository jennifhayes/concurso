<script>
  export let score, isQuizActive;

  const handleRestart = () => {
    score = 0;
    isQuizActive = true;
  };
</script>

<div class="container">
  <div>
    <h3>And your final score is,</h3>
    <span>
      {score}/10
    </span>
  </div>

  <button class="btn" on:click={handleRestart}>Restart quiz</button>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 2em;
  }

  h3,
  span {
    display: block;
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    color: #060813;
  }
</style>
