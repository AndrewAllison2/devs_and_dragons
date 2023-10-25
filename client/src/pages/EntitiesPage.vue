<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-11 mt-4 m-auto">
        <div class="mt-3 card rounded-3 text-light entityCard elevation-5">
          <div class="p-3 d-flex justify-content-between">
            <div class="d-flex align-items-center">
              <h5>Type: </h5>
              <h3 class="ps-3">{{ entityLink?.Entity.type }}</h3>
            </div>

            <div v-if="activeCampaign?.creatorId == account?.id">
              <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" :checked="activeEntity?.isPrivate == true" @click="makeEntityPrivate()">
                  <label class="btn btn-outline-warning" for="btnradio1">Private</label>
      
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" :checked="activeEntity?.isPrivate == false" @click="makeEntityPublic()">
                  <label class="btn btn-outline-success" for="btnradio2">Public</label>
                </div>

                <div>
                  <button class="btn btn-outline-danger delete-button" @click="removeEntityCampaignLink()">Remove Entity</button>
                </div>
            </div>
          </div>
  
          <div class="m-auto">
            <div class="text-center">
              <h2 class="ms-2 text-decoration-underline"> {{ entityLink?.Entity.name }}</h2>
            </div>
            <div class="text-center mt-5">
              <h4 class="ms-2 text-decoration-underline">Description: </h4>
              <p class="ms-2"> {{ entityLink?.Entity.desc }}</p>
            </div>
          </div>

            <div class="row">
              <div class="col-10 text-center mt-5 m-auto">
                <h5 class="ms-2 text-decoration-underline">Information: </h5> 
                <p>{{ entityLink?.Entity.body }}</p>
              </div>
            </div>
          <div class="col-10 mt-5 m-auto pb-5">
            <img class="img-fluid entityImg rounded-5" :src="entityLink?.Entity.imgUrl">
          </div>
      </div>
</div>
  </div>
  </div>
</template>


<script>
import { computed, onMounted, watchEffect } from "vue";
import { useRoute } from "vue-router";
import Pop from "../utils/Pop.js";
import { entityService } from "../services/EntityService.js";
import { logger } from "../utils/Logger.js";
import { Entity } from "../models/Entity.js";
import { AppState } from "../AppState.js";
import { entitiesCampaignLinkService } from "../services/EntitiesCampaignLinkService.js";
import { router } from "../router.js";

export default {
  setup() {
    const route = useRoute()
    watchEffect(() => {
      if (route.params.entityId) {
        getEntityLinkById()
      }
    })


    // const route = useRoute()

    onMounted(() => {
      getEntityLinkById()
    })
    async function getEntityLinkById() {

      try {
        const entityLinkId = route.params.entityId
        await entitiesCampaignLinkService.getEntityLinkById(entityLinkId);
        // logger.log('entity data')
      }
      catch (error) {
        Pop.error(error.message)
      }
    }

    return {
      entityLink: computed(() => AppState.ActiveEntityLink),
      activeCampaign: computed(() => AppState.activeCampaign),
      account: computed(() => AppState.account),
      activeEntity: computed(() => AppState.ActiveEntityLink),


        async makeEntityPrivate() {
          try {
            const entity = AppState.ActiveEntityLink
            const entityLinkId = entity.id
          await entitiesCampaignLinkService.makeEntityPrivate(entity, entityLinkId)
          } catch (error) {
            Pop.error(error.message)
            logger.log(error.message)
          }
      },

      async makeEntityPublic() {
        try {
          const linkData = AppState.ActiveEntityLink
            const entityLinkId = linkData.id
          await entitiesCampaignLinkService.makeEntityPublic(linkData, entityLinkId)
        } catch (error) {
          Pop.error(error.message)
          logger.log(error.message)
        }
      },

      async removeEntityCampaignLink() {
        try {
          if (await Pop.confirm('Are you sure you want to delete this entity from your campaign?')) {
            const entityId = AppState.ActiveEntityLink.id
            await entitiesCampaignLinkService.removeEntityCampaignLink(entityId)
            router.push({name: 'ActiveCampaign', params: {campaignId: this.activeCampaign.id}})
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
.entityCard {
  background-color: rgba(88, 72, 72, 0.438);
  border: 1px double rgb(255, 203, 203);
  box-shadow: 3px 1px 5px rgba(255, 255, 255, 0.616);
  margin-bottom: 2em;
}

.entityImg {
  width: 100%;
  height: 40vh;
  object-fit: contain;
  
}

.delete-button{
  width: 9em;
}
</style>