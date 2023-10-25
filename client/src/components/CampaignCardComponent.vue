<template>
  <router-link :to="{ name: 'ActiveCampaign', params: { campaignId: campaignProp.id } }">
    <div class="row text-white text-center">
      <div class="col-12">
        <div v-if="campaignProp.isArchived == false"
          class="d-flex flex-column justify-content-around box rounded elevation-5 selectable p-2 main-card"
          title="To this Campaign!">
          <div class="elevation-5 mb-3 info-card rounded">
            <h3>{{ campaignProp.name }}</h3>
            <p>{{ campaignProp.nextSessionDate.toLocaleDateString() }} </p>
            <p>{{ campaignProp.nextSessionDate.toLocaleTimeString() }}</p>
            <p class="campaign-desc">{{ campaignProp.desc }}</p>
            <p>Player Capacity: {{ campaignProp.partyCount }} / {{ campaignProp?.capacity }}</p>
          </div>
          <div class="text-center mb-2">
            <img class="img-fluid rounded cover-Img" :src="campaignProp.coverImg" alt="">
          </div>
        </div>

        <div v-else class="d-flex flex-column justify-content-around archived-box rounded elevation-5 selectable p-2"
          title="This campaign has ended but you can still view its details for inspiration!">
          <div class="elevation-5 mb-3 info-card rounded">
            <h3>{{ campaignProp.name }}</h3>
            <!-- <p>{{ campaignProp.nextSessionDate.toLocaleDateString() }} </p> -->
            <!-- <p>{{ campaignProp.nextSessionDate.toLocaleTimeString() }}</p> -->
            <!-- <p>{{ campaignProp.desc }}</p> -->
            <p>This adventure has ended!</p>
            <!-- <p>Player Capacity: {{ campaignProp.partyCount }} / {{ campaignProp?.capacity }}</p> -->
          </div>
          <div class="text-center mb-2">
            <img class="img-fluid rounded cover-Img" :src="campaignProp.coverImg" alt="">
          </div>
        </div>

      </div>

    </div>
  </router-link>
</template>


<script>
import { computed } from "vue";
import { Campaign } from "../models/Campaign.js";
import { AppState } from "../AppState.js";

export default {
  props: {
    campaignProp: { type: Campaign, required: true }
  },

  setup() {

    return {
    }
  }
}
</script>



<style lang="scss" scoped>
.box {
  background-color: rgba(73, 73, 73, 0.719);
  outline: 1px double red;
  box-shadow: 3px 1px 5px rgb(255, 0, 0);
  min-height: 50vh;
}

.archived-box {
  background-color: rgba(73, 73, 73, 0.719);
  outline: 1px double rgb(255, 220, 19);
  box-shadow: 3px 1px 5px rgb(255, 220, 19);
  min-height: 50vh;

}


.box:hover {
  background-color: rgb(73, 73, 73);
  outline: 2px double rgb(112, 213, 241);
  box-shadow: 2px 0px 4px rgb(112, 213, 241);

}

.card {
  background-color: rgba(30, 20, 20, 0.644);
  border: 1px double rgba(255, 0, 0, 0.395);

}

.info-card {
  background-color: rgba(0, 0, 0, 0.555);
  padding: 10px;
  // overflow-y: scroll;
}

// .card {
//   background-color: rgba(30, 20, 20, 0.644);
//   border: 1px double rgb(112, 213, 241);

// }
.main-card {
  min-height: 50vh;
}

.cover-Img {
  height: 15vh;
  width: 35vh;
  object-fit: cover;
}

.campaign-desc {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-height: 10em;
}
</style>