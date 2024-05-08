import SkeletonItem from './skeleton-item'

class SkeletonList extends HTMLElement {
  constructor() {
    super()
    this.render()
  }

  render() {
    this.innerHTML += `
    <skeleton-item></skeleton-item>
    <skeleton-item></skeleton-item>
    <skeleton-item></skeleton-item>
    <skeleton-item></skeleton-item>
    <skeleton-item></skeleton-item>
    <skeleton-item></skeleton-item>
    `
  }
}
customElements.define('skeleton-list', SkeletonList)
