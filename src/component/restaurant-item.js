import { createRestaurantItemTemplate } from '../scripts/views/templates/template-creator'

class RestaurantItem extends HTMLElement {
  constructor() {
    super()
  }

  set restaurant(value) {
    this._saveData(value)
  }

  _saveData(value) {
    const restaurant = {
      id: value.id,
      name: value.name,
      description: value.description,
      pictureId: value.pictureId,
      city: value.city,
    }
    return this.render(restaurant)
  }

  render(restaurant) {
    this.innerHTML += createRestaurantItemTemplate(restaurant)
  }
}

customElements.define('restaurant-item', RestaurantItem)
