class LoadingApp extends HTMLElement {
  constructor() {
    super()
    this.render()
  }

  render() {
    this.innerHTML += `
        <div class="alert">
          <img src="./images/icons/256x256.png" class="loading"/>
          <h6>Mencatat Restaurants</h6>
        </div>
        `
  }
}
customElements.define('loading-app', LoadingApp)
