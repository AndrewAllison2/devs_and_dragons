<template>
  <div class="container-fluid account-page">
    <div class="row justify-content-around">
      <div class="col-11 col-md-3 mb-5">
        <div class="card m-2">
          <h1>Deployment Change</h1>
          <img class="card-img-top " :src="account.picture" alt="profile">
          <div class="card-body text-white">
            <p class="card-text">{{ account.name }}</p>
            <p class="card-text">{{ account.email }}</p>
          </div>
        </div>
        <div class="text-center">
          <button v-if="account.id" class="btn btn-outline-primary" type="button" data-bs-toggle="modal"
            data-bs-target="#editAccount">
            Update Account
          </button>
        </div>
      </div>

      <div class="row justify-content-center mb-3">
        <div class="col-11 col-md-6 d-flex card p-3">
          <div class="d-flex justify-content-between">
            <h4 class="text-light">My Campaigns: {{ myCampaigns?.length }}</h4>
            <button v-if="account.id" class="btn btn-outline-primary mx-2" type="button" data-bs-toggle="modal"
              data-bs-target="#createCampaignModal">
              <i class="mdi mdi-plus-box"> </i> Create Campaign</button>
          </div>


          <div id="carouselExample" class="carousel slide carousel-fade">
            <div class="carousel-inner">
              <div class="carousel-item d-flex justify-content-center" :class="{ active: index == 0 }"
                v-for="campaign, index in myCampaigns" :key="campaign.id">
                <div class="col-9 col-md-7 p-3">
                  <CampaignCardComponent :campaignProp="campaign" />
                </div>
              </div>
            </div>
            <button class="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-11 col-md-6 card d-flex p-3 ">
          <div class="d-flex justify-content-between">
            <h4 class="text-light">My Entities: {{ myEntities?.length }}</h4>
            <div>
              <button v-if="account.id" class="btn btn-outline-primary mx-2" type="button" data-bs-toggle="modal"
                data-bs-target="#createEntityModal"><i class="mdi mdi-plus-box"> </i>
                Create Entity</button>
            </div>
          </div>
          <div id="entityCarousel" class="carousel slide carousel-fade">
            <div class="carousel-inner">
              <div class="carousel-item d-flex justify-content-center " :class="{ active: index == 0 }"
                v-for="entity, index in myEntities" :key="entity.id">
                <div class=" col-8 col-md-6 d-flex flex-column text-white text-center box rounded elevation-5 m-3 p-2">
                  <div class="elevation-5 mb-3 info-card rounded">
                    <h3>{{ entity.name }}</h3>
                    <p>Type: {{ entity.type }}</p>
                    <p >{{ entity.desc }}</p>
                    <!-- <p class="entity-desc">{{ entity.body }}</p> -->
                  </div>
                  <div class="text-center mb-2">
                    <img class="img-fluid rounded cover-Img" :src="entity.imgUrl" alt="">
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev " type="button" data-bs-target="#entityCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next " type="button" data-bs-target="#entityCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { AppState } from '../AppState';
import { campaignsService } from '../services/CampaignsService.js';
import { entityService } from '../services/EntityService.js';
import { logger } from '../utils/Logger.js';

export default {
  setup() {
    const account = ref({})
    const editable = ref({})



    async function getCampaignsByAccount() {
      try {
        const accountId = account.value.id;
        await campaignsService.getCampaignsByAccount(accountId);
      }
      catch (error) {
        logger.error(error);
      }
    }

    async function getMyEntitiesByAccount() {
      try {
        const accountId = account.value.id;
        await entityService.getMyEntitiesByAccount(accountId)
      } catch (error) {
        logger.error(error)
      }
    }

    onMounted(() => {
      getCampaignsByAccount();
      getMyEntitiesByAccount();
    });



    return {
      editable,
      account: computed(() => AppState.account),
      myCampaigns: computed(() => AppState.myCampaigns),
      myEntities: computed(() => AppState.myEntities),
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}

.scroll {
  overflow-x: scroll;
}

.account-page {
  background-image: url('https://wallpapercave.com/wp/2iIPx6K.png');
  background-color: white#5f3f2485;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 95vh;
  font-family: 'Courier New', Courier, monospace;
}

.box {
  background-color: rgba(73, 73, 73, 0.719);
  outline: 1px double red;
  box-shadow: 3px 1px 5px rgb(255, 0, 0);

}

.cover-Img {
  height: 15vh;
  width: 35vh;
  object-fit: cover;
}

.card-img-top {

  max-width: 500px;
  margin: 0;
  object-fit: cover;
  position: relative;

}

.card {
  background-color: rgba(19, 13, 13, 0.936);
  border: 1px double rgba(10, 49, 220, 0.468);

}

.info-card {
  background-color: rgba(0, 0, 0, 0.555);
  padding: 10px;
}

.entity-desc {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* max-height: 10em; */
}
</style>
