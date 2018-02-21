document.addEventListener('DOMContentLoaded', function () {
  // Dropdown Initializer
  var dd = document.querySelectorAll('.dropdown-trigger')
  var instance = M.Dropdown.init(dd, {
    alignment: 'right',
    coverTrigger: false,
    constrainWidth: false
  })
})
