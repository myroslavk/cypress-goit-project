import { BasePage  } from "./basePage.po"

export class HomePage extends BasePage {
    url = `/homepage`
    constructor() {
        super()
    }

    clickOnGoToCourseButton() {
        /**
         * In order to manipulate with fully loaded page need to wait for response
        */
        cy.intercept('/api/v1/course/listAllowedCourses*').as('listAllowedCourses');
        cy.wait('@listAllowedCourses').then(() => {
            cy.get('#go-to-the-course-homepage-widget').click();
        });

        return this;
    }

    clickOnTaskButton() {
        cy.get('a[data-tour-step="homework"]').click();
    }

    leaveAComment(comment) {
        const comments = [];
        cy.get('h2 + div [contenteditable="true"]').click({ force: true }).type(comment);
        cy.get('[data-tour-step="homework-theory"] + section button span').click();
        /**
         * In order to get all comments need to wait till all comments are responsed
         */
        cy.intercept('/api/v1/group/homework/getComments*').as('comments');
        cy.wait('@comments').then(() => {
            cy.get('h2 + div [contenteditable="false"]').each(($li) => comments.push($li.text())).then(() => {
                expect(comments).to.contain(comment);
            });
        });
    }

}