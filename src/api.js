const api = {
    authKey: '<put your authKey here>',
    getTranslation: async (input, sourceLang, targetLang) => {
        return await fetch(`https://api-free.deepl.com/v2/translate` +
                `?auth_key=${encodeURIComponent(api.authKey)}` + 
                `&text=${encodeURIComponent(input)}` + 
                `&source_lang=${encodeURIComponent(sourceLang)}` + 
                `&target_lang=${encodeURIComponent(targetLang)}`, {
            method: 'POST'
        }).then(async (response) => {
            if (response.status === 200) {
                const json = await response.json();
                return json.translations[0].text;
            } else {
                throw new Error(`Bad response: ${response.status}`);
            }
        }).catch((error) => {
            console.error(error);
        });
    }
};

export default api;