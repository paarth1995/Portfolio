<template>
    <v-hover>
        <v-card slot-scope="{hover}" :href="href" :class="[`elevation-${hover ? 12 : 20}`]" :to="link">
            <v-img :src="src" height="300px">
            </v-img>
            <v-card-title primary-title>
                <div :class="getDarkMode ? 'white--text' : 'dark--text'">
                    <h3 class="headline text-md-center">{{name}}</h3>
                    <div class="mt-2 text-md-center">{{description}}</div>
                </div>
            </v-card-title>
        </v-card>
    </v-hover>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    props: {
        id: {
            type: Number,
            required: true
        },
        src : {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: false
        },
        href: {
            type: String,
            required: false
        }
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters({
            getDarkMode: 'getDarkMode'
        })
    }
}
</script>