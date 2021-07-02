const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Dostep do systemu tylko dla zautoryzowanych loginow', () => {
    it('Blad logowania dla nieistniacego loginu', async () => {
        //Otworz strone
        await LoginPage.open();
        //Wprowadz dane logowania dla nieistnijacego loginu
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        //Komunikat bledu sie wyswietla
        await expect(SecurePage.flashAlert).toBeExisting();
        //Komunikat bleduj zawiera tresc
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Brak użytkownika o tym loginie!');
    });

    it('Blad hasla dla istniacego loginu', async () => {
        //Otworz strone
        await LoginPage.open();
        //Wprowadz dane logowania dla istnijacego loginu
        await LoginPage.login('demo', 'SuperSecretPassword!');
        //Komunikat bledu sie wyswietla
        await expect(SecurePage.flashAlert).toBeExisting();
        //Dodatkowy przycisk przypomnij haslo jest wyswietlony
        await expect(SecurePage.remindPassword).toBeExisting();
        //Komunikat bleduj zawiera tresc
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Nieprawidłowe hasło!');
    });

});


