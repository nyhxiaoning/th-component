import { App } from 'vue'
import TText from './components/TText'
// 引入Toast
import Toast from "./components/Toast"
const components = [
  TText,
  Toast
]
const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}
export {
  TText,
  Toast,
  install
}
export default { install }