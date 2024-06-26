import API_ENDPOINT from '../../globals/api-endpoint'
import AddReviewsInitiator from '../../utils/add-reviews-initiator'
import UrlParser from '../../routes/url-parser'
import LikeButtonInitiator from '../../utils/like-button-initiator'
import AddReviews from '../../../component/add-reviews'
import CustomerReviews from '../../../component/customer-reviews'
import RestaurantDetail from '../../../component/restaurant-detail'
import {
  createReviewTemplate,
  createLikeButtonTemplate,
} from '../templates/template-creator'
import changeTitle from '../../utils/change-title'
import AlertInitiator from '../../utils/alert-initiator'

const Detail = {
  async render() {
    return `
    <h3 tabindex="0">Detail Restaurant</h3>
    <restaurant-detail></restaurant-detail>
    <div id="wrapper">
        <h6>Customer Reviews</h6>
        <add-reviews></add-reviews>
    </div>
    <div id="likeContainer"></div>
    <alert-app></alert-app>
    `
  },
  async afterRender() {
    const alertContainer = document.querySelector('alert-app')
    const { id } = UrlParser.parseActiveUrlWithoutCombiner()
    document.querySelector('loading-app').style.display = 'flex'
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    const { error, message, restaurant } = await response.json()
    AlertInitiator.init({
      alertContainer,
      errorStatus: error,
      message: 'Detail restaurant ditemukan',
    })
    if (!error) {
      const restaurantDetail = document.querySelector('restaurant-detail')
      restaurantDetail.restaurant = restaurant
      document.querySelector('loading-app').style.display = 'none'
      changeTitle(`${restaurant.name} | Lapaaar`)
      LikeButtonInitiator.init({
        alertContainer: document.querySelector('alert-app'),
        likeContainer: document.querySelector('#likeContainer'),
        restaurant: {
          id: restaurant.id,
          address: restaurant.address,
          city: restaurant.city,
          customerReviews: restaurant.customerReviews,
          description: restaurant.description,
          menus: restaurant.menus,
          name: restaurant.name,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
        },
      })
      const form = document.querySelector('form')

      const wrapper = document.querySelector('#wrapper')
      const reviewsData = restaurant.customerReviews
      createReviewTemplate(reviewsData, wrapper)

      const name = document.querySelector('input')
      const review = document.querySelector('textarea')
      const oldReviews = document.querySelectorAll('customer-reviews')

      AddReviewsInitiator.init({ id, form, name, review, oldReviews, wrapper })
    } else {
      document.querySelector('loading-app').style.display = 'none'
      AlertInitiator.init({
        alertContainer,
        errorStatus: error,
        message,
      })
    }
  },
}
export default Detail
