/* eslint-disable no-console */
const textarea = document.createElement('div');
const keyboard = document.createElement('div');
const lineOne = document.createElement('div');
const lineTwo = document.createElement('div');
const lineThree = document.createElement('div');
const lineFour = document.createElement('div');
const lineFive = document.createElement('div');

textarea.innerHTML = '<textarea class="textarea" autofocus name="" id="area" cols="100" rows="10"></textarea>';
document.body.append(textarea);

keyboard.classList = 'keyboard';
document.body.append(keyboard);

lineOne.classList = 'keyboard__line';
lineOne.innerHTML = `
<div data-action="192" class="keyboard__key tilde">\`</div>
<div data-action="49" class="keyboard__key">1</div>
<div data-action="50" class="keyboard__key">2</div>
<div data-action="51" class="keyboard__key">3</div>
<div data-action="52" class="keyboard__key">4</div>
<div data-action="53" class="keyboard__key">5</div>
<div data-action="54" class="keyboard__key">6</div>
<div data-action="55" class="keyboard__key">7</div>
<div data-action="56" class="keyboard__key">8</div>
<div data-action="57" class="keyboard__key">9</div>
<div data-action="48" class="keyboard__key">0</div>
<div data-action="189" class="keyboard__key">-</div>
<div data-action="187" class="keyboard__key">=</div>
<div data-action="8" class="keyboard__key backspace">Backspace</div>`;
keyboard.appendChild(lineOne);

lineTwo.classList = 'keyboard__line';
lineTwo.innerHTML = `
<div data-action="9" class="keyboard__key tab">Tab</div>
<div data-action="81" class="keyboard__key">Q</div>
<div data-action="87" class="keyboard__key">W</div>
<div data-action="69" class="keyboard__key">E</div>
<div data-action="82" class="keyboard__key">R</div>
<div data-action="84" class="keyboard__key">T</div>
<div data-action="89" class="keyboard__key">Y</div>
<div data-action="85" class="keyboard__key">U</div>
<div data-action="73" class="keyboard__key">I</div>
<div data-action="79" class="keyboard__key">O</div>
<div data-action="80" class="keyboard__key">P</div>
<div data-action="219" class="keyboard__key">[</div>
<div data-action="221" class="keyboard__key">]</div>
<div data-action="220" class="keyboard__key slash">\\</div>`;
keyboard.appendChild(lineTwo);

lineThree.classList = 'keyboard__line';
lineThree.innerHTML = `
<div data-action="20" class="keyboard__key caps-lock">Caps Lock</div>
<div data-action="65" class="keyboard__key">A</div>
<div data-action="83" class="keyboard__key">S</div>
<div data-action="68" class="keyboard__key">D</div>
<div data-action="70" class="keyboard__key">F</div>
<div data-action="71" class="keyboard__key">G</div>
<div data-action="72" class="keyboard__key">H</div>
<div data-action="74" class="keyboard__key">J</div>
<div data-action="75" class="keyboard__key">K</div>
<div data-action="76" class="keyboard__key">L</div>
<div data-action="186" class="keyboard__key">;</div>
<div data-action="222" class="keyboard__key">'</div>
<div data-action="13" class="keyboard__key enter">Enter</div>`;
keyboard.appendChild(lineThree);

lineFour.classList = 'keyboard__line';
lineFour.innerHTML = `
<div data-action="16" class="keyboard__key shift shift__left">Shift</div>
<div data-action="90" class="keyboard__key">Z</div>
<div data-action="88" class="keyboard__key">X</div>
<div data-action="67" class="keyboard__key">C</div>
<div data-action="86" class="keyboard__key">V</div>
<div data-action="66" class="keyboard__key">B</div>
<div data-action="78" class="keyboard__key">N</div>
<div data-action="77" class="keyboard__key">M</div>
<div data-action="188" class="keyboard__key">,</div>
<div data-action="190" class="keyboard__key">.</div>
<div data-action="191" class="keyboard__key">/</div>
<div data-action="16" class="keyboard__key shift shift__right">Shift</div>`;
keyboard.appendChild(lineFour);

lineFive.classList = 'keyboard__line';
lineFive.innerHTML = `
<div data-action="17" class="keyboard__key left__ctrl">Ctrl</div>
<div data-action="91" class="keyboard__key win">Win</div>
<div data-action="18" class="keyboard__key alt__left">Alt</div>
<div data-action="32" class="keyboard__key space"></div>
<div data-action="18" class="keyboard__key alt__right">Alt</div>
<div data-action="17" class="keyboard__key right__ctrl">Ctrl</div>
<div data-action="37" class="keyboard__key arrow__left">&larr;</div>
<div class="arrow">
  <div data-action="38" class="keyboard__key up">&uarr;</div>
  <div data-action="40" class="keyboard__key down">&darr;</div>
</div>
<div data-action="39" class="keyboard__key arrow__right">&rarr;</div>`;
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
      ctrlLeft.classList.remove('active');
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

function mouseClick(e) {
  const { action } = e.target.dataset;
  area.value += String.fromCharCode(action);
}

const key = document.getElementsByClassName('keyboard__key');
[...key].forEach((item) => item.addEventListener('click', mouseClick));

document.addEventListener('mousedown', (e) => {
  for (let i = 0; i < keys.length; i++) {
    if (e.target == keys[i] || e.key == keys[i]) {
      keys[i].classList.toggle('active');
    }
  }
});

document.addEventListener('mouseup', (e) => {
  for (let i = 0; i < keys.length; i++) {
    if (e.target == keys[i] || e.key == keys[i]) {
      keys[i].classList.toggle('active');
    }
  }
});
