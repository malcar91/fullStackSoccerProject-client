const config = require('./../config')
const store = require('./../store.js')

const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: {
      credentials: {
        email: data.credentials.email,
        password: data.credentials.password,
        password_confirmation: data.credentials.password_confirmation
      }
    }
  })
}

const login = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: {
      credentials: {
        email: data.credentials.email,
        password: data.credentials.password
      }
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      passwords: {
        old: data.passwords.old,
        new: data.passwords.new
      }
    }
  })
}

const logOut = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const teamCreate = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/teams',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      team: {
        name: data.team.name,
        league: data.team.league,
        city: data.team.city
      }
    }
  })
}

const showTeam = function () {
  return $.ajax({
    url: config.apiUrl + '/teams/:id',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/teams',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
}

const updateTeam = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiUrl + '/teams/' + data.team.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      team: {
        name: data.team.name,
        league: data.team.league,
        city: data.team.city
      }
    }
  })
}

module.exports = {
  signUp,
  login,
  changePassword,
  logOut,
  teamCreate,
  showTeam,
  index,
  updateTeam
}
