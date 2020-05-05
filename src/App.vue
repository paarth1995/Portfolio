<template>
  <div id="app">
    <v-app :dark="getDarkMode">
      <v-content>
        <v-toolbar depressed>
          <v-toolbar-title>
            <router-link to="/" style="text-decoration: none;">
            <span :class="[getDarkMode ? 'white--text' : 'dark--text', 'font-weight-regular', 'mx-3']">MY PORTFOLIO</span>
            </router-link>
            <template v-for="link in links"> 
            <router-link :to="link.to" :key="link.title"> 
            <span :class="[getDarkMode ? 'white--text' : 'dark--text', 'font-weight-regular', 'mx-3']">{{link.title}}</span> 
            </router-link>
            </template>
            </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-switch v-model="darkMode" class="mt-3" hide-details label="Dark Mode"></v-switch>
          </v-toolbar-items>
        </v-toolbar>
        <transition name="fade" mode="out-in" appear>
          <router-view ref="view"></router-view>
        </transition>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      links: [
        {
          title: 'Basics',
          to: '/basics'
        },
        {
          title: 'VueJS',
          to: '/vue'
        },
        {
          title: 'ReactJS',
          to: 'react'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      getDarkMode: 'getDarkMode'
    }),
    darkMode: {
        get() {
          return this.getDarkMode
        },
        set(val) {
          return this.setDarkMode(val)
        }
      }
  },
    methods: {
      ...mapMutations({
        setDarkMode: 'setDarkMode'
      })
    }
}
</script>