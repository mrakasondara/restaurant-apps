import { createReviewTemplate } from '../scripts/views/templates/template-creator'
class CustomerReviews extends HTMLElement {
  _reviews = {
    name: null,
    date: null,
    review: null,
  }

  constructor() {
    super()
  }
  set reviews(value) {
    this._reviews = value
    this.render()
  }
  get reviews() {
    return this._reviews
  }
  render() {
    this.innerHTML += `
    <div class="reviews">
      <div class="header">
        <p class="name">${this._reviews.name}</p>
        <p class="date">${this._reviews.date}</p>
      </div>
      <div class="message">
        <p>${this._reviews.review}</p>
      </div>
    </div>
    `
  }
}
customElements.define('customer-reviews', CustomerReviews)
