class AppFooter extends HTMLElement {
  constructor() {
    super()
    this.render()
  }

  render() {
    const year = new Date().getFullYear()
    this.innerHTML += `
            <h5>copyright &copy; ${year} mrakasondara</h5>
        `
  }
}
customElements.define('app-footer', AppFooter)
