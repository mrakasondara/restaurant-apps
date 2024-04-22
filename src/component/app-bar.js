class AppBar extends HTMLElement {
  constructor() {
    super()
    this.render()
  }

  render() {
    this.innerHTML += `
        <h1 arial-label="judul-aplikasi" tabindex="0">Lapaaar</h1>
        <button id="btn-drawer" arial-label="tombol menu">
          <span class="material-symbols-outlined">Menu</span>
        </button>
        <nav>
        <ul>
            <li><a href="#/" arial-label="tautan beranda">Home</a></li>
            <li><a href="#/favorite" arial-label="tautan favorite">Favorite</a></li>
            <li><a href="https://github.com/mrakasondara" target="_blank" arial-label="tautan about">About</a></li>
        </ul>
        </nav>
        `
  }
}

customElements.define('app-bar', AppBar)
