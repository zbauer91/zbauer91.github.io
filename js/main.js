$(document).ready(() => {
  // Dropdown Initializer
  var dd = document.querySelector('.dropdown-trigger')
  var instance = M.Dropdown.init(dd, {
    alignment: 'right',
    coverTrigger: false
  })
})
