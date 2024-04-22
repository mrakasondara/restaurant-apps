import RestaurantApi from '../../data/restaurant-api'
import RestaurantItem from '../../../component/restaurant-item'
import QuotesApp from '../../../component/quotes-app'
import AlertApp from '../../../component/alert-app'
import changeTitle from '../../utils/change-title'
import LoadingApp from '../../../component/loading-app'
const Home = {
  async render() {
    return `
        <jumbotron-app></jumbotron-app>
        <h3 tabindex="0">Restaurant List</h3>
        <restaurant-list></restaurant-list>
        <quotes-app></quotes-app>
        <alert-app></alert-app>
        `
  },
  async afterRender() {
    changeTitle('Lapaaar | Restaurant Apps')
    const restaurants = await RestaurantApi.getAllRestaurant()
    const restaurantList = document.querySelector('restaurant-list')
    console.log(restaurants)
    const item = restaurants.map((res) => {
      const restaurantItem = document.createElement('restaurant-item')
      restaurantItem.restaurant = res
      restaurantItem.setAttribute('id', res.id)
      document.querySelector('loading-app').style.display = 'none'
      return restaurantItem
    })

    restaurantList.append(...item)
  },
}
export default Home
