import {
  createAlertError,
  createAlertSuccess,
} from '../views/templates/template-creator'

const AlertInitiator = {
  async init({ alertContainer, errorStatus, message }) {
    this._alertContainer = alertContainer
    this._errorStatus = errorStatus
    this._message = message

    await this._renderAlert()
  },
  _renderAlert() {
    if (!this._errorStatus) {
      this._alertSuccess()
    } else {
      this._alertError()
    }
  },
  _alertSuccess() {
    this._alertContainer.innerHTML = createAlertSuccess(this._message)
    const alert = document.querySelector('#alert')
    alert.classList.add('active')
    setTimeout(() => {
      alert.classList.remove('active')
    }, 2500)
  },
  _alertError() {
    this._alertContainer.innerHTML = createAlertError(this._message)
    const alert = document.querySelector('#alert')
    alert.classList.add('active')
    setTimeout(() => {
      alert.classList.remove('active')
    }, 2500)
  },
}
export default AlertInitiator
