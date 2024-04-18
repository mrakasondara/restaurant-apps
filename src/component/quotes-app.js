class QuotesApp extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    this.innerHTML += `
            <h6><cite>"A restaurant should remove you from the mundane burdens of everyday life and transport you to another world"</cite></h6>
            <p>- Danny Meyer -</p>
        `;
  }
}
customElements.define("quotes-app", QuotesApp);
