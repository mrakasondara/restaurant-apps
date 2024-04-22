import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb'
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator'
import AlertInitiator from './alert-initiator'

const LikeButtonInitiator = {
  async init({ alertContainer, likeContainer, restaurant }) {
    this._alertContainer = alertContainer
    this._likeContainer = likeContainer
    this._restaurant = restaurant

    await this._renderButton()
  },

  async _renderButton() {
    const { id } = this._restaurant
    if (await this._isRestaurantExist(id)) {
      this._renderLiked()
    } else {
      this._renderLike()
    }
  },
  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id)
    return !!restaurant
  },
  _renderLike() {
    this._likeContainer.innerHTML = createLikeButtonTemplate()
    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant)
      AlertInitiator.init({
        alertContainer: this._alertContainer,
        errorStatus: false,
        message: 'Favorite Ditambahkan !',
      })
      this._renderButton()
    })
  },
  _renderLiked() {
    this._likeContainer.innerHTML = createLikedButtonTemplate()
    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id)
      AlertInitiator.init({
        alertContainer: this._alertContainer,
        errorStatus: false,
        message: 'Favorite Dihapus !',
      })
      this._renderButton()
    })
  },
}
export default LikeButtonInitiator
