function openDropdown(dropdown) {
  let exp = document.querySelectorAll(dropdown)
  let items = document.querySelectorAll('.nav-m')
  let hiddenMenu = document.querySelector('.hiddenMenu')
  let contacts = document.querySelector('.hiddenContacts')
  let toggler = document.querySelector('.navbar-toggler-icon')

  for (let el of exp) {
    el.classList.toggle('collapse')
  }
  hiddenMenu.classList.toggle('open')
  contacts.classList.toggle('open')
  toggler.classList.toggle('open')
  if (toggler.classList.contains('open')) {
    toggler.firstElementChild.href.baseVal = 'https://localhost/lesk/wp-content/themes/forest/img/icons.svg#i-xCircle'
  } else {
    toggler.firstElementChild.href.baseVal = 'https://localhost/lesk/wp-content/themes/forest/img/icons.svg#i-toggler'
  }

  if(this.open === 0) {
    window.addEventListener('click', function(e) {
      for (let el of items) {
        if(e.target === el) {
          for (let ele of exp) {
            ele.classList.toggle('collapse')
          }
        }
      }
    })
    if(this.open === 0) {
      this.open++
    }
  }
}

function openDrop(menu) {
  console.log(menu)
  if(menu === '.top_dropHidden') {
    let hiddenA = document.querySelector('.hiddenMenu .dropdown > a')
    hiddenA.classList.toggle('green')
  }
  let el = document.querySelector(menu)

  el.classList.toggle('open')
}

function addClass() {
  let dropdown = document.querySelector('.menu__row .dropdown')
  dropdown.addEventListener('click',() => openDrop('.top_drop'))
  let ul = document.querySelector('.menu__row .dropdown > .sub-menu')
  ul.classList.add('top_drop')
  let dropdown2 = document.querySelector('.hiddenMenu .dropdown')
  dropdown2.addEventListener('click',() => openDrop('.top_dropHidden'))
  let ul2 = document.querySelector('.hiddenMenu .dropdown > .sub-menu')
  ul2.classList.add('top_dropHidden')
}

addClass();