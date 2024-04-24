import { createRestaurantDetailTemplate } from '../scripts/views/templates/template-creator'
import AccordionInitiator from '../scripts/utils/accordion-initiator'

class RestaurantDetail extends HTMLElement {
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
      rating: value.rating,
      address: value.address,
      menus: value.menus,
      customerReviews: value.customerReviews,
    }
    return this.render(restaurant)
  }

  render(restaurant) {
    this.innerHTML += createRestaurantDetailTemplate(restaurant)
    AccordionInitiator.init({
      btnAccordionDrinks: document.querySelector('#btn-accordion-drinks'),
      btnAccordionFoods: document.querySelector('#btn-accordion-foods'),
    })
  }
}

customElements.define('restaurant-detail', RestaurantDetail)
