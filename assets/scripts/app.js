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
})
