class AlertApp extends HTMLElement {
  constructor() {
    super()
    this.render()
  }

  render() {
    this.innerHTML = ''
  }
}
customElements.define('alert-app', AlertApp)
