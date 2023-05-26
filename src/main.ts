import { createApp } from 'vue'
import App from './App.vue'
// 测试使用demo
// import thBricks from 'th-bricks-demo'
// import 'th-bricks/dist/bundle.css'
import router from './router'
createApp(App)
    .use(router)
    // .use(thBricks)
    .mount('#app')
