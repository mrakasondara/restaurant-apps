import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import changeTitle from "../../utils/change-title";
import unShowSkeleton from "../../utils/unshow-skeleton";
import SkeletonList from "../../../component/skeleton-list";

const Favorite = {
  async render() {
    return `
    <h3 tabindex="0">Favorite Restaurant</h3>
    <skeleton-list></skeleton-list>
    <restaurant-list></restaurant-list>
    `;
  },
  async afterRender() {
    changeTitle("Favorite Restaurant | Lapaaar");
    const favorits = await FavoriteRestaurantIdb.getAllRestaurants();
    const favoriteList = document.querySelector("restaurant-list");
    if (!favorits.length) {
      favoriteList.innerHTML = `<h6>Data Favorit Tidak Ada</h6>`;
      unShowSkeleton(document.querySelector("skeleton-list"));
    } else {
      const item = favorits.map((favorite) => {
        unShowSkeleton(document.querySelector("skeleton-list"));
        const favoriteItem = document.createElement("restaurant-item");
        favoriteItem.restaurant = favorite;
        favoriteItem.setAttribute("id", favorite.id);
        return favoriteItem;
      });
      favoriteList.append(...item);
    }
  },
};
export default Favorite;
