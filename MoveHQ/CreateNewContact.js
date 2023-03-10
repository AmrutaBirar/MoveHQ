// BDD Step definition implementation
Given("User is on the Create New Contact Form", () => {
    //Navigate to the form page
    cy.visit('http://demoMoveHQ.com/createnewcontactform')
})

When("User enters all the fields Data", () => {
    //validate if contact type is Transferee
    cy.get('#contacttype')
      .invoke("val")
      .should("eq", "Transferee")

    //fill all the data in the input box
    cy.fixture('testData.json').then((data) => {
        cy.get('#customernumber')
          .should('be.visible')
          .type(data.CustomerNumber)
        cy.get('#firstname')
          .should('be.visible')
          .type(data.FirstName)
        cy.get('#lastname')
          .should('be.visible')
          .type(data.LastName)
        cy.get('#officephone')
          .should('be.visible')
          .type(data.OfficePhone)
        cy.get('#mobilephone')
          .should('be.visible')
          .type(data.MobilePhone)
        cy.get('#homephone')
          .should('be.visible')
          .type(data.HomePhone)
        cy.get('#department')
          .should('be.visible')
          .type(data.Department)
        cy.get('#primaryemail')
          .should('be.visible')
          .type(data.PrimaryEmail)
        cy.get('#secondaryemail')
          .should('be.visible')
          .type(data.SecondaryEmail)
    })
})

And("clicks on the Save button", () => {
    // Click on first element containing 'Save'
    cy.contains('Save').click()
})

Then("a new contact is successfully created", () => {
    //popup modal appears on successful creation
    cy.get('#popupmodal')
      .should('be.visible')
      .contains('New Contact created successfully')
})