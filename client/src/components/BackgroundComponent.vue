<template>
  <div class="container-fluid">
    <div class="row">
      <div v-if="background?.url.includes('backgrounds')">

        <div v-if="background?.starting_proficiencies">
          Starting Proficiencies:
          <ul>
            <li v-for="b in background.starting_proficiencies" :key="b.index">{{ b.name }}</li>
          </ul>
        </div>
        <div v-if="background.language_options">
          Choose {{ background.language_options.choose }} Languages
        </div>
        <div v-if="background?.starting_equipment">
          Starting Equipment: <span v-for="b in background.starting_equipment" :key="b.index">{{ b.equipment.name
          }}</span>
        </div>



      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";

export default {
  setup() {
    return {
      background: computed(() => AppState.selectedResult)
    }
  }
}
</script>


<style lang="scss" scoped></style>