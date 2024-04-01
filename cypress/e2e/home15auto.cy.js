const name1 = Cypress.env('name');
const sname = Cypress.env('sname');
const email = Cypress.env('email');
const pwd = Cypress.env('pwd');

describe('test auto site', () => {
  //const Url = Cypress.env('UrlReg');
  const Url = Cypress.env('Urlenv');
  beforeEach(() => {
    Cypress.config('baseUrl', Url);
    cy.initlogin();
  });

  it('registr', () => {
    cy.get('button.header_signin').click();
    cy.get('.modal-footer>button.btn.btn-link').click();
    // First Name
    cy.get('#signupName').type(name1);
    // last Name
    cy.get('#signupLastName').type(sname);
    //email
    cy.get('#signupEmail').clear().type(email);
    //Password
    cy.get("input[name='password']").clear().type(pwd);
    cy.get("input[name='repeatPassword']").click();
    cy.get("input[name='repeatPassword']").clear().type(pwd);
    cy.get('.modal-footer .btn.btn-primary').click();
    cy.wait(500);
    cy.get('.close').click();
  });
  it('Login, Adding car', () => {
    cy.get('button.header_signin').click();
    cy.get("input[name='email']").type(email);
    cy.get("input[name='password']").type(pwd);
    cy.get('.modal-footer .btn-primary').click();
    cy.get('.panel-page_heading > .btn').click();

    cy.get('h4.modal-title').should('have.text', 'Add a car');
    cy.get('input#addCarMileage').click();
    cy.get('#addCarBrand').select('BMW');
    cy.get('input#addCarMileage').clear().type('2500');
    cy.get('.modal-footer .btn.btn-primary').click();
    cy.get(
      ':nth-child(1) > app-car div.car-heading button.car_add-expense',
    ).click();
    cy.get('#addExpenseTotalCost').type('1000');
    cy.get('#addExpenseLiters').click();
    cy.get('#addExpenseLiters').type('2500');
    cy.get('#addExpenseTotalCost').click();
    cy.get('#addExpenseTotalCost').type('2500');
    cy.get('.modal-footer > .btn-secondary').click();
  });
});
