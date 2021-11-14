const registrationPage = require('../pageobjects/registration.page');

describe('Rejestracja uzytkownika', () => {
    it('Rejestracja nie istniajacego uzytkownika', () => {
        registrationPage.open();
        browser.pause(2000);
        registrationPage.fillIn();
        browser.pause(2000);
    });

    it('Blad rejestracji dla istniacego uzytkownika', () => {
    });
});


