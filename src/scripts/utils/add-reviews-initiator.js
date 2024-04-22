import API_ENDPOINT from '../globals/api-endpoint'
import { createReviewTemplate } from '../views/templates/template-creator'
import AlertInitiator from './alert-initiator'

const AddReviewsInitiator = {
  init({ id, form, name, review, oldReviews, wrapper }) {
    this._id = id
    this._form = form
    this._name = name
    this._review = review
    this._oldReviews = oldReviews
    this._wrapper = wrapper
    this._form.addEventListener('submit', (ev) => {
      this._addReviews(ev, this._id, this._name.value, this._review.value)
      this._form.reset()
    })
  },
  async _addReviews(ev, id, name, review) {
    ev.preventDefault()
    const data = { id, name, review }
    const response = await fetch(API_ENDPOINT.ADD_REVIEWS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const { customerReviews, error } = await response.json()

    if (!error) {
      AlertInitiator.init({
        alertContainer: document.querySelector('alert-app'),
        errorStatus: error,
        message: 'Berhasil menambahkan komentar !',
      })
      this._oldReviews.forEach((old) => {
        old.remove()
      })
      createReviewTemplate(customerReviews, this._wrapper)
    } else {
      AlertInitiator.init({
        alertContainer: document.querySelector('alert-app'),
        errorStatus: error,
        message: 'Gagal menambahkan komentar !',
      })
      console.log(error)
    }
  },
}
export default AddReviewsInitiator
