const ui = {
    getSubmitButton: () => {
        return document.getElementById('submit');
    },
    getInput: () => {
        return document.getElementById('input').value;
    },
    getSourceLang: () => {
        return document.getElementById('source-language').value;
    },
    getTargetLang: () => {
        return document.getElementById('target-language').value;
    },
    setOutput: (output) => {
        document.getElementById('output').value = output;
    }
};

export default ui;