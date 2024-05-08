class SkeletonDetail extends HTMLElement {
  constructor() {
    super()
    this.render()
  }

  render() {
    this.innerHTML += `
    <div class="skel-image skeleton"></div>
    <div class="skel-name skeleton"></div>
    <div class="skel-address skeleton"></div>
    <div class="skel-desc skeleton"></div>
    `
  }
}
customElements.define('skeleton-detail', SkeletonDetail)
