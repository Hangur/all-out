const authKey = <put your authKey here>;
const submitButton = document.getElementById('submit');

const getTranslation = async (authKey, input, sourceLang, targetLang) => {
    const response = await fetch(`https://api-free.deepl.com/v2/translate` +
            `?auth_key=${encodeURIComponent(authKey)}` + 
            `&text=${encodeURIComponent(input)}` + 
            `&source_lang=${encodeURIComponent(sourceLang)}` + 
            `&target_lang=${encodeURIComponent(targetLang)}`, {
        method: 'POST'
    }).then(async (response) => {
        if (response.status === 200) {
            const json = await response.json();
            return json.translations[0].text;
        } else {
            throw new Error("AAAAAAAAAAAAAAA");
        }
    }).catch((error) => {
        console.error(error);

    });
    
    return response;
  };

const onSubmit = async () => {
    const input = document.getElementById('input').value;
    const sourceLang = document.getElementById('source-language').value;
    const targetLang = document.getElementById('target-language').value;
    const result = await getTranslation(authKey, input, sourceLang, targetLang);
    console.log(result);
};

submitButton.addEventListener('click', onSubmit);

