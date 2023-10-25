<template>
  <div v-if="magicItems?.url.includes('magic-items')" class="container-fluid">
    <div class="row">
      <div>
        Category: {{ magicItems?.equipment_category.name }}
      </div>
      <div>
        Rarity: {{ magicItems?.rarity.name }}
      </div>
      <div v-if="magicItems?.desc.length > 0">
        Description: <span v-for="(m, index) in magicItems?.desc" :key="index">{{ m }}</span>
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
      magicItems: computed(() => AppState.selectedResult)
    }
  }
}
</script>


<style lang="scss" scoped></style>