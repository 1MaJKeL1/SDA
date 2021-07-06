1. Opis projektu
2. Uzyte metodologie
3. Zakres testow (w zakresie i po za zakresem)
4. Opis uzywanych i planowanych narzedzi
- pod katem automatyzacji
- rejestrowania bledow
- nagrywania obrazu
- pomiru **wydajnosci**
- testow API

5. Konfiguracje 
- przegladarki
- typy urzadzen 

wraz z uzasadnieniem dlaczego
https://gs.statcounter.com/search-engine-market-share

6. Strukura testplanu
- link do testplanu
- krotki opis struktury

7. Metryki
- link do dashboardow
- opis uzytych metryk (ilosc bledow z podzialem na wage, ilosc bledow per obszar), postem prac ze statusyu wykonaia testow 

8. Definition of Ready
- kiedy rozpoczynamy testy np. po analizie wymagan,
9. Definition of Done
- konczymy wykonywanie testow dla User Story w momencie gdy wszystkie zaplanowane testy zostaly wykonane oraz brak aktywnych bledow ze statusem Critical, High

10. Repozytorium kodu do testow automatycznych
[lino do repozytorium ](https://github.com/1MaJKeL1/SDA)
    
```
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
```
