<template>
  <div class="text-light text-center">
    <h2 class="mt-3">Description</h2>
    <p class="mt-2">{{ campaign?.desc }}</p>
  </div>
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";

export default {
  setup() {


    return {
      campaign: computed(() => AppState.activeCampaign)
    }
  }
}
</script>


<style lang="scss" scoped></style>