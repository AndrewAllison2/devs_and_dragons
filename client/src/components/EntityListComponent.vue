<template>
  <div class="row">
    <div class="col-10 m-auto">
      <div v-for="e in entities" :key="e.id">
        <div v-if="evaluateEntityLink(e.id) == false" class="card elevation-4 mb-3 selectable" @click="createEntityCampaignLink(e.id)">
          <div class="d-flex justify-content-between align-items-center p-2">
            <img class="entity-img" :src="e.imgUrl" :alt="e.name" :title="e.name">
            <h5>{{ e.name }}</h5>
            <div v-if="e.creatorId != account.id">
              <i class="mdi mdi-star-outline fs-4"></i>
            </div>
            <div v-else>
              <i class="mdi mdi-star text-warning fs-4" title="My Entity"></i>
            </div>
          </div>
          
            
          
          <div class="text-center">
            <p>{{ e.desc }}</p>
          </div>
        </div>

        <div v-else>
          <div class="card elevation-4 mb-3 bg-secondary" title='This entity is already a part of your world!' >
          <div class="d-flex justify-content-between align-items-center p-2">
            <img class="entity-img" :src="e.imgUrl" :alt="e.name" :title="e.name">
            <h5>{{ e.name }}</h5>
            <div v-if="e.creatorId != account.id">
              <i class="mdi mdi-star-outline fs-4"></i>
            </div>
            <div v-else>
              <i class="mdi mdi-star text-warning fs-4"></i>
            </div>
          </div>
          <div class="text-center">
            <p>{{ e.desc }}</p>
          </div>
        </div>
        </div>
      </div>

    </div>
  </div>
</template>


<script>
import { computed, onMounted } from "vue";
import { entityService } from "../services/EntityService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { AppState } from "../AppState.js";
import { useRoute } from "vue-router";
import { entitiesCampaignLinkService } from "../services/EntitiesCampaignLinkService.js";
import { Modal } from "bootstrap";

export default {
  setup() {
    const route = useRoute()


    return {
      entities: computed(() => AppState.entities),
      account: computed(()=> AppState.account),


      evaluateEntityLink(entityId) {
        let isTrue = false
        for (let i = 0; i < AppState.entityLinks.length; i++) {
          if (AppState.entityLinks[i].entityId == entityId) {
            isTrue = true
          }
        }
        return isTrue
      },


      async createEntityCampaignLink(entityId) {
        try {
          if (await Pop.confirm('Add this entity to your campaign?')) {
            const activeCampaign = route.params.campaignId
            const linkData = { campaignId: activeCampaign, entityId: entityId }
            await entitiesCampaignLinkService.createEntityCampaignLink(linkData)
            Modal.getOrCreateInstance('#addEntity').hide()
          }
          return
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
.entity-img {
  height: 7vh;
  width: 7vh;
  border-radius: 50%;
}
</style>