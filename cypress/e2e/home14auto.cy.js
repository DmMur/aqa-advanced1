describe('test home site', () => {
  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space/panel/garage', {
      failOnStatusCode: false,
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });
  });
  it('check registr', () => {
    cy.get('button.header_signin').click();
    cy.get('.modal-footer>button.btn.btn-link').click();
    // First Name
    cy.get('#signupName').click();
    cy.get('#signupName').type('test');
    cy.get('#signupName').clear('test');
    cy.get('.modal-body').click();
    cy.get('.invalid-feedback').should('be.visible').contains('Name required'); //Validation check
    cy.wait(500);
    cy.get('#signupName').type('22');
    cy.get('.invalid-feedback')
      .should('be.visible')
      .contains('Name is invalid'); //Validation check
    cy.wait(1000);
    cy.get('#signupName').clear('22');
    cy.get('#signupName').type('A');
    cy.get('.invalid-feedback')
      .should('be.visible')
      .contains('Name has to be from 2 to 20 characters long'); //Validation check
    cy.wait(1000);
    cy.get('#signupName').clear('A');
    cy.get('#signupName').type('Test');
    // last Name
    cy.get('#signupLastName').click();
    cy.get('#signupLastName').type('Testenko');
    cy.get('#signupLastName').clear('Testenko');
    cy.get('.modal-body').click();
    cy.get('.invalid-feedback')
      .should('be.visible')
      .contains('Last name required');
    cy.wait(1000);
    cy.get('#signupLastName').type('55');
    cy.get('.invalid-feedback')
      .should('be.visible')
      .contains('Last name is invalid');
    cy.wait(1000);
    cy.get('#signupLastName').clear();
    cy.get('#signupLastName').type('T');
    cy.get('.invalid-feedback')
      .should('be.visible')
      .contains('Last name has to be from 2 to 20 characters long'); //Validation check
    cy.wait(1000);
    cy.get('#signupLastName').clear();
    cy.get('#signupLastName').type('Testenko');
    cy.get('#signupEmail').click();
    cy.get('#signupEmail').type('test');
    cy.get('#signupEmail').clear('test');
    cy.get('.invalid-feedback').should('be.visible').contains('Email required'); //Validation check
    cy.wait(500);
    cy.get('#signupEmail').type('test@');
    cy.get('.invalid-feedback')
      .should('be.visible')
      .contains('Email is incorrect'); //Validation check
    cy.wait(500);
    cy.get('#signupEmail').clear().type('dmmuryhin@gmail.com');
    //Password
    cy.get("input[name='password']").type('1111');
    cy.get("input[name='repeatPassword']").click();
    cy.get('.invalid-feedback')
      .should('be.visible')
      .contains('Password has to be from 8 to 15 characters long'); //Validation check
    cy.wait(500);
    cy.get("input[name='password']").clear().type('Test1234');
    cy.get("input[name='repeatPassword']").click();
    cy.get('.invalid-feedback')
      .should('be.visible')
      .contains('Re-enter password required'); //Validation check
    cy.wait(500);
    cy.get("input[name='repeatPassword']").clear().type('Test1234');
    cy.get('.modal-footer .btn.btn-primary').click(); //registration
    cy.wait(500);
    cy.get('.close').click();
  });

  it('Login', () => {
    cy.get('button.header_signin').click();
    cy.get("input[name='email']").type('dmmuryhin@gmail.com');
    cy.get("input[name='password']").type('DMzapret2023');
    cy.get('.modal-footer .btn-primary').click();
  });
});
