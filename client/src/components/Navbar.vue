<template>
  <nav class="text-shadow navbar navbar-expand-lg sticky-top navbar-dark bg-dark p-3 ">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center m-2">

        <img class="p-1" alt="logo"
          src="https://www.pngkey.com/png/full/141-1413460_en-world-rpg-news-reviews-d-d-logo.png" height="60" />
      </div>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto ">
        <li>
          <router-link :to="{ name: 'Campaign' }" class="btn lighten-30 selectable text-uppercase nav-shadow">
            Campaigns
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Account' }" class="btn lighten-30 selectable text-uppercase nav-shadow">
            Account
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }" class="btn lighten-30 selectable text-uppercase  nav-shadow">
            About
          </router-link>
        </li>

      </ul>

      <div>
        <Login />
      </div>
    </div>
  </nav>
</template>

<script>
import { computed } from 'vue';
import Login from './Login.vue';
import { AppState } from '../AppState.js';
export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  },
  components: { Login }
}
</script>

<style scoped>
.navbar {
  background-image: linear-gradient(rgba(69, 61, 61, 0.5), rgb(144, 6, 6));
  box-shadow:
    inset 0 0 20px 7px #b44512b6,
    inset 0 2px 10px 2px #ecd718,
    4px 0 10px 2px #f06718,
    0 3px 100px 5px #83d1cd;
}



.text-shadow {
  color: rgb(228, 41, 41);
  text-shadow: 1px 1px 4px rgb(150, 109, 117);
}

.nav-shadow {
  color: rgb(227, 227, 227);
  text-shadow: 1px 1px 4px rgb(150, 109, 117);
}


a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
  font-weight: bold;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}
</style>
