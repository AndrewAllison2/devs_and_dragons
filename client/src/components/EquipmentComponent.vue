<template>
  <div v-if="equipment?.url.includes('equipment')" class="container-fluid">
    <div class="row">
      <div v-if="equipment?.damage">
        Damage Die: {{ equipment.damage.damage_dice }}
      </div>
      <div v-if="equipment?.range">
        Range: {{ equipment.range.normal }}<span v-if="equipment.weapon_range == 'Ranged'">/{{ equipment.range?.long
        }}</span> Feet
      </div>
      <div v-if="equipment?.vehicle_category">
        {{ equipment.vehicle_category }}
      </div>
      <div v-if="equipment?.speed">
        Speed: {{ equipment.speed.quantity }} {{ equipment.speed.unit }}
      </div>
      <div v-if="equipment?.properties.length > 0">
        {{ equipment?.name }} properties: <span v-for="e in equipment.properties" :key="e.name"> {{ e.name }}, </span>
      </div>
      <div v-if="equipment?.armor_category">
        {{ equipment.armor_category }} <span v-if="equipment.armor_category != 'Shield'">Armor</span>
      </div>
      <div v-if="equipment?.armor_class">
        AC: {{ equipment.armor_class.base }},
        Dex Bonus: {{ equipment.armor_class.dex_bonus }},
        <span v-if="equipment.armor_class?.max_bonus">Max Bonus: {{ equipment.armor_class.max_bonus }}</span>
      </div>
      <div v-if="equipment?.stealth_disadvantage">
        Stealth Disadvantage: {{ equipment.stealth_disadvantage }}
      </div>
      <div v-if="equipment?.category_range">
        {{ equipment.category_range }}
      </div>
      <div>
        Cost: {{ equipment?.cost.quantity }}{{ equipment?.cost.unit }}
      </div>
      <div v-if="equipment?.weight">
        Item Weight: {{ equipment?.weight }} <span v-if="equipment.weight <= 1">lb.</span> <span v-else>lbs.</span>
      </div>
      <div v-if="equipment?.desc.length > 0">
        Description: <span v-for="(e, index) in equipment?.desc" :key="index">{{ e }}</span>
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
      equipment: computed(() => AppState.selectedResult)
    }
  }
}
</script>


<style lang="scss" scoped></style>