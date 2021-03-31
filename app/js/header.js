function openDropdown(dropdown) {
  let exp = document.querySelectorAll(dropdown)
  let hiddenMenu = document.querySelector('.hiddenMenu')
  let contacts = document.querySelector('.hiddenContacts')
  let toggler = document.querySelector('.navbar-toggler:not(.close)')
	let toggler2 = document.querySelector('.navbar-toggler.close')
	
  for (let el of exp) {
    el.classList.toggle('collapse')
  }
  hiddenMenu.classList.toggle('open')
  contacts.classList.toggle('open')
	toggler.classList.toggle('close')
	toggler2.classList.toggle('close')
}

function openDrop(menu) {
  if(menu === '.top_dropHidden') {
    let hiddenA = document.querySelector('.hiddenMenu .dropdown > a')
    hiddenA.classList.toggle('green')
  }
  let el = document.querySelector(menu)

  el.classList.toggle('open')
	el.parentElement.classList.toggle('fully')
}

function addClass() {
  let dropdown = document.querySelector('.menu__row .dropdown')
	if(dropdown) {
		dropdown.addEventListener('click',() => openDrop('.top_drop'))
		let ul = document.querySelector('.menu__row .dropdown > .sub-menu')
		ul.classList.add('top_drop')
		
		let dropdown2 = document.querySelector('.hiddenMenu .dropdown')
		dropdown2.addEventListener('click',() => openDrop('.top_dropHidden'))
		
		let ul2 = document.querySelector('.hiddenMenu .dropdown > .sub-menu')
		ul2.classList.add('top_dropHidden')
	}
}

addClass();

