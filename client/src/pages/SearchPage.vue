<template>
  <div class="row text-white">
    <div class="col-2 p-3 d-flex flex-column align-items-center">
      <img @click="setCategory('equipment')" title="Equipment" class="category selectable"
        :class="{ 'selected-category': selectedCategory == 'equipment' }"
        src="https://i.pinimg.com/1200x/3a/b1/d3/3ab1d372cfd32e131c8c14507b507d83.jpg" alt="">
      <p>Equipment</p>
    </div>
    <div class="col-2 p-3 d-flex flex-column align-items-center">
      <img @click="setCategory('magic-items')" title="Magic Items" class="category selectable"
        :class="{ 'selected-category': selectedCategory == 'magic-items' }"
        src="https://i.pinimg.com/1200x/ca/1d/1e/ca1d1ee3f37af8c0442b7b111d9b5b4a.jpg" alt="">
      <p>Magic Items</p>
    </div>
    <div class="col-2 p-3 d-flex flex-column align-items-center">
      <img @click="setCategory('backgrounds')" title="Backgrounds" class="category selectable"
        :class="{ 'selected-category': selectedCategory == 'backgrounds' }"
        src="https://help-action.com/wp-content/uploads/2023/04/dnd-solider-background-help-action-dot-com-1024x574.png"
        alt="">
      <p>Backgrounds</p>
    </div>
    <div class="col-2 p-3 d-flex flex-column align-items-center">
      <img @click="setCategory('classes')" title="Classes" class="category selectable"
        :class="{ 'selected-category': selectedCategory == 'classes' }"
        src="https://assetsio.reedpopcdn.com/dnd-cleric-images-7.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"
        alt="">
      <p>Classes</p>
    </div>
    <div class="col-2 p-3 d-flex flex-column align-items-center">
      <img @click="setCategory('monsters')" title="Monsters" class="category selectable"
        :class="{ 'selected-category': selectedCategory == 'monsters' }"
        src="https://www.zbrushcentral.com/uploads/default/original/4X/7/3/5/735deac9fbfd9da5365d71407115b850b18c18f7.jpeg"
        alt="">
      <p>Monsters</p>
    </div>
    <div class="col-2 p-3 d-flex flex-column align-items-center">
      <img @click="setCategory('spells')" title="Spells" class="category selectable"
        :class="{ 'selected-category': selectedCategory == 'spells' }"
        src="https://64.media.tumblr.com/e5432b01aa3f6161a3b4fb79a94fe76c/tumblr_inline_pg4s30mnUS1rqrjnu_1280.png"
        alt="">
      <p>Spells</p>
    </div>
  </div>
  <div class="row text-white">
    <div class="col-12">
      <div>

      </div>
      <div v-if="selectedCategory" class="d-flex justify-content-center pt-2">
        <form @submit.prevent="searchDnDApi()">
          <label class="" for="dnd-api">Search:</label>
          <input v-model="filterBy.name" type="search" id="dnd-api" class="rounded">
          <button type="submit" class="btn btn-primary"><i class="mdi mdi-magnify"></i></button>
        </form>
      </div>
    </div>
  </div>
  <div class="row">
    <div v-for="   item    in    searchResults   " :key="item.name" class="col-4">
      <button @click="getSelectedSearch(item.url)" v-if="savedCategory == 'spells'" class="btn btn-outline-dark p-2 m-2 text-center"
        data-bs-toggle="modal" data-bs-target="#spellsSearch">
        <h4 class="text-white">
          {{ item.name }}
        </h4>
      </button>
      <button @click="getSelectedSearch(item.url)" v-if="savedCategory == 'monsters'" class="btn btn-outline-dark p-2 m-2 text-center"
        data-bs-toggle="modal" data-bs-target="#monstersSearch">
        <h4 class="text-white">
          {{ item.name }}
        </h4>
      </button>
      <button @click="getSelectedSearch(item.url)" v-if="savedCategory == 'classes'" class="btn btn-outline-dark p-2 m-2 text-center"
        data-bs-toggle="modal" data-bs-target="#classesSearch">
        <h4 class="text-white">
          {{ item.name }}
        </h4>
      </button>
      <button @click="getSelectedSearch(item.url)" v-if="savedCategory == 'backgrounds'" class="btn btn-outline-dark p-2 m-2 text-center"
        data-bs-toggle="modal" data-bs-target="#backgroundsSearch">
        <h4 class="text-white">
          {{ item.name }}
        </h4>
      </button>
      <button @click="getSelectedSearch(item.url)" v-if="savedCategory == 'magic-items'" class="btn btn-outline-dark p-2 m-2 text-center"
        data-bs-toggle="modal" data-bs-target="#magicItemsSearch">
        <h4 class="text-white">
          {{ item.name }}
        </h4>
      </button>
      <button @click="getSelectedSearch(item.url)" v-if="savedCategory == 'equipment'" class="btn btn-outline-dark p-2 m-2 text-center"
        data-bs-toggle="modal" data-bs-target="#equipmentSearch">
        <h4 class="text-white">
          {{ item.name }}
        </h4>
      </button>
    </div>
  </div>
</template>


<script>
import { computed, onMounted, ref } from "vue";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { dndApiService } from "../services/DnDApiService.js"
import { AppState } from "../AppState.js";

export default {
  setup() {

    const filterBy = ref({ name: '' })
    let selectedCategory = ref(null)
    let savedCategory = ref(null)

    onMounted(() => {
      logger.log(selectedCategory)
    })


    return {
      searchResults: computed(() => AppState.dndApiResults),
      filterBy,
      selectedCategory,
      savedCategory,
      setCategory(category) {
        selectedCategory.value = category

        logger.log(selectedCategory)
      },

      async searchDnDApi() {
        try {
          const formData = filterBy.value

          await dndApiService.searchDnDApi(formData, selectedCategory)
          savedCategory.value = selectedCategory.value

        } catch (error) {
          Pop.error(error.message)
          logger.log(error)
        }
      },
      async getSelectedSearch(url) {
        try {
          await dndApiService.getSelectedSearch(savedCategory, url)
        } catch (error) {
          Pop.error(error.message)
          logger.log(error)
        }
      }

    }
  }
}
</script>


<style lang="scss" scoped>
.category {
  width: 10vh;
  height: 10vh;
  border-radius: 50%;
}

.selected-category {
  box-shadow: 0px 0px 5px 5px aqua;
}
</style>