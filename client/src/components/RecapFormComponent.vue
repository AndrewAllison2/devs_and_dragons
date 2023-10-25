<template>
  <div class="col-10 mb-4 text-white m-auto">
    <form action="" @submit.prevent="createRecap()">
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
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
import { notesService } from "../services/NotesService.js";
import Pop from "../utils/Pop.js";
import { Modal } from "bootstrap";
import { router } from "../router.js";

export default {
  setup() {
    const editable = ref({})
    const route = useRoute()

    return {
      editable,

      async createRecap() {
        try {
          const formData = editable.value
        formData.campaignId = route.params.campaignId
          formData.accountId = AppState.account.id
        formData.isRecap = true
          const recap = await notesService.createRecap(formData)
          editable.value = {}
        // router.push({name: 'notes', params: {noteId: recap.id}})
          Modal.getOrCreateInstance('#createRecap').hide()
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