class JumbotronApp extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML += `
      <div>
        <picture>
          <source media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg" class="lazyload">
          <img src="./images/heros/hero-image_2-large.jpg" alt="jumbotron image" class="lazyload">
        </picture>
        <h2>Cari restaurant terbaikmu!</h2>
      </div>
        `;
  }
}
customElements.define("jumbotron-app", JumbotronApp);
