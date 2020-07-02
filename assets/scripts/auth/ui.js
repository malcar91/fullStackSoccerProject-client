const store = require('./../store')

const onSignUpSuccess = function () {
  $('#message').text('Sign Up succesful, now log in please!')
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#message').text('Sign Up failed, try again please')
}

const onLoginSuccess = function (response) {
  console.log(response.user)
  $('#message').text('Logged In, WELCOME!')
  $('form').trigger('reset')
  store.user = response.user
  // store.user.token = response.user
}

const onLoginFailure = function () {
  $('#message').text('WHOOPS, that did not work, try again!')
}

const onChangePasswordSuccess = function () {
  $('#message').text('Password changed SUCCESSFULLY!')
  $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#message').text('You did not change password succesfully')
  $('form').trigger('reset')
}

const onLogOutSuccess = function () {
  $('#message').text('Logged out, SEE YOU SOON!')
  $('form').trigger('reset')
}

const onTeamCreateSuccess = function (response) {
  console.log(response.team)
  $('#message').text(`${response.team.name}, ${response.team.league}, ${response.team.city}`)
  $('form').trigger('reset')
  store.team = response.team
}

const onTeamCreateFailure = function () {
  $('#message').text('Did not create team!')
  $('form').trigger('reset')
}

const onShowTeamSuccess = function (response) {
  console.log(response)
  $('#fav-team').text('your team')
  $('form').trigger('reset')
  store.user = response.user
}

const onShowTeamFailure = function () {
  $('#fav-team').text('Unable to pull up fav team')
  $('form').trigger('reset')
}

const onIndexSuccess = function (response) {
  console.log(response)
  $('#fav-team').text(`${response.teams}`)
}
const onIndexFailure = function () {
  console.log('unable to pull up')
}

const onUpdateTeamSuccess = function (response) {
  console.log(response)
  // $('#message').text('TEAM UPDATED')
  // $('#fav-team').text(`${response.team.name}, ${response.team.league}, ${response.team.city}, ${response.team._id}`)
}

// const onUpdateTeamFailure = function () {
//   $('#fav-team').text('unable to update')
// }

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onLoginSuccess,
  onLoginFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onLogOutSuccess,
  store,
  onTeamCreateSuccess,
  onTeamCreateFailure,
  onShowTeamSuccess,
  onShowTeamFailure,
  onIndexSuccess,
  onIndexFailure,
  onUpdateTeamSuccess
  // onUpdateTeamFailure
}
