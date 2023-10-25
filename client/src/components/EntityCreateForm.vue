<template>
  <form @submit.prevent="createEntity">
    <div class="mb-3">
      <label for="name" class="form-label">Entity Name</label>
      <input v-model="editable.name" type="text" class="form-control" id="name" minlength="1" maxlength="35" required>
    </div>
    <div class="mb-3">
      <label for="imgUrl" class="form-label">Entity Image</label>
      <input v-model="editable.imgUrl" type="url" class="form-control" id="imgUrl" minlength="3" maxlength="250" required>
    </div>
    <div class="mb-3">
      <label for="type">Type: Select One</label>
      <select class="form-control" v-model="editable.type">
        <option class="text-capitalize" v-for="t in types" :key="t" :value="t">{{ t }}</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="desc" class="form-label">Entity Description</label>
      <textarea v-model="editable.desc" class="form-control" aria-label="entityDescription" required
        placeholder="Leave a brief description here"></textarea>
    </div>
    <div class="mb-3">
      <label for="body" class="form-label">Entity Body</label>
      <textarea v-model="editable.body" class="form-control" aria-label="entityBody" required cols="30" rows="10"
        placeholder="Tell us about your Entity"></textarea>
    </div>
    <button type="submit" class="btn btn-primary" title="Submit">Submit</button>
  </form>
</template>


<script>
import { ref } from 'vue';
import { entityService } from '../services/EntityService.js';
import { Modal } from 'bootstrap';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import { router } from '../router.js';

export default {
  setup() {

    const editable = ref({})
    const entityData = editable.value

    return {
      editable,
      types: ['character', 'location', 'quest', 'magic item', 'equipment', 'npc', 'monster'],
      async createEntity() {
        try {
          if (!AppState.account.id) {
            throw new Error('Login required to Create Event')
          }
          const account = await entityService.createEntity(entityData)
          router.push({ name: 'Account', params: { accountId: account.id } })
          editable.value = {}
          Modal.getOrCreateInstance('#createEntityModal').hide()
        } catch (error) {
          Pop.success('Created Entity')
        }
      }
    }

  }
}
</script>


<style lang="scss" scoped></style>