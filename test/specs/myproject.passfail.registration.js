const registrationPage = require('../pageobjects/registration.page');

describe('Rejestracja uzytkownika', () => {
    it('Rejestracja nie istniajacego uzytkownika', async () => {
        await registrationPage.open();
        await browser.pause(2000);
        await registrationPage.fillIn();
        await browser.pause(2000);
    });

    it('Blad rejestracji dla istniacego uzytkownika', async () => {
    });
});


