import CONFIG from '../scripts/globals/config'
import { createRestaurantDetailTemplate } from '../scripts/views/templates/template-creator'
import AccordionInitiator from '../scripts/utils/accordion-initiator'
class RestaurantDetail extends HTMLElement {
  _restaurant = {
    id: null,
    name: null,
    description: null,
    pictureId: null,
    city: null,
    rating: null,
    address: null,
    menus: null,
    customerReviews: null,
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
    this.innerHTML += createRestaurantDetailTemplate(this._restaurant)
    AccordionInitiator.init({
      btnAccordionDrinks: document.querySelector('#btn-accordion-drinks'),
      btnAccordionFoods: document.querySelector('#btn-accordion-foods'),
    })
  }
}

customElements.define('restaurant-detail', RestaurantDetail)
