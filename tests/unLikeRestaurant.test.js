import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb'
import * as TestFactories from './helpers/testFactories'

describe('Unlike A Restaurant', () => {
  const addLikeContainer = () => {
    document.body.innerHTML = `
        <div id="likeContainer"></div>
        <div id="dummyAlert"></div>
        `
  }

  beforeEach(async () => {
    addLikeContainer()
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 })
  })

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1)
  })

  it('should show the unlike button when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeTruthy()
  })

  it('should not show the like button when the restaurant has been liked ', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })

    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeFalsy()
  })

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })

    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'))
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([])
  })
  it('should not throw error when user click unlike widget if the unliked restaurant not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })

    await FavoriteRestaurantIdb.deleteRestaurant(1)

    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'))
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([])
  })
})
