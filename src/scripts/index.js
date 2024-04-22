import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.scss'
import '../component/app-bar'
import '../component/app-footer'
import App from './views/app'
import swRegister from './utils/sw-register'

const app = new App({
  button: document.querySelector('#btn-drawer'),
  drawer: document.querySelector('nav'),
  content: document.querySelector('#mainContent'),
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
