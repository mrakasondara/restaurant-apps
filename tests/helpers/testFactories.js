import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter'
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb'

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    alertContainer: document.querySelector('#dummyAlert'),
    likeContainer: document.querySelector('#likeContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  })
}

export { createLikeButtonPresenterWithRestaurant }
