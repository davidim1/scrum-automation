import { profileUpdate } from "../page_objects/profileUpdate";
import { faker } from '@faker-js/faker';

describe ('Profile update POM', () => {
    // let profileData= {
    //     firstName: '',
    //     lastName: '',
    //     // email: faker.random.email()
    // }


    beforeEach('Visit settings', () => {       
        cy.loginViaBackend();
        cy.visit('/account/settings');
    })


    it ('Change First name and Last name', () => {
        profileUpdate.firstNameInput.clear().type('Milan');
        profileUpdate.lastNameInput.clear().type('Mitrovic')
        profileUpdate.updateNamesBtn.click()
    
    })

    it ('Change email', () => {
        profileUpdate.changeEmailInput.clear().type('milanko@gmail.com')
        profileUpdate.securityPasswordInput.clear().type(Cypress.env('EXTERNAL_PASSWORD'));
        profileUpdate.updateEmailBtn.click()

    })

    it.only ('Change password', () => {
        profileUpdate.currentPasswordInput.type(Cypress.env('EXTERNAL_PASSWORD'));
        profileUpdate.newPasswordInput.type(Cypress.env('EXTERNAL_PASSWORD'));
        profileUpdate.repeatNewPassword.type(Cypress.env('EXTERNAL_PASSWORD'));
        profileUpdate.updatePasswordBtn.click();
    })
})