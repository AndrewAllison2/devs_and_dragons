<template>
  <div class="container-fluid background">
    <!-- SECTION links, join us, title, and session date -->
    <div class="row">
      <!-- STUB Discord Link -->
      <div class="col-md-2 col-12 d-flex align-items-center">
        <div v-if="campaign?.discordLink">
          <a :href="campaign?.discordLink">
            <img class="discord"
              src="https://logo.com/image-cdn/images/kts928pd/production/5b24e49fd89287ff1eb5bbc4cf93cb038c3384ef-512x512.png?w=1080&q=72"
              alt="">
          </a>
        </div>
        <div v-else-if="campaign?.creatorId == account.id">
          <img data-bs-toggle="modal" data-bs-target="#discordUpdate" class="discord selectable" title="Update Discord"
            src="https://static.vecteezy.com/system/resources/previews/011/912/003/original/plus-sign-icon-free-png.png"
            alt="">
        </div>
      </div>
      <!-- STUB  Title and session date-->
      <div class="col-md-8 col-12">
        <div class="text-white text-center d-flex flex-column align-items-center pt-3">
          <h1>{{ campaign?.name }}</h1>
          <h2 v-if="campaign?.isArchived == false">Next Session Date: {{ formattedDate }}
          </h2>
          <h2 v-else class="text-warning">This Adventure Has Ended</h2>
        </div>
      </div>
      <!-- STUB Join us/ add character -->
      <div class="col-md-2 col-12 d-flex justify-content-center align-items-center">
        <button v-if="campaign?.creatorId != account.id && !hasLink && campaign?.isArchived == false"
          class="btn btn-outline-danger" :hidden="hasLink || campaign?.partyCount >= campaign?.capacity || !account.id"
          @click="createAccountLink()">Join Us!</button>
        <button v-if="campaign?.creatorId == account.id && campaign?.isArchived == false" @click="archiveCampaign()"
          class="btn btn-outline-info">Delete Campaign</button>
      </div>
    </div>
    <!-- SECTION players -->

    <div class="row">
      <div class="col-12 d-flex justify-content-around p-4">
        <div v-for="links in accountLinks" :key="links.id">
          <img class="player-avatar img-fluid" :src="links.Profile?.picture" :alt="links.Profile.name"
            :title="links.Profile.name">
        </div>
      </div>
    </div>

    <!-- SECTION (image?), main body, information section -->
    <div class="row">
      <!-- STUB picture/chatbox reservation -->
      <div class="col-2 order-0">

      </div>
      <!-- STUB child routing section -->
      <div class="col-12 col-md-7 rounded elevation-5 child-field order-2 order-md-1">
        <div>
          <router-view>

          </router-view>
        </div>

      </div>
      <!-- STUB information collapsibles -->
      <div class="col-12 col-md-3 bg-dark text-light text-center top-menu order-1 order-md-2">
        <!-- NOTE description -->
        <div>
          <router-link :to="{ name: 'description' }">
            <h1 class="selectable mt-3 text-light">Description</h1>
          </router-link>
        </div>
        <!-- NOTE Notes Section -->
        <div>
          <div class="d-flex justify-content-around align-items-center fs-4 ">
            <h1 class="selectable " data-bs-toggle="collapse" data-bs-target="#notes">Notes</h1>
            <i v-if="hasLink || campaign?.creatorId == account.id" class="mdi mdi-plus-circle selectable"
              :hidden="campaign?.isArchived == true" title="Create a new Note" type="button" data-bs-toggle="modal"
              data-bs-target="#createNote"></i>
          </div>

          <div id="notes" class="collapse notes-menu">
            <ul class="" v-for="note in notes" :key="note?.id">
              <router-link :to="{ name: 'notes', params: { campaignId: campaign?.id, noteId: note?.id } }">
                <div class="d-flex justify-content-between ">
                  <li v-if="note.isRecap == false" class="selectable">{{ note.name }}</li>
                  <i v-if="note?.accountId == account?.id && note?.isRecap == false" class="mdi mdi-eye text-success pe-3"
                    title="Everybody can see this Entity"></i>
                </div>
              </router-link>

            </ul>
          </div>
        </div>
        <!-- NOTE Recaps section -->
        <div>
          <div class="d-flex justify-content-around align-items-center fs-4">
            <h1 class="selectable" data-bs-toggle="collapse" data-bs-target="#recaps">Recaps</h1>
            <i v-if="campaign?.creatorId == account.id" class="mdi mdi-plus-circle selectable" title="Create a new Recap"
              :hidden="campaign?.isArchived == true" type="button" data-bs-toggle="modal"
              data-bs-target="#createRecap"></i>
          </div>

          <div id="recaps" class="collapse notes-menu">
            <ul v-for="note in notes" :key="note.id">
              <router-link :to="{ name: 'notes', params: { campaignId: campaign?.id, noteId: note?.id } }">
                <li v-if="note.isRecap == true" class="selectable">{{ note.name }}</li>
              </router-link>
            </ul>
          </div>
        </div>
        <!-- NOTE Entities Section -->
        <div>
          <div class="d-flex justify-content-around align-items-center fs-4">
            <h1 class="selectable" data-bs-toggle="collapse" data-bs-target="#entities">Entities</h1>
            <i v-if="campaign?.creatorId == account.id" class="mdi mdi-plus-circle selectable" title="Add an Entity"
              :hidden="campaign?.isArchived == true" type="button" data-bs-toggle="modal" data-bs-target="#addEntity"></i>
          </div>
          <div id="entities" class="collapse notes-menu">
            <ul v-for="entity in entityLinks" :key="entity.id">
              <router-link :to="{ name: 'entities', params: { campaignId: campaign?.id, entityId: entity?.id } }">
                <div class="d-flex justify-content-between">
                  <li v-if="entity?.isPrivate == false || campaign?.creatorId == account?.id" class="selectable">{{
                    entity.Entity.name }}</li>
                  <i v-if="entity.isPrivate == false && campaign?.creatorId == account.id"
                    class="mdi mdi-eye text-success pe-3" title="Everybody can see this Entity"></i>
                </div>
              </router-link>
            </ul>
          </div>
        </div>
        <!-- NOTE Search page routing -->
        <div>
          <router-link :to="{ name: 'search' }">
            <h1 class="text-light mb-3">Search</h1>
          </router-link>
        </div>


      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted, ref, watchEffect, } from "vue";
import { useRoute } from "vue-router";
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { campaignsService } from "../services/CampaignsService.js";
import { AppState } from "../AppState.js";
import { accountCampaignLinkService } from "../services/AccountCampaignLinkService.js"
import { notesService } from "../services/NotesService.js"
import { entitiesCampaignLinkService } from "../services/EntitiesCampaignLinkService.js"
import { router } from "../router.js";
import { entityService } from "../services/EntityService.js";
export default {
  setup() {

    const editable = ref({})
    const route = useRoute()

    onMounted(() => {
      getActiveCampaign()
      getAccountCampaignLinks()
      getEntityLinksByCampaign()
      getNotesByCampaign()
      entityService.getEntity()
    })

    watchEffect(() => {
      getEntityLinksByCampaign()
      getNotesByCampaign()
    })

    async function getEntityLinksByCampaign() {
      try {
        const campaignId = route.params.campaignId
        await entitiesCampaignLinkService.getEntityLinksByCampaign(campaignId)
      } catch (error) {
        Pop.error(error.message)
        logger.log(error)
      }
    }

    async function getNotesByCampaign() {
      try {
        const campaignId = route.params.campaignId
        await notesService.getNotesByCampaign(campaignId)
      } catch (error) {
        Pop.error(error.message)
        logger.log(error)
      }
    }

    async function getActiveCampaign() {
      try {
        const campaignId = route.params.campaignId
        await campaignsService.getActiveCampaign(campaignId)
      } catch (error) {
        Pop.error(error.message)
        logger.log(error)
      }
    }
    async function getAccountCampaignLinks() {
      try {
        const campaignId = route.params.campaignId
        logger.log('here is the campaign id on page', campaignId)
        await accountCampaignLinkService.getAccountCampaignLinks(campaignId)
      } catch (error) {
        Pop.error(error.message)
        logger.log(error)
      }
    }

    return {
      notes: computed(() => AppState.Notes),
      campaign: computed(() => AppState.activeCampaign),
      accountLinks: computed(() => AppState.AccountLinks),
      entityLinks: computed(() => AppState.entityLinks),
      account: computed(() => AppState.account),

      formattedDate: computed(() => {
        return AppState.activeCampaign?.nextSessionDate.toLocaleDateString()
      }),

      hasLink: computed(() => {
        return AppState.AccountLinks.find(l => l.accountId == AppState.account.id)
      }),

      async createAccountLink() {
        try {
          const activeCampaign = route.params.campaignId
          const linkData = { campaignId: activeCampaign }
          await accountCampaignLinkService.createAccountLink(linkData)
        } catch (error) {
          Pop.error(error.message)
          logger.log(error)
        }
      },

      async archiveCampaign() {
        try {
          if (await Pop.confirm('Are you sure you want to archive this campaign? You will not be able to undo this.')) {
            const campaignId = route.params.campaignId
            await campaignsService.archiveCampaign(campaignId)
          }
          return
        } catch (error) {
          Pop.error(error.message)
          logger.error
        }

      }
    }
  }
}
</script>


<style lang="scss" scoped>
.discord {
  height: 10vh;
  width: 10vh;

}

.background {
  background-position: center;
  background-image: url("https://preview.redd.it/ifw1keannjw41.jpg?auto=webp&s=e123ab1d8fc20faed9894298f7efbd6cde32aab5");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100%;
}

.player-avatar {
  height: 10vh;
  width: 10vh;
  border-radius: 50%;
}

.player-info-background {
  background-image: url(https://www.shutterstock.com/image-photo/flameburning-banner-black-flames-fire-260nw-2123476919.jpg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  box-shadow:
    inset 0 0 20px 7px #0cfc8cb6,
}


.child-field {
  background-color: rgba(0, 0, 0, 0.813);
}

.notes-menu {
  overflow-wrap: break-word;
  overflow-y: auto;
  max-height: 50vh;

}

.top-menu {
  // overflow-x: hidden;
  min-height: 70vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

}

@media screen and (max-width: 769px) {

  .top-menu {
    display: block;
    min-height: 20vh;
  }
}
</style>