<template>
  <div class="container-fluid bg-black font">

    <div class="row demon-img">
      <!-- <img class="demon-img img-fluid" src="https://wallpapercave.com/wp/wp2770331.jpg" alt=""> -->
      <div class="col-md-6 col-12 home-card text-shadow p-4 mt-5 rounded elevation-3 info-card-top">
        <h4>
          Devs and Dragons gives you the tools to become a superior Dungeon Master. Create and edit epic campaigns,
          seamlessly coordinate your adventure, and have access to shared knowledge across all the campaigns.
        </h4>
      </div>
    </div>

    <div class="row dice-img">
      <!-- <img class="dice-img img-fluid" src="https://cdn.openart.ai/stable_diffusion/17fd347ca1d954d8a33c3e4eb5511402fdf3a1e7_2000x2000.webp" alt=""> -->
      <div class="col-md-6 col-12 home-card text-shadow p-4 mt-5 rounded elevation-3 info-card1">
        <h4 class="text-center">
          Foucs On The Adventure</h4>
        <p>
          Devs and Dragons' campaign management system gives you control over your campaigns. Search from a list of
          campaigns created by other DM's, or add your own. Important details like the party size and session dates are
          available to help in finding the experience best suited for you, so players and DM's alike can spend less time
          seeking quests and more time exploring their worlds.
        </p>
      </div>

      <div class="col-md-6 col-12 home-card text-shadow p-4 mt-5 rounded elevation-3 info-card2">
        <h4 class="text-center">Share The Knowledge</h4>
        <p>
          In a game where keeping track of information, entities, and abiltites can be the difference between victory and
          defeat, note taking becomes a critical task of the party. The team at Devs and Dragons knows this, and provides
          each player within a campaign a note space. Quickly jot down important locations or the name of a prominent
          character that can be easily referenced at any time by all the party members. Coordinate and share information
          across the party like never before.
        </p>
      </div>
    </div>

    <div class="row horse-img">
      <!-- <img class="img-fluid horse-img" src="https://cdna.artstation.com/p/assets/images/images/000/150/348/large/tony-andreas-rudolph-concept-art34.jpg?1406809665" alt=""> -->
      <div class="col-md-6 col-12 home-card text-shadow p-4 mt-5 rounded elevation-3 info-card3">
        <h4 class="text-center">Retell Your Tales</h4>
        <p>No longer will your adventures be preceded by a retelling of last session's feats. With a dedicated RECAP tab,
          a DM can create and share notes detailing the players' previous antics. Highlight the story points you deem most
          valuable, and allow your party to access them at any time with the click of a button. </p>
      </div>
      <div class="col-md-6 col-12 home-card text-shadow p-4 mt-5 rounded elevation-3 info-card4">
        <h4 class="text-center">Build Your World</h4>
        <p>
          A world is only as interesting as the objects that exist within it. To aid in populating your journey, Devs and
          Dragons allows you to create and save ENTITIES. Create, detail, save, and reference any object you envision
          within your world. Make them public and share them with the party or quickly reference the custom objects that
          stand in their path as the DM during a session. View and track the entities you have designed or browse all of
          the communities creations while searching for inspiration on your next great adventure.
        </p>
      </div>
      <div>

        <router-link :to="{ name: 'Campaign' }">

          <img class="rounded start-button elevation-5" title="To Campaign Page"
            src="https://tse3.mm.bing.net/th?id=OIP.XK5GfaI4mfcNUIQh-yngSQHaDL&pid=Api&P=0&h=220">

        </router-link>
      </div>

    </div>
  </div>
</template>


<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.font {
  font-family: 'Courier New', Courier, monospace;
}

.demon-img {
  background-image: url(https://wallpapercave.com/wp/wp2770331.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 50em;
}

.dice-img {
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-image: url(https://cdn.openart.ai/stable_diffusion/17fd347ca1d954d8a33c3e4eb5511402fdf3a1e7_2000x2000.webp);
  opacity: 75%;
  height: 50em;
}

.horse-img {
  background-image: url(https://cdna.artstation.com/p/assets/images/images/000/150/348/large/tony-andreas-rudolph-concept-art34.jpg?1406809665);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding-left: 0;
  padding-right: 0;
  opacity: 75%;
  height: 50em;
}

.info-card-top {
  position: relative;
  top: 9em;
  left: 23em;
  height: 12em;
}

.info-card1 {
  position: relative;
  top: -13em;
  right: -2em;
  height: 14em;
}

.info-card2 {
  position: relative;
  top: 11em;
  left: -3em;
  height: 16em;
  opacity: 100%;
}

.info-card3 {
  position: relative;
  top: -11em;
  left: 3em;
  height: 13em;
  opacity: 100%;
}

.info-card4 {
  position: relative;
  top: 13em;
  left: -3em;
  height: 18em;
  opacity: 100%;
}

.start-button {
  position: relative;
  top: 8em;
  left: 39em;
  height: 10vh;
  width: 30vh;
}

.home {
  display: grid;
  place-content: center;
  text-align: center;
  user-select: none;
}

.home-card {
  background-color: rgba(0, 0, 0, .808);
  border-radius: 5px;
  box-shadow: 3px 3px rgb(219, 215, 219);
}

.text-shadow {
  color: rgb(228, 41, 41);
  text-shadow: 1px 1px 4px rgb(150, 109, 117);
}

p {
  color: rgb(255, 255, 255);
  text-shadow: 1px 1px 4px rgb(150, 109, 117);
}

@media screen and (max-width: 769px) {
  .info-card-top {
    position: relative;
    top: 1em;
    left: 17px;
    height: 21em;
    width: 90%;
  }

  .info-card1 {
    position: relative;
    top: -21em;
    right: -1em;
    height: 26em;
    width: 90%;
  }

  .info-card2 {
    position: relative;
    top: -19em;
    left: 1em;
    height: 30em;
    width: 90%;
  }

  .info-card3 {
    position: relative;
    top: -6em;
    left: 1em;
    height: 22em;
    width: 90%;
  }

  .info-card4 {
    position: relative;
    top: -6em;
    left: 1em;
    height: 35em;
    width: 90%;
  }

  .start-button {
    position: relative;
    top: -4em;
    left: 5em;
  }

  .horse-img {
    height: 70em;
  }
}</style>
