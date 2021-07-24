const submitButton = document.getElementById('submit');
const onSubmit = () => {
    const input = document.getElementById('input').value;
    const fromLanguage = document.getElementById('from-language').value;
    const toLanguage = document.getElementById('to-language').value;
    console.log('The value of the input is', input, fromLanguage, toLanguage);
};

submitButton.addEventListener('click', onSubmit);