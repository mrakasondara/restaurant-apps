import {
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
} from "../views/templates/template-creator";
import AlertInitiator from "./alert-initiator";

const LikeButtonPresenter = {
  async init({
    alertContainer,
    likeContainer,
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  }) {
    this._alertContainer = alertContainer;
    this._likeContainer = likeContainer;
    this._favoriteRestaurants = FavoriteRestaurantIdb;
    this._restaurant = restaurant;
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;
    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },
  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },
  _renderLike() {
    this._likeContainer.innerHTML = createLikeRestaurantButtonTemplate();
    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      AlertInitiator.init({
        alertContainer: this._alertContainer,
        errorStatus: false,
        message: "Favorite Ditambahkan !",
      });
      this._renderButton();
    });
  },
  _renderLiked() {
    this._likeContainer.innerHTML = createUnlikeRestaurantButtonTemplate();
    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      AlertInitiator.init({
        alertContainer: this._alertContainer,
        errorStatus: false,
        message: "Favorite Dihapus !",
      });
      this._renderButton();
    });
  },
};
export default LikeButtonPresenter;
