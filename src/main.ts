import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VCalendar } from 'vuetify/labs/VCalendar'

// Components
import App from './App.vue'

const vuetify = createVuetify({
    components: {
        ...components,
        VCalendar,  // Register VCalendar here
      },
    directives,
    theme: {
        defaultTheme: 'dark'
      }
  })

const pinia = createPinia()

createApp(App)
  .use(vuetify)
  .use(pinia)
  .use(router)
  .mount('#app')
