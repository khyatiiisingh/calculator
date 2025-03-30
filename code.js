let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let memory = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            display.textContent = '0';
        } else if (value === '=') {
            try {
                display.textContent = eval(display.textContent.replace('^', '**'));
            } catch {
                display.textContent = 'Error';
            }
        } else if (value === '←') {
            display.textContent = display.textContent.slice(0, -1) || '0';
        } else if (value === '√') {
            display.textContent = Math.sqrt(parseFloat(display.textContent));
        } else if (value === '%') {
            display.textContent = parseFloat(display.textContent) / 100;
        } else if (value === 'MC') {
            memory = 0;
        } else if (value === 'MR') {
            display.textContent = memory;
        } else if (value === 'M+') {
            memory += parseFloat(display.textContent);
        } else if (value === 'M-') {
            memory -= parseFloat(display.textContent);
        } else if (value === '^') {
            display.textContent += '^';
        } else {
            if (display.textContent === '0') {
                display.textContent = value;
            } else {
                display.textContent += value;
            }
        }
    });
});

