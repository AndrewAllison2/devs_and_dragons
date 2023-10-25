<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-10 col-11" v-if="monster?.url.includes('monsters')">
                <div>
                    <div>
                        {{ monster.size }} <span>{{ monster.type }}</span>
                    </div>
                    <div>
                        Alignment: {{ monster.alignment }}
                    </div>
                    <div>
                        Hit Points: {{ monster.hit_points }} ({{ monster.hit_points_roll }})
                    </div>
                    <div>
                        Speed:{{ monster.speed.walk }},
                        <span v-if="monster.speed?.swim">swim {{ monster.speed.swim }}, </span>
                        <span v-if="monster.speed?.fly">fly {{ monster.speed.fly }}, </span>
                        <span v-if="monster.speed.burrow">burrow {{ monster.speed.burrow }}</span>
                    </div>
                    <div>
                        Challenge Rating: {{ monster.challenge_rating }}
                    </div>
                    <div>

                    </div>
                    <!-- <p>{{ monster.image }}</p> -->
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

export default {
    setup() {
        return {
            monster: computed(() => AppState.selectedResult)


        }
    }
}
</script>


<style lang="scss" scoped></style>