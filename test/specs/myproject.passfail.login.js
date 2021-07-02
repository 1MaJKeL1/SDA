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

    //Test 2. Bledne haslo komunikat: Nieprawidłowe hasło!
});


