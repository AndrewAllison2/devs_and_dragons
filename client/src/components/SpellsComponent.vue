<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-11 col-md-9" v-if="spells?.url.includes('spell')">
                <div>
                    <div>
                        Range: {{ spells.range }}
                    </div>
                    <div>
                        Components: <span v-for="(s, index) in spells.components" :key="index">{{ s }}, </span>
                    </div>
                    <div>
                        Materials: {{ spells.material }}
                    </div>
                    <div>
                        Ritual Spell: {{ spells.ritual }}
                    </div>
                    <div>
                        Spell Duration: {{ spells.duration }}
                    </div>
                    <div v-if="spells.concentration">
                        Concentration: {{ spells.concentration }}
                    </div>
                    <div>
                        Spellcasting time: {{ spells.casting_time }}
                    </div>
                    <div v-for="(s, index) in spells.desc" :key="index">
                        {{ s }}
                    </div>
                    <!-- <p>{{ spells.classes }}</p> -->
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
            spells: computed(() => AppState.selectedResult)


        }
    }
}
</script>


<style lang="scss" scoped>
div {
    padding-bottom: 1vh;
}
</style>