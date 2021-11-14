const Page = require('./page');
const newUserData = require("../testData/user.data")
/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegistrationPage extends Page {
    /**
     * define selectors using getter methods
     */

    get name () { return $('#myInput_Name') }
    get surname () { return $('#myInput_Surname') }
    get email () { return $('#myInput_Email') }
    get name () { return $('#myInput_Email') }
    get occupation () { return $('#myInput_Occupation') }
    get login () { return $('#myInput_Login') }
    get password () { return $('#myInput_Password') }
    get rePassword () { return $('#myInput_Password_Confirm') }
    get agree () { return $('#myInput_Agree') }

    get btnSubmit () { return $('button[type="submit"]') }
    get loginMe () { return $('.Zaloguj mnie.')}


    async sendRegistration () {
         ( this.btnSubmit).click();
    }

    newUser = {
        name: "Imie",
        surname: "Nazwisko",
        email: "email@email.com",
        occupation: "Trener",
        login: "loginNowy",
        password: "tajnehaslo123",
        rePassword: "tajnehaslo123",
        agree: "No"
    }

    async fillIn (userData = newUser) {
         this.name.setValue(userData.name);
         this.surname.setValue(userData.surname);
         this.email.setValue(userData.email);
         this.occupation.setValue(userData.occupation);
         this.login.setValue(userData.login);
         this.password.setValue(userData.password);
         this.rePassword.setValue(userData.rePassword);
        if (userData.agree == "Yes") {
             ( this.agree).click();
        }
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    async open () {
         browser.url(`https://myproject.passfail.pl/register/register.php`)
    }
}

module.exports = new RegistrationPage();

