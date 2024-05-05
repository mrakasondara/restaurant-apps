import LikeButtonPresenter from "../../src/scripts/utils/like-button-presenter";
const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    alertContainer: document.querySelector("#dummyAlert"),
    likeContainer: document.querySelector("#likeContainer"),
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
