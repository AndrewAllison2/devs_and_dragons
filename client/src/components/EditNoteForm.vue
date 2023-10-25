<template>
  <div class="col-10 mb-4 text-white m-auto">
    <form action="" @submit.prevent="editNote()">
      <div class="mb-2 text-center">
        <label class="mb-2" for="name">Name</label>
        <input class="form-control" type="text" id="name" minlength="3" maxlength="75" v-model="editable.name">
      </div>
      <div class="mb-2 text-center">
        <label class="mb-2" for="body">Body</label>
        <textarea v-model="editable.body" name="body" id="body" cols="50" rows="10"></textarea>
      </div>
      <div class="mb-2 text-center">
        <button type="submit">Update</button>

      </div>
    </form>
  </div>
</template>


<script>
import { ref, watchEffect } from "vue";
import { notesService } from "../services/NotesService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { AppState } from "../AppState.js";
import { useRoute } from "vue-router";
import { Modal } from "bootstrap";

export default {
  setup() {
    const editable = ref({})
    const route = useRoute()

    watchEffect(() => {
      if (AppState.activeNote) {
        const noteToEdit = { ...AppState.activeNote }
        editable.value = noteToEdit
      }
    })

    return {
      editable,


            async editNote() {
        try {
          const formData = editable.value
          const noteId = AppState.activeNote.id
          await notesService.editNote(formData, noteId)
          editable.value = {}
          Modal.getOrCreateInstance('#editNote').hide()
          logger.log('sending to service')
        } catch (error) {
          Pop.error(error.message)
          logger.log(error.message)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>