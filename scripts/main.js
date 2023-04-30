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
<div data-code="192" class="keyboard__key tilde">ё</div>
<div data-code="49" class="keyboard__key">1</div>
<div data-code="50" class="keyboard__key">2</div>
<div data-code="51" class="keyboard__key">3</div>
<div data-code="52" class="keyboard__key">4</div>
<div data-code="53" class="keyboard__key">5</div>
<div data-code="54" class="keyboard__key">6</div>
<div data-code="55" class="keyboard__key">7</div>
<div data-code="56" class="keyboard__key">8</div>
<div data-code="57" class="keyboard__key">9</div>
<div data-code="48" class="keyboard__key">0</div>
<div data-code="189" class="keyboard__key">-</div>
<div data-code="187" class="keyboard__key">=</div>
<div data-code="8" class="keyboard__key backspace">Backspace</div>`;
keyboard.appendChild(lineOne);

lineTwo.classList = 'keyboard__line';
lineTwo.innerHTML = `
<div data-code="9" class="keyboard__key tab">Tab</div>
<div data-code="81" class="keyboard__key">Й</div>
<div data-code="87" class="keyboard__key">Ц</div>
<div data-code="69" class="keyboard__key">У</div>
<div data-code="82" class="keyboard__key">К</div>
<div data-code="84" class="keyboard__key">Е</div>
<div data-code="89" class="keyboard__key">Н</div>
<div data-code="85" class="keyboard__key">Г</div>
<div data-code="73" class="keyboard__key">Ш</div>
<div data-code="79" class="keyboard__key">Щ</div>
<div data-code="80" class="keyboard__key">З</div>
<div data-code="219" class="keyboard__key">Х</div>
<div data-code="221" class="keyboard__key">Ъ</div>
<div data-code="220" class="keyboard__key slash">\\</div>`;
keyboard.appendChild(lineTwo);

lineThree.classList = 'keyboard__line';
lineThree.innerHTML = `
<div data-code="20" class="keyboard__key caps-lock">Caps Lock</div>
<div data-code="65" class="keyboard__key">Ф</div>
<div data-code="83" class="keyboard__key">Ы</div>
<div data-code="68" class="keyboard__key">В</div>
<div data-code="70" class="keyboard__key">А</div>
<div data-code="71" class="keyboard__key">П</div>
<div data-code="72" class="keyboard__key">Р</div>
<div data-code="74" class="keyboard__key">О</div>
<div data-code="75" class="keyboard__key">Л</div>
<div data-code="76" class="keyboard__key">Д</div>
<div data-code="186" class="keyboard__key">Ж</div>
<div data-code="222" class="keyboard__key">Э</div>
<div data-code="13" class="keyboard__key enter">Enter</div>`;
keyboard.appendChild(lineThree);

lineFour.classList = 'keyboard__line';
lineFour.innerHTML = `
<div data-code="16" class="keyboard__key shift">Shift</div>
<div data-code="90" class="keyboard__key">Я</div>
<div data-code="88" class="keyboard__key">Ч</div>
<div data-code="67" class="keyboard__key">С</div>
<div data-code="86" class="keyboard__key">М</div>
<div data-code="66" class="keyboard__key">И</div>
<div data-code="78" class="keyboard__key">Т</div>
<div data-code="77" class="keyboard__key">Ь</div>
<div data-code="188" class="keyboard__key">Б</div>
<div data-code="190" class="keyboard__key">Ю</div>
<div data-code="191" class="keyboard__key">.</div>
<div data-code="16" class="keyboard__key shift">Shift</div>`;
keyboard.appendChild(lineFour);

lineFive.classList = 'keyboard__line';
lineFive.innerHTML = `
<div data-code="17" class="keyboard__key">Ctrl</div>
<div data-code="91" class="keyboard__key">Win</div>
<div data-code="18" class="keyboard__key">Alt</div>
<div data-code="32" class="keyboard__key space">Space</div>
<div data-code="18" class="keyboard__key">Alt</div>
<div data-code="17" class="keyboard__key">Ctrl</div>
<div data-code="37" class="keyboard__key">&larr;</div>
<div class="arrow">
  <div data-code="38" class="keyboard__key up">&uarr;</div>
  <div data-code="40" class="keyboard__key down">&darr;</div>
</div>
<div data-code="39" class="keyboard__key">&rarr;</div>`;
keyboard.appendChild(lineFive);

const keys = document.querySelectorAll('.keyboard__key');

for (let i = 0; i < keys.length; i++) {
  keys[i].setAttribute('keyname', keys[i].innerText);
  keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

window.addEventListener('keydown', (e) => {
  for (let i = 0; i < keys.length; i++) {
    if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
      keys[i].classList.add('active');
    }
  }
});

window.addEventListener('keyup', (e) => {
  for (let i = 0; i < keys.length; i++) {
    if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
      keys[i].classList.remove('active');
      keys[i].classList.add('remove');
    }
    setTimeout(() => {
      keys[i].classList.remove('remove');
    }, 200);
  }
});
