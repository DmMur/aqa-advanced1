describe('test home site', () => {
  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space/panel/garage', {
      failOnStatusCode: false,
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });
    cy.get('button.header_signin').click();
    cy.get("input[name='email']").type('dmmuryhin@gmail.com');
    cy.get("input[name='password']").type('DMzapret2023');
    cy.get('.modal-footer .btn-primary').click();
  });
  it('check the first  text', () => {
    cy.get('.panel-page h1').should('have.text', 'Garage');
  });
  it('Test1', () => {
    cy.wait(1000);
    cy.get('[routerlink="expenses"]')
      .should('be.visible')
      .click({ force: true });
    cy.get('.panel-page_heading h1').should('have.text', 'Fuel expenses');
    cy.get('[routerlink="instructions"]').should('be.visible').click();
    cy.get('.panel-page_heading h1').should('have.text', 'Instructions');
    cy.get('#brandSelectDropdown').click();
    cy.get('.brand-select-dropdown_menu > :nth-child(2)')
      .should('be.visible')
      .click();
  });
  it('Test2', () => {
    cy.wait(1000);
    cy.get('[routerlink="instructions"]').should('be.visible').click();
    cy.get(
      ':nth-child(1) > .instruction-link > .instruction-link_download',
    ).click();
    cy.get('#brandSelectDropdown').click();
    cy.get('.brand-select-dropdown_menu > :nth-child(3)').click();
    cy.get('#modelSelectDropdown').click();
    cy.get('.model-select-dropdown_menu > :nth-child(2)').click();
    cy.get('.instructions-search-controls_search').should('be.visible').click();
    cy.get(
      ':nth-child(1) > .instruction-link > .instruction-link_description',
    ).click();
  });

  it('check first element of navmenu', () => {
    cy.get('nav.header_nav').first().should('contain', 'Garage');
  });
});
