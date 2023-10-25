<template>
  <div class="col-10 mb-4 text-white m-auto">
    <form action="" @submit.prevent="createNote()">
      <div class="mb-2 text-center">
        <label class="mb-2" for="name">Name</label>
        <input class="form-control" type="text" id="name" minlength="3" maxlength="75" v-model="editable.name">
      </div>
      <div class="mb-2 text-center">
        <label class="mb-2" for="body">Body</label>
        <textarea v-model="editable.body" name="body" id="body" cols="50" rows="10"></textarea>
      </div>
      <div class="mb-2 text-center">
        <button type="submit">Create</button>

      </div>
    </form>
  </div>
</template>


<script>
import { ref } from "vue";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { notesService } from "../services/NotesService.js";
import { useRoute } from "vue-router";
import { Modal } from "bootstrap";
import { AppState } from "../AppState.js";
import { router } from "../router.js";

export default {
  setup() {
    const editable = ref({})
    const route = useRoute()


    return {
      editable,

      async createNote() {
        try {
          const noteData = editable.value
          noteData.campaignId = route.params.campaignId
          noteData.accountId = AppState.account.id
          await notesService.createNote(noteData)
          editable.value = {}
          Modal.getOrCreateInstance('#createNote').hide()
          
        } catch (error) {
          Pop.error(error.message)
          logger.log(error.message)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped></style>