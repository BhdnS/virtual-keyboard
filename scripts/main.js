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
<div data-code="" class="keyboard__key tilde">~</div>
<div data-code="" class="keyboard__key">1</div>
<div data-code="" class="keyboard__key">2</div>
<div data-code="" class="keyboard__key">3</div>
<div data-code="" class="keyboard__key">4</div>
<div data-code="" class="keyboard__key">5</div>
<div data-code="" class="keyboard__key">6</div>
<div data-code="" class="keyboard__key">7</div>
<div data-code="" class="keyboard__key">8</div>
<div data-code="" class="keyboard__key">9</div>
<div data-code="" class="keyboard__key">0</div>
<div data-code="" class="keyboard__key">-</div>
<div data-code="" class="keyboard__key">=</div>
<div data-code="" class="keyboard__key backspace">Backspace</div>`;
keyboard.appendChild(lineOne);

lineTwo.classList = 'keyboard__line';
lineTwo.innerHTML = `
<div data-code="" class="keyboard__key tab">Tab</div>
<div data-code="" class="keyboard__key">Й</div>
<div data-code="" class="keyboard__key">Ц</div>
<div data-code="" class="keyboard__key">У</div>
<div data-code="" class="keyboard__key">К</div>
<div data-code="" class="keyboard__key">Е</div>
<div data-code="" class="keyboard__key">Н</div>
<div data-code="" class="keyboard__key">Г</div>
<div data-code="" class="keyboard__key">Ш</div>
<div data-code="" class="keyboard__key">Щ</div>
<div data-code="" class="keyboard__key">З</div>
<div data-code="" class="keyboard__key">Х</div>
<div data-code="" class="keyboard__key">Ъ</div>
<div data-code="" class="keyboard__key slash">|</div>`;
keyboard.appendChild(lineTwo);

lineThree.classList = 'keyboard__line';
lineThree.innerHTML = `
<div data-code="" class="keyboard__key caps-lock">Caps Lock</div>
<div data-code="" class="keyboard__key">Ф</div>
<div data-code="" class="keyboard__key">Ы</div>
<div data-code="" class="keyboard__key">В</div>
<div data-code="" class="keyboard__key">А</div>
<div data-code="" class="keyboard__key">П</div>
<div data-code="" class="keyboard__key">Р</div>
<div data-code="" class="keyboard__key">О</div>
<div data-code="" class="keyboard__key">Л</div>
<div data-code="" class="keyboard__key">Д</div>
<div data-code="" class="keyboard__key">Ж</div>
<div data-code="" class="keyboard__key">Э</div>
<div data-code="" class="keyboard__key enter">Enter</div>`;
keyboard.appendChild(lineThree);

lineFour.classList = 'keyboard__line';
lineFour.innerHTML = `
<div data-code="" class="keyboard__key shift">Shift</div>
<div data-code="" class="keyboard__key">Я</div>
<div data-code="" class="keyboard__key">Ч</div>
<div data-code="" class="keyboard__key">С</div>
<div data-code="" class="keyboard__key">М</div>
<div data-code="" class="keyboard__key">И</div>
<div data-code="" class="keyboard__key">Т</div>
<div data-code="" class="keyboard__key">Ь</div>
<div data-code="" class="keyboard__key">Б</div>
<div data-code="" class="keyboard__key">Ю</div>
<div data-code="" class="keyboard__key">.</div>
<div data-code="" class="keyboard__key shift">Shift</div>`;
keyboard.appendChild(lineFour);

lineFive.classList = 'keyboard__line';
lineFive.innerHTML = `
<div data-code="" class="keyboard__key">Ctrl</div>
<div data-code="" class="keyboard__key">Fn</div>
<div data-code="" class="keyboard__key">Win</div>
<div data-code="" class="keyboard__key">Alt</div>
<div data-code="" class="keyboard__key space">Space</div>
<div data-code="" class="keyboard__key">Alt</div>
<div data-code="" class="keyboard__key">Ctrl</div>
<div data-code="" class="keyboard__key">&larr;</div>
<div class="arrow">
  <div data-code="1" class="keyboard__key up">&uarr;</div>
  <div data-code="" class="keyboard__key down">&darr;</div>
</div>
<div class="keyboard__key">&rarr;</div>`;
keyboard.appendChild(lineFive);

const key = document.querySelectorAll('.keyboard__key[data-code="1"]');
console.log(key);
