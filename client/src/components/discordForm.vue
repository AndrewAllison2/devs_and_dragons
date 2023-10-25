<template>
  <form @submit.prevent="updateDiscord">
    <label for="discord">Discord Link</label>
    <input required v-model="editable.discordLink" type="url" maxlength="500" minlength="30">
    <button type="submit" class="btn btn-success rounded">Submit</button>
  </form>
</template>


<script>
import { ref } from "vue";
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { campaignsService } from "../services/CampaignsService.js";
import { Modal } from "bootstrap";

export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      async updateDiscord() {
        try {
          const formData = editable.value
          await campaignsService.updateDiscord(formData)
          Modal.getOrCreateInstance('#discordUpdate').hide()
        } catch (error) {
          Pop.error(error)
          logger.log()
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped></style>