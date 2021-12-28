import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './index.css'
import 'animate.css';
import AOS from 'aos'
import 'aos/dist/aos.css';
import titleMixin from './mixins/titleMixin'

AOS.init();

createApp(App).mixin(titleMixin).use(router).mount('#app')
