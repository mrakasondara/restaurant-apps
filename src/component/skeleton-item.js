class SkeletonItem extends HTMLElement {
  constructor() {
    super()
    this.render()
  }

  render() {
    this.innerHTML += `
    <div class="skel-image skeleton"></div>
    <div class="skel-name skeleton"></div>
    <div class="skel-desc skeleton"></div>
    `
  }
}
customElements.define('skeleton-item', SkeletonItem)
