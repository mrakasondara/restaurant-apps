import { Workbox } from 'workbox-window'

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service worker not supported in the browser')
    return
  }

  const wb = new Workbox('./sw.bundle.js')
  try {
    await wb.register()
    console.log('Service worker registered')
  } catch (error) {
    console.log('Failed register', error)
  }
}
export default swRegister
