import CONFIG from '../../globals/config'

const createRestaurantItemTemplate = function (restaurant) {
  return `
    <img class="thumb lazyload" data-src=${CONFIG.BASE_IMAGE_URL}/medium/${restaurant.pictureId} alt="gambar restaurant">
    <h4 class="name">
    <a href=/#/detail/${restaurant.id} aria-label="restaurant name"  id="restaurant-name">${restaurant.name}</a></h4>
    <div class="desc">
        <p>
            ${restaurant.description}
        </p>
    </div>
    <p class="city" tabindex="0">${restaurant.city}</p>
`
}

const createRestaurantDetailTemplate = function (restaurant) {
  return `
    <img class="thumb lazyload" data-src=${CONFIG.BASE_IMAGE_URL}/large/${
      restaurant.pictureId
    } alt="gambar restaurant">
    <div class="header">
        <h4 class="name" tabindex="0" aria-label="restaurant name">${
          restaurant.name
        }</h4>
        <p>⭐️<span class="rating" id="rating" aria-label="restaurant rating" tabindex="0">${
          restaurant.rating
        }</span></p>
    </div>
    <h5 class="city" tabindex="0" aria-label="restaurant address">${
      restaurant.city
    } - ${restaurant.address}</h5>
    <div class="desc">
        <p>${restaurant.description}</p>
    </div>
    <div class="menu">
        <div class="drinks">
            <h6>Drinks Menu</h6>
            <ul id="drinks">
                ${restaurant.menus.drinks
                  .map((drink) => `<li>${drink.name}</li>`)
                  .join('')}
            </ul>
            <span class="material-symbols-outlined" id="btn-accordion-drinks" data-target="drinks">expand_more</span>
        </div>
        <div class="foods">
            <h6>Food Menu</h6>
            <ul id="foods">
                ${restaurant.menus.foods
                  .map((food) => `<li>${food.name}</li>`)
                  .join('')}
            </ul>
            <span class="material-symbols-outlined" id="btn-accordion-foods" data-target="foods">expand_more</span>
        </div>
    </div>
    
`
}

const createReviewTemplate = function (customerReviews, wrapper) {
  const newItem = customerReviews.map((review) => {
    const newReviewsComponent = document.createElement('customer-reviews')
    newReviewsComponent.reviews = review
    return newReviewsComponent
  })
  return wrapper.append(...newItem)
}

const createLikeRestaurantButtonTemplate = function () {
  return `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <span class="material-symbols-outlined">heart_plus</span>
  </button>`
}

const createUnlikeRestaurantButtonTemplate = function () {
  return `
  <button aria-label="unlike this restaurant" id="likeButton" class="liked">
    <span class="material-symbols-outlined">heart_minus</span>
  </button>`
}

const createAlertError = function (message) {
  return `
  <div id="alert" class="error">
    <span class="material-symbols-outlined">error</span>
    <p id="alert-message">${message}</p>
  </div>
  `
}
const createAlertSuccess = function (message) {
  return `
  <div id="alert" class="success">
    <span class="material-symbols-outlined">check_circle</span>
      <p id="alert-message">${message}</p>
  </div>
  `
}

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createReviewTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createAlertSuccess,
  createAlertError,
}
