const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
});

const alertMessage = document.querySelector('#alert');
alertMessage.addEventListener('click', () => {
    alert('Служит для вывода сообщения');
});

const promptMessage = document.querySelector('#prompt');
promptMessage.addEventListener('click', () => {
    prompt('Служит для запроса данных');
});