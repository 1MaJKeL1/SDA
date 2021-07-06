const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get hamburgerMenu () { return $('#myTopMenuButton') }

    async expandMenu () {
        await (await this.hamburgerMenu).click();
    }
}

module.exports = new MainPage();
