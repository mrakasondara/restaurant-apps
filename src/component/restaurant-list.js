class RestaurantList extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    this.innerHTML += "";
  }
}
customElements.define("restaurant-list", RestaurantList);
