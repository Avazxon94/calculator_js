let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const action = ['/', '*', '+', '-'];

// screen
const out = document.querySelector('.calc-screen p');

function clearAll() {
    let a = '';
    let b = '';
    let sign = '';
    let finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) return;

    //post number
    const key = event.target.textContent;




    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            out.textContent = a;
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            b += key;
            out.textContent = b;
        }
    }
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
    }


    if (key === '=') {
        if (b === '') {
            b = a
        }
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case '*':
                a = a * b;
                break;
            case '/':
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
    }
}