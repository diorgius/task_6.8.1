const linkText = document.querySelector('#testLink');

linkText.addEventListener('click', (Event) => {
    Event.preventDefault();
    let newText = prompt('Введите текст');
    linkText.textContent = newText;
});