const display = document.querySelector('#display');
const buttons = document.querySelectorAll('input[type=button]');

buttons.forEach((myButton) => {

    myButton.onclick = () => {

        if (myButton.value == 'AC') {
            display.value = '';
        } else if (myButton.value == 'DE') {
            let myValue = display.value;
            display.value = myValue.toString().slice(0, -1);
        } else if (myButton.value == '=' && display.value == '') {
            alert('Escreve ai um valor meu parca!');
        } else if (myButton.value == '=') {
            display.value = eval(display.value);
        } else {
            display.value += myButton.value;
        }

    }

})

