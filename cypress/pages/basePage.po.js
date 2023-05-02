/**
 * "BasePage" class is base page object class for pages
 */
export class BasePage {
    url = Cypress.env('baseUrl')
    open() {
        cy.visit(this.url);
        return this;
    }
}