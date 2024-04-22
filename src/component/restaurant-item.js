import CONFIG from '../scripts/globals/config'
import { createRestaurantItemTemplate } from '../scripts/views/templates/template-creator'
class RestaurantItem extends HTMLElement {
  _restaurant = {
    id: null,
    name: null,
    description: null,
    pictureId: null,
    city: null,
  }

  constructor() {
    super()
  }
  set restaurant(value) {
    this._restaurant = value
    this.render()
  }
  get restaurant() {
    return this._restaurant
  }

  render() {
    this.innerHTML += createRestaurantItemTemplate(this._restaurant)
  }
}

customElements.define('restaurant-item', RestaurantItem)
