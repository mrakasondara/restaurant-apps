class SkeletonDetail extends HTMLElement {
  constructor() {
    super()
    this.render()
  }

  render() {
    this.innerHTML += `hello world`
  }
}
customElements.define('skeleton-detail', SkeletonDetail)
