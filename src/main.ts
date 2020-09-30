import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'

const init = async () => {
    // @ts-ignore
    createApp(App).mount('#app')
}

init().then(() => console.log('App initialized 🚀'))
