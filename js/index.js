document.addEventListener('DOMContentLoaded', () => {
  displayHomePage()
})

function displayHomePage () {
  let head = document.getElementById('heading')
  let subHead = document.getElementById('subHeading')
  let nav = document.getElementById('buttonContainer')

  setTimeout(() => {
    // console.log('buttons')
    nav.classList.remove('hidden')
    nav.classList.add('fadeInDown')
  }, 500)

  setTimeout(() => {
    // console.log('header')
    head.classList.remove('hidden')
    head.classList.add('fadeInRight')
  }, 1500)

  setTimeout(() => {
    // console.log('subheader')
    subHead.classList.remove('hidden')
    subHead.classList.add('fadeInLeft')
  }, 2500)
}
