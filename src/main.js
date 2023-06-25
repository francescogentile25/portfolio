import { createApp } from 'vue'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLocationDot, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
library.add(faGithub, faLinkedinIn, faLocationDot, faPhone, faPaperPlane)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
