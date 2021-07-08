/// <reference types="cypress" />
let Chance = require('chance')
let chance = new Chance()

context('Cadastro', () => {
  it('Cadastro de usuario em site', () => {
    cy.visit('')
    cy.get('.login').click()
    cy.get('input#email_create').clear().type(chance.email())
    cy.get('#SubmitCreate > span').click()
    cy.get('input#id_gender2').check()
    cy.get('input#customer_firstname').type(chance.first())
    cy.get('input#customer_lastname').type(chance.last())
    // cy.get('input#email').type(chance.email())
    cy.get('input#passwd').type(chance.string({ length: 5 }))
    cy.get('select#days').select('22')
    cy.get('select#months').select('5')
    cy.get('select#years').select('1980')
    cy.get('input#newsletter').check()
    cy.get('input#optin').check()

    cy.get('input#firstname').type(chance.first())
    cy.get('input#lastname').type(chance.last())
    cy.get('input#company').type(chance.company())
    cy.get('input#address1').type(chance.address())
    // cy.get('input#address2')
    cy.get('input#city').type(chance.city())
    cy.get('select#id_state').select('Alabama', { force: true })
    cy.get('input#postcode').type(chance.zip())
    // cy.get('select#id_country').select('21')
    cy.get('textarea#other').type('Teste automatizado')
    cy.get('input#phone').type(chance.phone({ formatted: false }))
    cy.get('input#phone_mobile').type(
      chance.phone({ formatted: false, country: 'uk', mobile: true })
    )
    cy.get('input#alias').type(chance.address())
    cy.get('#submitAccount > span').click()

    cy.url().should('contain', 'index.php?controller=my-account')
    cy.get('.info-account').should(
      'contain',
      'Welcome to your account. Here you can manage all of your personal information and orders.'
    )

    // // POST 200 /index.php
  })
})
