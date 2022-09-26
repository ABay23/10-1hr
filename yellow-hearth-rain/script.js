function createHearth() {
  const hearth = document.createElement('div');
  hearth.classList.add('hearth');

  hearth.style.left = Math.random() * 100 + 'vw';
  hearth.style.animationDuration = Math.random() * 2 + 3 + 's';

  hearth.innerText = '💛';
  document.body.appendChild(hearth);

  setTimeout(() => {
    hearth.remove();
  }, 5000);
}

setInterval(createHearth, 300);
