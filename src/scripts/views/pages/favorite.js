import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'
import changeTitle from '../../utils/change-title'

const Favorite = {
  async render() {
    return `
    <h3 tabindex="0">Favorite Restaurant</h3>
    <restaurant-list></restaurant-list>
    `
  },
  async afterRender() {
    changeTitle('Favorite Restaurant | Lapaaar')
    document.querySelector('loading-app').style.display = 'flex'
    const favorits = await FavoriteRestaurantIdb.getAllRestaurants()
    const favoriteList = document.querySelector('restaurant-list')
    if (!favorits.length) {
      favoriteList.innerHTML = `<h6>Data Favorit Tidak Ada</h6>`
      document.querySelector('loading-app').style.display = 'none'
    } else {
      const item = favorits.map((favorite) => {
        document.querySelector('loading-app').style.display = 'none'
        const favoriteItem = document.createElement('restaurant-item')
        favoriteItem.restaurant = favorite
        favoriteItem.setAttribute('id', favorite.id)
        return favoriteItem
      })
      favoriteList.append(...item)
    }
  },
}
export default Favorite
