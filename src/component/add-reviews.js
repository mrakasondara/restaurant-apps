class AddReviews extends HTMLElement {
  constructor() {
    super()
    this.render()
  }

  render() {
    this.innerHTML += `
        <h6>Add Reviews</h6>
        <form>
            <label for="name" hidden></label>
            <input type="text" class="name" id="name" placeholder="Your name" name="name"/>
            <label for="reviews" hidden></label>
            <textarea name="reviews" id="reviews" placeholder="Your review" cols="10" rows="3"></textarea>
            <button>Add Your Review</button>
        </form>
        `
  }
}
customElements.define('add-reviews', AddReviews)
