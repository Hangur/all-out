import ui from './ui';
import api from './api';

const onSubmit = async () => {
    const input = ui.getInput();
    const sourceLang = ui.getSourceLang();
    const targetLang = ui.getTargetLang();
    const translation = await api.getTranslation(input, sourceLang, targetLang);
    ui.setOutput(translation);
};

ui.getSubmitButton().addEventListener('click', onSubmit);
