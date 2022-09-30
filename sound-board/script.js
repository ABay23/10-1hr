const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;
  btn.addEventListener('click', () => {
    // btn.classList.add('act');
    stopSong();
    document.getElementById(sound).play();
  });
  const cont = document.getElementById('button-container');
  cont.appendChild(btn);
  activeRemove();
});

function stopSong() {
  sounds.forEach((sound) => {
    document.getElementById(sound).pause();
  });
}
function activeRemove() {
  let contBu = document.getElementsByClassName('btn');
  const box = document.getElementById('button-container');
  // contBu.forEach((button) => {
  //   button.addEventListener('click', (e) => {
  //     box.querySelector('.act')?.classlist.remove('act');

  //     e.currentTarget.classList.add('act');
  //   });

  for (let i = 0; i < contBu.length; i++) {
    contBu[i].addEventListener('click', (e) => {
      const current = document.getElementsByClassName('act');
      if (current.length > 0) {
        current[0].cclassList = current[0].classList.remove('act');
      }
      e.target.classList.add('act');
    });
  }
  // });
}
