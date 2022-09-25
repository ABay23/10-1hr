const open = document.getElementById('open');
const close = document.getElementById('close');
const cont = document.getElementById('container');

console.log(cont);

open.addEventListener('click', () => {
  cont.classList.add('active');
});

close.addEventListener('click', () => {
  cont.classList.remove('active');
});
