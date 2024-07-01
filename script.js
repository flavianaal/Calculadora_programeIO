let getedResult = false;

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
            alert('Escreva um valor!');
        } else if (myButton.value == '=') {
            getedResult = true;
        } if (myButton.value != '=' && getedResult == true && display.value != '') {
            display.value = myButton.value;
            getedResult = false;
            
        } else {
            display.value += myButton.value;
        }

    }

})

