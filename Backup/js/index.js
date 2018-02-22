document.addEventListener('DOMContentLoaded', () => {
  displayHomePage()
})

function displayHomePage () {
  let head = document.getElementById('heading')
  let subHead = document.getElementById('subHeading')
  let nav = document.getElementById('buttonContainer')
  let chevron = document.getElementById('downChevron')

  setTimeout(function () {
    // console.log('buttons')
    nav.classList.remove('hidden')
    nav.classList.add('fadeInDown')
  }, 500)

  setTimeout(function () {
    // console.log('header')
    head.classList.remove('hidden')
    head.classList.add('fadeInRight')
  }, 1000)

  setTimeout(function () {
    // console.log('subheader')
    subHead.classList.remove('hidden')
    subHead.classList.add('fadeInLeft')
  }, 1250)

  setTimeout(function () {
    console.log(chevron)
    chevron.classList.remove('hidden')
    chevron.classList.add('fadeInUp')
    chevron.classList.add('pulse')
    chevron.classList.add('infinite')
    chevron.classList.remove('fadeInUp')
    console.log(chevron)
  }, 1500)
}
