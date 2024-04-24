import { createReviewTemplate } from '../scripts/views/templates/template-creator'

class CustomerReviews extends HTMLElement {
  constructor() {
    super()
  }

  set reviews(value) {
    this._saveData(value)
  }

  _saveData(value) {
    const review = {
      name: value.name,
      date: value.date,
      review: value.review,
    }
    return this.render(review)
  }

  render(review) {
    this.innerHTML += `
    <div class="reviews">
      <div class="header">
        <p class="name">${review.name}</p>
        <p class="date">${review.date}</p>
      </div>
      <div class="message">
        <p>${review.review}</p>
      </div>
    </div>
    `
  }
}
customElements.define('customer-reviews', CustomerReviews)
