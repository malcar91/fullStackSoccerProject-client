const store = require('./../store')

const onSignUpSuccess = function (response) {
  console.log('Welcome ' + response.user.email + ', now login to get in!')
  $('#message').text('Welcome ' + response.user.email + ', now login to get in!')
  $('#sign-up').hide()
  $('#login').show()
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#message2').text('Sign Up failed, try again please')
}

const onLoginSuccess = function (response) {
  console.log(response.user)
  $('#message3').fadeOut(5000).text('Logged in succesfully!').css('color', 'white')
  $('#auth-forms').hide()
  $('#log-out').show()
  $('#chng-pwd').show()
  $('#web-data').show()
  $('form').trigger('reset')
  store.user = response.user
  // store.user.token = response.user
}

const onLoginFailure = function () {
  $('#message').fadeOut(5000).text('WHOOPS, that did not work, try again!')
}

const onChangePasswordSuccess = function () {
  $('#message3').show().fadeOut(5000).text('Password changed SUCCESSFULLY!').css('color', 'white')
  $('#change-password').hide()
  $('#fillout-forms').show()
  $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#message4').fadeOut(3000).text('You did not change password succesfully')
  $('form').trigger('reset')
}

const onLogOutSuccess = function () {
  $('#message').fadeOut(8000).text('Logged out, SEE YOU SOON!')
  $('#webdata').hide()
  $('#auth-forms').show()
  $('#change-password').hide()
  $('#fillout-forms').hide()
  $('#chng-pwd').hide()
  $('#log-out').hide()
  $('form').trigger('reset')
}

const onTeamCreateSuccess = function (response) {
  console.log(response.team)
  $('#fav-team').text(`${response.team.name}, ${response.team.league}, ${response.team.city}, ${response.team._id}`).css('color', 'white')
  // const teamHtml = (`
  //   <p>Team: ${response.team.name}</p>
  //   <p>League: ${response.team.league}</p>
  //   <p>City: ${response.team.city}</p>
  //   <p>Team ID: ${response.team._id}</p>
  //   `)
  $('form').trigger('reset')
  store.team = response.team
}

const onTeamCreateFailure = function () {
  $('#message5').text('Did not create team!')
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
  console.log(response.team)
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
