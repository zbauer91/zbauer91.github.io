document.addEventListener('DOMContentLoaded', function () {
  const data = lifeStory
  // Initializers
  // Dropdown
  let dd = document.querySelectorAll('.dropdown-trigger')
  let instance = M.Dropdown.init(dd, {
    alignment: 'right',
    coverTrigger: false,
    constrainWidth: false
  })

  // Add information into document:
  for (let element in data.landing) {
    document.querySelector(`#${element}`).innerHTML = data.landing[element]
  }

  // programmatically populate links to avoid duplication in as many places as possible
  for (let element in data.navBar) {
    let listItem = document.querySelector(`#${element}`)
    object = data.navBar[element]
    listItem.innerHTML = `<a href="${object.link}" target="_blank" class="nav-link"><i class="${object.icon}"></i>${object.text}</a>`
  }
  // photo
  let photo = document.querySelector('.personal-photo')
  photo.setAttribute('src', data.about.personalPhoto)
  photo.setAttribute('alt', data.about.photoAlt)
  // tagline and body
  document.querySelector('.tagline').innerHTML = data.about.tagline
  document.querySelector('.brand-statement').innerHTML =
    data.about.brandStatement

  // skills section
  let skills = document.querySelector('.skill-row')
  data.skills.forEach(function (element) {
    var newSkill = document.createElement('div')
    newSkill.classList.add('skill')
    newSkill.innerHTML = element
    skills.appendChild(newSkill)
  })

  // projects section
  let projects = document.querySelectorAll('.project')

  projects.forEach(function (element) {
    // pulls in object related to this element
    let obj = data.projects[element.getAttribute('id')]
    element.querySelector('.project-title').innerHTML = obj.title
    element.querySelector('.project-text').innerHTML = obj.description
    var links = ['deploy', 'front', 'back']
    for (i in links) {
      let anchor = element.querySelector(`.${links[i]}`)
      if (anchor) {
        anchor.setAttribute('href', obj[links[i]].link)
        anchor.innerHTML = obj[links[i]].title
      }
    }
  })
})
