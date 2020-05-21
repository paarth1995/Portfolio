<template>
  <v-container grid-list-md text-xs-center>
    <v-layout align-center justify-center row wrap>
      <v-avatar size="150px">
        <v-img src="https://madewithvuejs.com/mandant/madewithvuejs/images/logo.png"></v-img>
      </v-avatar>
    </v-layout>
    <v-layout align-center justify-center row wrap>
      <div class="display-2 mt-2 mb-2">Made with <span class="success--text">Vuejs, Vuex , Vuetify and VueDraggable</span></div>
    </v-layout>
    <v-layout align-center justify-center row fill-height class="mt-3">
      <v-flex xs12 md6 lg6>
        <v-hover>
          <v-card slot-scope="{hover}" :class="`elevation-${hover ? 12 : 20}`">
            <v-layout align-center justify-center column wrap fill-height>
              <v-avatar size="100px" class="mt-5 mb-2">
                <v-img
                  src="https://cutewallpaper.org/21/vendetta-mask-wallpapers/V-For-Vendetta-Mask-Wallpapers-Wallpaper-Cave.jpg"
                  alt="avatar"></v-img>
              </v-avatar>
              <div :class="['headline', getDarkMode ? 'font-weight-light' : 'font-weight-regular', 'font-italic']">
                Paarth Sharma </div>
              <div :class="['title', getDarkMode ? 'font-weight-light' : 'font-weight-regular', 'font-italic', 'my-2']">
                FRONT END DEVELOPER</div>
            </v-layout>
            <v-layout class="my-3 py-4" align-center justify-center row wrap fill-height>
              <v-avatar class="mx-4" size="50px" v-for="(data,index) in avatarData" :key="index" style="cursor:pointer">
                <a :href="data.link" target="_blank" class="a-class">
                <v-img :src="data.img" :alt="data.alt">
                </v-img>
                </a>
              </v-avatar>
            </v-layout>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
    <draggable tag="v-layout" v-model="specialCards" class="mt-5 row wrap">
          <v-flex md4 xs12 v-for="(tech, index) in getTechStack" :key="index" class="px-4">
          <card-container :name="tech.name" :id="tech.id" :src="tech.src" :link="tech.to"
            :description="tech.Description" />
          </v-flex>
    </draggable>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'
  import CardContainer from './CardContainer'
  import draggable from 'vuedraggable'
  export default {
    name: 'Dashboard',
    components: {
      CardContainer,
      draggable
    },
    data() {
      return {
        avatarData: [
          {
            img: 'https://toppng.com/public/uploads/preview/ew-instagram-logo-transparent-related-keywords-logo-instagram-vector-2017-115629178687gobkrzwak.png',
            alt: 'instagram',
            link: 'https://www.instagram.com/'
          },
          {
            img: 'https://www.freepnglogos.com/uploads/facebook-icons/facebook-icon-transparent-background-3.png',
            alt: 'facebook',
            link:'https://www.facebook.com/'
          },
          {
            img: 'data:image/png;base64,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',
            alt: 'linkedin',
            link: 'https://www.linkedin.com/in/paarth-sharma-a1579b112/'
          },
          {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiQM_C9rIIimqSLUNYqt6qETIEeXjvH54ZuaFYphEUxLNC6iCR&usqp=CAU',
            alt: 'github',
            link:'https://github.com/paarth1995'
          }
        ]
      }
    },
    computed: {
      ...mapGetters({
        getDarkMode: 'getDarkMode',
        getTechStack: 'getTechStack'
      }),
      specialCards: {
        get() {
          return this.$store.state.techStack
        },
        set(val) {
          this.$store.commit('setTechStack', val)
        }
      }
    }
  }
</script>
