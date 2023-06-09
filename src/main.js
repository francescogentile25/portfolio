import { createApp } from 'vue'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
library.add(faGithub, faLinkedinIn)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
