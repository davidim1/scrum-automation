import { newOrganization } from "../page_objects/newOrganization";

describe ('New board POM', () => {
    it ('new board pop up window', () => {
        cy.loginViaBackend();
        cy.visit('/');
        newOrganization.newOrganizationHover.click();
        newOrganization.newBoard.click()
    })

   
})