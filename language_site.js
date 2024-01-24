function switchLanguage(lang) {
    const elementsEn = document.querySelectorAll('.en-us');
    const elementsPt = document.querySelectorAll('.pt-br');
    const optionEn = document.querySelector('.option-us');
    const optionPt = document.querySelector('.option-br');

    if(lang === 'en-us') {
        elementsEn.forEach(el => el.style.display = 'block');
        elementsPt.forEach(el => el.style.display = 'none');
        optionEn.style.display = 'none'; // Oculta a opção EN-US
        optionPt.style.display = 'block'; // Mostra a opção PT-BR
        updatePlaceholders('en-us');
    } else {
        elementsEn.forEach(el => el.style.display = 'none');
        elementsPt.forEach(el => el.style.display = 'block');
        optionEn.style.display = 'block'; // Mostra a opção EN-US
        optionPt.style.display = 'none'; // Oculta a opção PT-BR
        updatePlaceholders('pt-br');
    }
}

function updatePlaceholders(language) {
    const inputs = document.querySelectorAll(".app-form-control");
    inputs.forEach(input => {
        const placeholderEn = input.getAttribute("data-placeholder-en");
        const placeholderPt = input.getAttribute("data-placeholder-pt");

        if (language === 'en-us' && placeholderEn) {
            input.setAttribute("placeholder", placeholderEn);
        } else if (language === 'pt-br' && placeholderPt) {
            input.setAttribute("placeholder", placeholderPt);
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const languageDropdown = document.getElementById('language-dropdown');

    // Define EN-US como idioma padrão na carga da página
    switchLanguage('en-us');

    languageDropdown.addEventListener('change', function() {
        switchLanguage(languageDropdown.value);
    });
});

function limparFormulario() {
    document.getElementById('formulario_contato').reset();
}
