<template>
    <v-container grid-list-md text-xs-center>
        <draggable v-model="draggableCards" tag="v-layout" class="row wrap">
            <v-flex md4 xs12 v-for="(tech, index) in getReactProjects" :key="index" class="px-3 my-2">
                <a target="_blank" style="color:transparent">
                <card-container :name="tech.Title" :id="tech.id" :src="tech.src"
                    :description="tech.Description"/>
                </a>
            </v-flex>
        </draggable>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import CardContainer from './CardContainer'
import draggable from 'vuedraggable'
export default {
    components: {
        CardContainer,
        draggable
    },
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters({
            getReactProjects: 'getReactProjects'
        }),
        draggableCards: {
            get() {
                return this.$store.state.reactProjects
            },
            set(val) {
                this.$store.commit('setReactProjects',val)
            }
        }
    }
}
</script>