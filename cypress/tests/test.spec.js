/// <reference types="cypress" />
import { LoginPage } from "../pages/loginPage.po";
import { HomePage } from "../pages/homePage.po";

describe('Cypress test task', () => {
    const login = 'user888@gmail.com';
    const password = '1234567890';
    const comment = 'Comment';

    it(`Leave a comment "${comment}" in Home Page`, () => {
        const loginPage = new LoginPage();
        loginPage.open().login(login, password);

        const homePage = new HomePage();
        homePage.clickOnGoToCourseButton().clickOnTaskButton();
        homePage.leaveAComment(comment);
    });
});
  