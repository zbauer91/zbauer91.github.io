$(document).ready(() => {
  // Multiple instances, no options needed. keeping jQuery for now
  $('.parallax').parallax()

  // Dropdown Initializer
  var dd = document.querySelector('.dropdown-trigger')
  var instance = M.Dropdown.init(dd, {
    alignment: 'right',
    coverTrigger: false
  })
})
