function changeLanguage(lang) {
    // Opslaan van geselecteerde taal
    saveSelectedLanguage(lang);

    // Rest van de taalwissellogica
    var currentUrl = window.location.href;
    var newUrl;

    // Controleren of de huidige URL al een taalindicator heeft
    if (currentUrl.indexOf('/nl/') !== -1 || currentUrl.indexOf('/en/') !== -1) {
        // Vervang de taalindicator in de huidige URL door de nieuwe taal
        newUrl = currentUrl.replace(/\/(nl|en)\//, '/' + lang + '/');
    } else {
        // Voeg de taalindicator toe aan de huidige URL
        var basePath = getCurrentBasePath();
        newUrl = basePath + lang;
    }

    // Navigeer naar de nieuwe URL
    window.location.href = newUrl;
}

// Functie voor het opslaan van de geselecteerde taal (bijvoorbeeld in localStorage)
function saveSelectedLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
}

// Functie voor het ophalen van de huidige geselecteerde taal
function getCurrentLanguage() {
    return localStorage.getItem('selectedLanguage') || 'nl'; // Als de taal niet is ingesteld, standaard naar NL
}

// Functie voor het ophalen van de basispad
function getCurrentBasePath() {
    var currentUrl = window.location.href;
    var basePath = currentUrl.split('/').slice(0, -1).join('/') + '/';
    return basePath;
}
