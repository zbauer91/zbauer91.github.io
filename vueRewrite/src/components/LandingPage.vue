<template>
  <div id='flashpoint'>
    <div class='centered-title'>
      <div class='name-header'>
        Zach Bauer
      </div>
      <div class='sub-header'>
        &lt;Classy Web Developer/&gt;
      </div>
      <a href="/home" class="home-btn">
        <span>Enter</span>
      </a>
    </div>
  </div>
</template>

<script>

</script>

<style>
  #flashpoint {
    height: 95vh;
    width: 95vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .centered-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .name-header {
    font-family: 'Shrikhand', cursive;
    font-size: 130px;
  }

  .sub-header {
    font-family: 'Press Start 2P', cursive;
    font-size: 20px;
  }

  .home-btn {
    /* Flex Options for Span */
    display: flex;
    justify-content: center;
    align-items: center;
    /* Sizing */
    width: 10vw;
    height: 4vh;
    margin-top: 40px;
    /* Decoration */
    border: 3px solid white;
    border-radius: 8px;
    color: white;
    text-decoration: none;
    font-family: 'Roboto';
    font-size: 20px;
    letter-spacing: 3px;
  }

  .home-btn:hover {
    background-color: white;
    color: black !important;
  }

  .home-btn:visited {
    color: white;
  }

  /* For smaller screens, follows vuetify convention */

  @media screen and (max-width: 600px) {
    .name-header {
      font-size: 80px;
    }

    .sub-header {
      font-size: 10px;
    }

    .home-btn {
      margin-top: 20px;
      font-size: 15px;
    }

  }
</style>
