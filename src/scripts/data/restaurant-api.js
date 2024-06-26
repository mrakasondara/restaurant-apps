import API_ENDPOINT from '../globals/api-endpoint'

class RestaurantApi {
  static async getAllRestaurant() {
    const response = await fetch(API_ENDPOINT.HOME)
    const responseJson = await response.json()
    return responseJson
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    return response.json()
  }
}
export default RestaurantApi
