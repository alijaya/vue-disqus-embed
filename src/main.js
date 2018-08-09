import Vue from 'vue'
import App from './App.vue'

import VueDisqusEmbed from '@/js/VueDisqusEmbed'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueDisqusEmbed, {
  shortname: 'vue-disqus'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
