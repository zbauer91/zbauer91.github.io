document.addEventListener('DOMContentLoaded', function () {
  var data = lifeStory
  // Initializers
  // Dropdown
  let dd = document.querySelectorAll('.dropdown-trigger')
  let instance = M.Dropdown.init(dd, {
    alignment: 'right',
    coverTrigger: false,
    constrainWidth: false
  })

  // Add information into document:
  document.querySelector('#header').innerHTML = data.landing.header
  document.querySelector('#subHeader').innerHTML = data.landing.subHeader

  // programmatically populate links to avoid duplication in as many places as possible
  for (let element in data.navBar) {
    listItem = document.querySelector(`#${element}`)
    object = data.navBar[element]
    listItem.innerHTML = `<a href="${object.link}" target="_blank" class="nav-link"><i class="${object.icon}"></i>${object.text}</a>`
  }
})
