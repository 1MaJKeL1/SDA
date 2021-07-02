const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () { return $('.submit_message_error') }
    get remindPassword () { return $('#myRemindPassword') }
}

module.exports = new SecurePage();
