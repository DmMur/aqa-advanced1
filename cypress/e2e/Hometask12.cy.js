describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://www.guru99.com/');
  });
  it('open guru99 link', () => {
    cy.get('h1.thick-heading').should('have.text', 'Tutorials Library');
    cy.visit('https://www.guru99.com/');
  });

  it('open SAP Beginner link', function () {
    //cy.visit('https://www.guru99.com/');
    cy.get(':nth-child(2) > .featured-box > :nth-child(2) > :nth-child(1) > a')
      .should('be.visible')
      .click();
    cy.get(
      '.table-striped > tbody > :nth-child(1) > .responsivetable > a > strong',
    )
      .should('be.visible')
      .click();
    cy.get('.yarpp > ul > :nth-child(1) > a').should('be.visible').click();

    cy.get(':nth-child(20) > :nth-child(2) > a').click();

    /* ==== End Cypress Studio ==== */
  });

  it('testing', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > .featured-box > :nth-child(2) > :nth-child(7) > a')
      .should('be.visible')
      .click();
    cy.get(':nth-child(7) > tbody > :nth-child(1) > :nth-child(2) > strong > a')
      .should('be.visible')
      .click();
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('testing2', function () {
    cy.get(':nth-child(1) > .featured-box > :nth-child(5) > :nth-child(1) > a')
      .should('be.visible')
      .click();
    cy.get('.entry-content > :nth-child(21) > a').should('be.visible').click();
    cy.get(
      ':nth-child(11) > tbody > :nth-child(1) > .responsivetable > a > strong',
    )
      .should('be.visible')
      .click();
    cy.get('.entry-content > :nth-child(3) > a').should('be.visible').click();
  });
});
