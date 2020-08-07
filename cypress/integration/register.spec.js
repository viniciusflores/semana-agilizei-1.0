/// <reference types="cypress" />

let Chance = require('chance')
let chance = new Chance()

context('Register', () => {
  it('Register new user on app', () => {
    cy.server()
    cy.route('POST', '**//api/1/databases/userdetails/collections/newtable?**').as('postNewTable')
    cy.route('POST', '**//api/1/databases/userdetails/collections/usertable?**').as('postUserTable')
    cy.route('GET', '**//api/1/databases/userdetails/collections/newtable?**').as('getNewTable')
      
 
    cy.visit('Register.html')
    
    cy.get('input[placeholder="First Name"]').type(chance.first())
    cy.get('input[ng-model^=Last]').type(chance.last())
    cy.get('input[ng-model^=Email]').type(chance.email())
    cy.get('input[ng-model^=Phone]').type(chance.phone({ formatted:false }))

    cy.get('input[value=FeMale]').check()
    cy.get('input[type=checkbox]').check('Cricket')
    cy.get('input[type=checkbox]').check('Hockey')

    cy.get('select#Skills').select('Javascript')
    cy.get('select#countries').select('Argentina')
    cy.get('select#countries').select('Australia', { force:true })
    cy.get('select#yearbox').select('1990')
    cy.get('select[ng-model^=month]').select('April')
    cy.get('select#daybox').select('1')

    cy.get('input#firstpassword').type('P@ssw0rd')
    cy.get('input#secondpassword').type('P@ssw0rd')

    cy.get('input#imagesrc').attachFile('avatar.jpeg')

    cy.get('button#submitbtn').click()

    cy.wait('@postNewTable').then(res => {
      expect(res.status).to.eq(200)
    })
    cy.wait('@postUserTable').then(res => {
      expect(res.status).to.eq(200)
    })
    cy.wait('@getNewTable').then(res => {
      expect(res.status).to.eq(200)
    })
    cy.url().should('contain','WebTable')
  })
})
