import RestaurantApi from '../../data/restaurant-api'
import RestaurantItem from '../../../component/restaurant-item'
import QuotesApp from '../../../component/quotes-app'
import AlertApp from '../../../component/alert-app'
import changeTitle from '../../utils/change-title'
import LoadingApp from '../../../component/loading-app'
import AlertInitiator from '../../utils/alert-initiator'

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
    const alertContainer = document.querySelector('alert-app')
    changeTitle('Lapaaar | Restaurant Apps')
    const { error, message, restaurants } =
      await RestaurantApi.getAllRestaurant()
    if (!error) {
      const restaurantList = document.querySelector('restaurant-list')
      const item = restaurants.map((res) => {
        const restaurantItem = document.createElement('restaurant-item')
        restaurantItem.restaurant = res
        restaurantItem.setAttribute('id', res.id)
        document.querySelector('loading-app').style.display = 'none'
        return restaurantItem
      })
      AlertInitiator.init({
        alertContainer,
        errorStatus: error,
        message: 'Berhasil mendapatkan data !',
      })
      restaurantList.append(...item)
    } else {
      AlertInitiator.init({
        alertContainer,
        errorStatus: error,
        message,
      })
    }
  },
}
export default Home
