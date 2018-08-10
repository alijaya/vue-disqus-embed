import Vue from 'vue'
import App from '@/App.vue'

import VueDisqusEmbed from '@/js/VueDisqusEmbed'
import router from '@/router'

import VueGithubCorners from 'vue-gh-corners/'
import 'vue-gh-corners/dist/vue-github-corners.css';

Vue.config.productionTip = false

Vue.use(VueGithubCorners)

Vue.use(VueDisqusEmbed, {
  shortname: 'vue-disqus'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
