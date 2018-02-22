const lifeStory = require('../assets/text/lifeStory.json')

document.addEventListener('DOMContentLoaded', function () {
  // Initializers
  // Dropdown
  let dd = document.querySelectorAll('.dropdown-trigger')
  let instance = M.Dropdown.init(dd, {
    alignment: 'right',
    coverTrigger: false,
    constrainWidth: false
  })

  // Main Code
  // media query list for DOM manipulation
  var smallPage = window.matchMedia('(max-width: 600px)')
  var mediumPage = window.matchMedia('(max-width: 992px)')
  var largePage = window.matchMedia('(min-width: 993px)')
  var xLargePage = window.matchMedia('(min-width: 1200px)')

  function navBarHalfDropdown () {
    // code
  }
  function navBarAllDropdown () {
    // code
  }
})
