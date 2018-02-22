document.addEventListener('DOMContentLoaded', function () {
  // Initializers
  // Dropdown
  let dd = document.querySelectorAll('.dropdown-trigger')
  let instance = M.Dropdown.init(dd, {
    alignment: 'right',
    coverTrigger: false,
    constrainWidth: false
  })
})
