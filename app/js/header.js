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
    toggler.firstElementChild.href.baseVal = 'img/icons.svg#i-xCircle'
  } else {
    toggler.firstElementChild.href.baseVal = 'img/icons.svg#i-toggler'
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
  if(menu === '.top_dropHidden') {
    let hiddenA = document.querySelector('.hidden-toggle')
    hiddenA.classList.toggle('green')
  }
  let el = document.querySelector(menu)

  el.classList.toggle('open')
}