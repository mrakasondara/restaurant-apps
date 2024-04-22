const AccordionInitiator = {
  init({ btnAccordionDrinks, btnAccordionFoods }) {
    btnAccordionDrinks.addEventListener('click', (ev) => {
      this._toggleDrawer(ev)
      ev.target.classList.toggle('rotate')
    })
    btnAccordionFoods.addEventListener('click', (ev) => {
      this._toggleDrawer(ev)
      ev.target.classList.toggle('rotate')
    })
  },
  _toggleDrawer(ev) {
    ev.stopPropagation()

    const content = document.querySelector(`ul#${ev.target.dataset.target}`)
    content.classList.toggle('open')
  },
}
export default AccordionInitiator
