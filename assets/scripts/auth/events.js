const getFormFields = require('./../../../lib/get-form-fields.js')

const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('./../store.js')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onLogin = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.login(data)
    .then(ui.onLoginSuccess)
    .catch(ui.onLoginFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onLogOut = function (event) {
  event.preventDefault()

  api.logOut(event)
    .then(ui.onLogOutSuccess)
}

const onTeamCreate = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.teamCreate(data)
    .then(ui.onTeamCreateSuccess)
    .catch(ui.onTeamCreateFailure)
}

const onShowTeam = function (event) {
  event.preventDefault()

  api.showTeam()
    .then(ui.onShowTeamSuccess)
    .catch(ui.onShowTeamFailure)
}

const onUpdateTeam = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updateTeam(data)
    .then(ui.onUpdateTeamSuccess)
    .catch(ui.onUpdateTeamFailure)
}

const onIndex = function (event) {
  event.preventDefault()

  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

module.exports = {
  onSignUp,
  onLogin,
  onChangePassword,
  onLogOut,
  onTeamCreate,
  onShowTeam,
  onIndex,
  onUpdateTeam
}
