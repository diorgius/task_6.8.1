let textField = document.querySelector('#textField');
let duplicateField = document.querySelector('#duplicateField');

textField.addEventListener('keyup', (Event) => {
    duplicateField.textContent = textField.value;
});

const clearButton = document.querySelector('#clearButton');

clearButton.addEventListener('click', (Event) => {
    Event.preventDefault();
    console.log(textField.value);
    textField.value = "";
    duplicateField.textContent = "";
});