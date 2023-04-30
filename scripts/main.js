const textarea = document.createElement('div');
const keyboard = document.createElement('div');
const lineOne = document.createElement('div');
const lineTwo = document.createElement('div');
const lineThree = document.createElement('div');
const lineFour = document.createElement('div');
const lineFive = document.createElement('div');

textarea.innerHTML = '<textarea class="textarea" autofocus name="" id="" cols="100" rows="10"></textarea>';
document.body.append(textarea);

keyboard.classList = 'keyboard';
document.body.append(keyboard);

lineOne.classList = 'keyboard__line';
lineOne.innerHTML = `
<div class="keyboard__key tilde">ё</div>
<div class="keyboard__key">1</div>
<div class="keyboard__key">2</div>
<div class="keyboard__key">3</div>
<div class="keyboard__key">4</div>
<div class="keyboard__key">5</div>
<div class="keyboard__key">6</div>
<div class="keyboard__key">7</div>
<div class="keyboard__key">8</div>
<div class="keyboard__key">9</div>
<div class="keyboard__key">0</div>
<div class="keyboard__key">-</div>
<div class="keyboard__key">=</div>
<div class="keyboard__key backspace">Backspace</div>`;
keyboard.appendChild(lineOne);

lineTwo.classList = 'keyboard__line';
lineTwo.innerHTML = `
<div class="keyboard__key tab">Tab</div>
<div class="keyboard__key">Й</div>
<div class="keyboard__key">Ц</div>
<div class="keyboard__key">У</div>
<div class="keyboard__key">К</div>
<div class="keyboard__key">Е</div>
<div class="keyboard__key">Н</div>
<div class="keyboard__key">Г</div>
<div class="keyboard__key">Ш</div>
<div class="keyboard__key">Щ</div>
<div class="keyboard__key">З</div>
<div class="keyboard__key">Х</div>
<div class="keyboard__key">Ъ</div>
<div class="keyboard__key slash">\\</div>`;
keyboard.appendChild(lineTwo);

lineThree.classList = 'keyboard__line';
lineThree.innerHTML = `
<div class="keyboard__key caps-lock">Caps Lock</div>
<div class="keyboard__key">Ф</div>
<div class="keyboard__key">Ы</div>
<div class="keyboard__key">В</div>
<div class="keyboard__key">А</div>
<div class="keyboard__key">П</div>
<div class="keyboard__key">Р</div>
<div class="keyboard__key">О</div>
<div class="keyboard__key">Л</div>
<div class="keyboard__key">Д</div>
<div class="keyboard__key">Ж</div>
<div class="keyboard__key">Э</div>
<div class="keyboard__key enter">Enter</div>`;
keyboard.appendChild(lineThree);

lineFour.classList = 'keyboard__line';
lineFour.innerHTML = `
<div class="keyboard__key shift shift__left">Shift</div>
<div class="keyboard__key">Я</div>
<div class="keyboard__key">Ч</div>
<div class="keyboard__key">С</div>
<div class="keyboard__key">М</div>
<div class="keyboard__key">И</div>
<div class="keyboard__key">Т</div>
<div class="keyboard__key">Ь</div>
<div class="keyboard__key">Б</div>
<div class="keyboard__key">Ю</div>
<div class="keyboard__key">.</div>
<div class="keyboard__key shift shift__right">Shift</div>`;
keyboard.appendChild(lineFour);

lineFive.classList = 'keyboard__line';
lineFive.innerHTML = `
<div class="keyboard__key left__ctrl">Ctrl</div>
<div class="keyboard__key win">Win</div>
<div class="keyboard__key alt__left">Alt</div>
<div class="keyboard__key space"></div>
<div class="keyboard__key alt__right">Alt</div>
<div class="keyboard__key right__ctrl">Ctrl</div>
<div class="keyboard__key arrow__left">&larr;</div>
<div class="arrow">
  <div class="keyboard__key up">&uarr;</div>
  <div class="keyboard__key down">&darr;</div>
</div>
<div class="keyboard__key arrow__right">&rarr;</div>`;
keyboard.appendChild(lineFive);

const keys = document.querySelectorAll('.keyboard__key');

for (let i = 0; i < keys.length; i++) {
  keys[i].setAttribute('keyname', keys[i].innerText);
  keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

const spaceKey = document.querySelector('.space');
const shiftRight = document.querySelector('.shift__right');
const shiftLeft = document.querySelector('.shift__left');
const capsLock = document.querySelector('.caps-lock');
const ctrlLeft = document.querySelector('.left__ctrl');
const ctrlRight = document.querySelector('.right__ctrl');
const arrowUp = document.querySelector('.up');
const arrowDown = document.querySelector('.down');
const arrowLeft = document.querySelector('.arrow__left');
const arrowRight = document.querySelector('.arrow__right');
const win = document.querySelector('.win');
const altLeft = document.querySelector('.alt__left');
const altRight = document.querySelector('.alt__right');

window.addEventListener('keydown', (e) => {
  for (let i = 0; i < keys.length; i++) {
    if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
      keys[i].classList.add('active');
    }
    if (e.code == 'Space') {
      spaceKey.classList.add('active');
    }
    if (e.code == 'AltLeft') {
      altRight.classList.remove('active');
    }
    if (e.code == 'AltRight') {
      altLeft.classList.remove('active');
    }
    if (e.code == 'ShiftLeft') {
      shiftRight.classList.remove('active');
    }
    if (e.code == 'ShiftRight') {
      shiftLeft.classList.remove('active');
    }
    if (e.code == 'AltLeft') {
      altLeft.classList.remove('active');
    }
    if (e.code == 'AltRight') {
      altRight.classList.remove('active');
    }
    if (e.code == 'CapsLock') {
      capsLock.classList.toggle('active');
    }
    if (e.code == 'ControlLeft') {
      ctrlLeft.classList.toggle('active');
    }
    if (e.code == 'ControlRight') {
      ctrlRight.classList.toggle('active');
    }
    if (e.code == 'ArrowUp') {
      arrowUp.classList.toggle('active');
    }
    if (e.code == 'ArrowDown') {
      arrowDown.classList.toggle('active');
    }
    if (e.code == 'ArrowLeft') {
      arrowLeft.classList.toggle('active');
    }
    if (e.code == 'ArrowRight') {
      arrowRight.classList.toggle('active');
    }
    if (e.code == 'MetaLeft') {
      win.classList.toggle('active');
    }
    if (e.code == 'AltLeft') {
      altLeft.classList.add('active');
    }
    if (e.code == 'AltRight') {
      altRight.classList.add('active');
    }
  }
});

window.addEventListener('keyup', (e) => {
  for (let i = 0; i < keys.length; i++) {
    if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
      keys[i].classList.remove('active');
    }
    if (e.code == 'Space') {
      spaceKey.classList.remove('active');
    }
    if (e.code == 'AltLeft') {
      altRight.classList.remove('active');
    }
    if (e.code == 'AltRight') {
      altLeft.classList.remove('active');
    }
    if (e.code == 'ShiftLeft') {
      shiftRight.classList.remove('active');
    }
    if (e.code == 'ShiftRight') {
      shiftLeft.classList.remove('active');
    }
    if (e.code == 'AltLeft') {
      altLeft.classList.remove('active');
    }
    if (e.code == 'AltRight') {
      altRight.classList.remove('active');
    }
    if (e.code == 'CapsLock') {
      capsLock.classList.remove('active');
    }
    if (e.code == 'ControlLeft') {
      ctrlLeft.classList.remove('active');
    }
    if (e.code == 'ControlRight') {
      ctrlRight.classList.remove('active');
    }
    if (e.code = 'ArrowUp') {
      arrowUp.classList.remove('active');
    }
    if (e.code == 'ArrowDown') {
      arrowDown.classList.remove('active');
    }
    if (e.code = 'ArrowLeft') {
      arrowLeft.classList.remove('active');
    }
    if (e.code == 'ArrowRight') {
      arrowRight.classList.remove('active');
    }
    if (e.code == 'MetaLeft') {
      win.classList.remove('active');
    }
    if (e.code == 'AltLeft') {
      altLeft.classList.remove('active');
    }
    if (e.code == 'AltRight') {
      altRight.classList.remove('active');
    }
  }
});
