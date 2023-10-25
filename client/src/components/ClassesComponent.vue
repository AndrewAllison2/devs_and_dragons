<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-9 col-11" v-if="classes?.url.includes('class')">
                <div>
                    Hit Die: d{{ classes.hit_die }}
                </div>
                <div>
                    Skill Proficiencies: {{ classes.proficiency_choices.desc }}
                </div>
                <div>
                    Proficiencies: <span v-for="(c, index) in classes.proficiencies" :key="index"><span
                            v-if="!c.name.includes('Saving Throw')">{{ c.index }}, </span> </span>
                </div>
                <div>
                    Saving Throws: <span v-for="(c, index) in classes.saving_throws" :key="index"> {{ c.name }}, </span>
                </div>
                <div>
                    Starting Equipment: <span v-for="(c, index) in classes.starting_equipment" :key="index">{{ c.name }},
                    </span>
                    Choose From:
                    <ul>
                        <li v-for="(c, index) in classes.starting_equipment_options" :key="index">{{ c.desc }}</li>
                    </ul>
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
            classes: computed(() => AppState.selectedResult)
        }
    }
}
</script>


<style lang="scss" scoped></style>