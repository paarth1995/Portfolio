import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkMode: true,
    techStack: [
      {
        id: 1,
        name: 'Bootstrap & CSS',
        Description: 'Built with Bootstrap 4 and CSS. Click to View',
        src: 'https://cdn.freebiesupply.com/logos/large/2x/bootstrap-4-logo-png-transparent.png',
        to: '/basics'
      },
      {
        id: 2,
        name: 'VueJS',
        Description: 'Built using VueJS. Click to View',
        src: 'https://madewithvuejs.com/mandant/madewithvuejs/images/logo.png',
        to: '/vue'
      },
      {
        id: 3,
        name: 'ReactJS',
        Description: 'Built using ReactJS. Click to View.',
        src: 'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png',
        to: '/react'
      }
    ],
    basicProjects: [
      {id:1, Title: 'Image Changer', Description: 'Fun CSS Hover and Animation Project.', href: 'https://paarth1995.github.io/Changer/', src: 'https://images.pexels.com/photos/4171211/pexels-photo-4171211.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
      {id:2, Title: 'Image Slider', Description: 'Fun CSS Hover and Animation Project.', href: 'https://paarth1995.github.io/Slider/', src: 'https://images.pexels.com/photos/1324990/pexels-photo-1324990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
      {id:3, Title: 'loopLab', Description: 'BootStrap 4 Landing page for Social Profiles.', href: 'https://paarth1995.github.io/loopLAB/', src: 'https://images.pexels.com/photos/533446/pexels-photo-533446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
      {id:4, Title: 'Quazzu', Description: 'Heroku Inspired Website.', href: 'https://paarth1995.github.io/Quazzu/', src: 'https://images.pexels.com/photos/957040/night-photograph-starry-sky-night-sky-star-957040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
      {id:5, Title: 'TravelVille', Description: 'Travel Website Landing Page.', href: 'https://paarth1995.github.io/Travelville/', src: 'https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
      {id:6, Title: 'BizLand', Description: 'Landing Page for your Business Needs.', href: 'https://paarth1995.github.io/BizLand/', src: 'https://images.pexels.com/photos/593322/pexels-photo-593322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    ],
    vueProjects: [
      {id:1, Title:'Netflix App', Description:'Netflix inspired app with user landing page and a Billboard page.', href: 'https://vue-netflix.herokuapp.com/', src:'https://images.pexels.com/photos/2726370/pexels-photo-2726370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
      {id:2, Title:'Contact Manager App', Description:'Basic CRUD App to manage your Contacts.', href: 'https://vue-contacts.herokuapp.com/', src:'https://images.pexels.com/photos/6330/smartphone-notebook-technology-calendar.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
      {id:3, Title:'Instagram Uploader App', Description:'Made with CSSGram, FileReader API, VueDragScroll. Click on + to upload images.', href:'https://vue-insta-clone.herokuapp.com/', src: 'https://images.pexels.com/photos/238480/pexels-photo-238480.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'},
    ],
    reactProjects: [
      {id:1, Title:'Project 1', Description:'Description 1', href: '', src:'https://images.pexels.com/photos/1362484/pexels-photo-1362484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
      {id:2, Title:'Project 2', Description:'Description 2', href: '', src:'https://images.pexels.com/photos/3155674/pexels-photo-3155674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
      {id:3, Title:'Project 3', Description:'Description 3', href: '', src:'https://images.pexels.com/photos/3622619/pexels-photo-3622619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    ]
  },
  getters: {
    getDarkMode: state => state.darkMode,
    getTechStack: state => state.techStack,
    getBasicProjects: state => state.basicProjects,
    getVueProjects: state => state.vueProjects,
    getReactProjects: state => state.reactProjects
  },
  mutations: {
    setDarkMode(state, payload) {
      state.darkMode = payload
    },
    setTechStack (state, payload) {
      state.techStack = payload;
    },
    setBasicProjects(state, payload) {
      state.basicProjects = payload;
    },
    setVueProjects(state,payload) {
      state.vueProjects = payload
    },
    setReactProjects(state,payload) {
      state.reactProjects = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
