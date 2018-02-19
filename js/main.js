$(document).ready(() => {
  // Multiple instances, no options needed. keeping jQuery for now
  $('.parallax').parallax()

  // Sidenav initializer
  var sn = document.querySelector('.sidenav')
  var instance_sn = M.Sidenav.init(sn, { edge: 'right', draggable: true })
})
