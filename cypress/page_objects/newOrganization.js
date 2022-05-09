class NewOrganization {
    get newOrganizationHover () {
       return cy.get('div[class="vs-c-list__btn vs-c-list-btn--add-new el-tooltip"]')
    }

    get newBoard () {
        return cy.get('a').eq(3)
    }
}

export const newOrganization = new NewOrganization