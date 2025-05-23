let display = document.getElementById('display');

function appendValue(value) {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function deleteLast() {
  if (display.innerText.length === 1) {
    display.innerText = '0';
  } else {
    display.innerText = display.innerText.slice(0, -1);
  }
}

function calculate() {
  const display = document.getElementById('display');
  try {
      let expression = display.innerText;
      // Replace the symbols with real operators
      expression = expression.replace(/÷/g, '/').replace(/×/g, '*');
      display.innerText = eval(expression);
  } catch (error) {
      display.innerText = 'Error';
  }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;


    if (!isNaN(key) || "+-*/.".includes(key)) {
      if (key === '*') {
          display.innerText += '×'; // show ×
      } else if (key === '/') {
          display.innerText += '÷'; // show ÷
      } else {
          display.innerText += key;
      }
  }


});
function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.calculator').classList.toggle('dark-mode');
}
function percentage() {
    const display = document.getElementById('display');
    if (display.value !== '') {
        display.value = parseFloat(display.value) / 100;
    }
}
