'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const futbolApp = require('./auth/events')

$(() => {
  $('#sign-up').on('submit', futbolApp.onSignUp)
  $('#login').on('submit', futbolApp.onLogin)
  $('#change-password').on('submit', futbolApp.onChangePassword)
  $('#log-out').on('click', futbolApp.onLogOut)

  $('#team-create').on('submit', futbolApp.onTeamCreate)
  $('#show-team').on('click', futbolApp.onShowTeam)
  $('#update-team').on('submit', futbolApp.onUpdateTeam)
  $('#index').on('click', futbolApp.onIndex)

  $('#sign-up').hide()
  $('#sign-link').click(function () {
    $('#sign-up').show()
    $('#login').hide()
  })

  $('#log-out').hide()
  $('#change-password').hide()
  $('#chng-pwd').hide()
  $('#web-data').hide()

  $('.menu').ready(function () {
    $('.first-button').on('click', function () {
      $('.animated-icon1').toggleClass('open')
    })
  })

  $('#chng-pwd').click(function () {
    $('#change-password').show()
    $('#fillout-forms').hide()
  })

  $('.update-form').hide()
  $('.update-team').css('background', 'none')

  $('.update-team').click(function () {
    $('.create-form').hide()
    $('.update-form').show()
    $('.create-team').css('background', 'none')
    $('.update-team').css('background', '#f1f1f1')
  })
  $('.create-team').click(function () {
    $('.update-form').hide()
    $('.create-form').show()
    $('.update-team').css('background', 'none')
    $('.create-team').css('background', '#f1f1f1')
  })
})
