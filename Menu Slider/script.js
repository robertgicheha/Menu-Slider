const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const modal = document.getElementById('modal');
const open = document.getElementById('open');


//Toggle Nav
toggle.addEventListener('click', () =>
  document.body.classList.toggle('show-nav')
);


//show modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

//hide modal
close.addEventListener('click',() => modal.classList.remove('show-modal'));

//hide modal on outside click
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal'):false);