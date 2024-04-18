class RestaurantItem extends HTMLElement {
  _restaurant = {
    id: null,
    name: null,
    description: null,
    pictureId: null,
    city: null,
  };
  constructor() {
    super();
  }
  set restaurant(value) {
    this._restaurant = value;
    this.render();
  }
  get restaurant() {
    return this._restaurant;
  }
  render() {
    this.innerHTML += `
            <img class="thumb" src=${this._restaurant.pictureId} alt="gambar restaurant">
            <h4 class="name" tabindex="0">${this._restaurant.name}</h4>
            <div class="desc">
            <p>
              ${this._restaurant.description}
            </p>
            </div>
            <p class="city" tabindex="0">${this._restaurant.city}</p>
    `;
  }
}

customElements.define("restaurant-item", RestaurantItem);
