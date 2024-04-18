class JumbotronApp extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    this.innerHTML += `
       <h2>Cari restaurant terbaikmu!</h2>
        `;
  }
}
customElements.define("jumbotron-app", JumbotronApp);
