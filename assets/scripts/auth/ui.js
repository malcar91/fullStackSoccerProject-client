const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text('Welcome ' + response.user.email + ', now login to get in!')
  $('#sign-up').hide()
  $('#login').show()
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#message2').text('Sign Up failed, try again please')
}

const onLoginSuccess = function (response) {
  $('#message3').fadeOut(8000).text('Logged in succesfully!').css('color', 'white').css('background', 'black')
  $('#auth-forms').hide()
  $('#log-out').show()
  $('#chng-pwd').show()
  $('#show-index').show()
  $('.header-bar').show()
  $('#fav-table').show()
  $('form').trigger('reset')
  store.user = response.user
}

const onLoginFailure = function () {
  $('#message').fadeOut(5000).text('WHOOPS, that did not work, try again!')
}

const onChangePasswordSuccess = function () {
  $('#message3').show().fadeOut(5000).text('Password changed SUCCESSFULLY!').css('color', 'white').css('background', 'black')
  $('#change-password').hide()
  // $('#fillout-forms').show()
  $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#message4').fadeOut(3000).text('You did not change password successfully')
  $('form').trigger('reset')
}

const onLogOutSuccess = function () {
  $('#message').show().fadeOut(8000).text('Logged out, SEE YOU SOON!').css('color', 'white').css('background', 'black')
  $('#webdata').hide()
  $('#auth-forms').show()
  $('#change-password').hide()
  $('#fillout-forms').hide()
  $('#chng-pwd').hide()
  $('#log-out').hide()
  $('.header-bar').hide()
  $('#fav-table').hide()
  $('form').trigger('reset')
}

const onTeamCreateSuccess = function (response) {
  $('#message5').show().fadeOut(5000).text('Team created check below!')
  $('#t-name').text(`${response.team.name}`)
  $('#t-league').text(`${response.team.league}`)
  $('#t-city').text(`${response.team.city}`)
  $('#t-id').text(`${response.team._id}`)
  $('form').trigger('reset')
  store.team = response.team
}

const onTeamCreateFailure = function () {
  $('#message5').text('Did not create team!')
  $('form').trigger('reset')
}

// const onShowTeamSuccess = function (data) {
//   console.log(data)
//   store.team = data.team
// }
//
// const onShowTeamFailure = function () {
//   $('#fav-team').text('Unable to pull up fav team')
//   $('form').trigger('reset')
// }
//
// const onIndexSuccess = function (response) {
//   console.log(response)
//   $('#fav-team').text(`${response.team.name}, ${response.team._id}`)
// }
// const onIndexFailure = function () {
//   console.log('unable to pull up')
// }

const onUpdateTeamSuccess = function (data) {
  // $('#t-name').text(`${team.name}`)
  // $('#t-league').text(`${team.league}`)
  // $('#t-city').text(`${team.city}`)
  // $('#t-id').text(`${team._id}`)
  $('#updated-team').show().fadeOut(5000).text('Team updated!')
}

const onUpdateTeamFailure = function () {
  $('#fav-team').text('unable to update')
}

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
  onUpdateTeamSuccess,
  onUpdateTeamFailure
}
