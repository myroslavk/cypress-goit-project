import { BasePage  } from "./basePage.po"

export class LoginPage extends BasePage {
    url = `/account/login`
    constructor() {
        super()
    }

    typeLogin(login) {
        cy.get('#user_email').type(login);
        return this;
    }

    typePassword(password) {
        cy.get('#user_password').type(password);
        return this;
    }

    clickOnLogInButton() {
        cy.get('button[type="submit"] span').click();
    }

    login(login, password) {
        this.typeLogin(login).typePassword(password).clickOnLogInButton();
    }
}