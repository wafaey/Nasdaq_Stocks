/// <reference types="cypress" />

context('User can click on a stock and navigate to details screen', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('.stock-item').contains('AAA').click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', 'details')

    cy.go('back')
    cy.location('pathname').should('not.include', 'details')

    cy.go('forward')
    cy.location('pathname').should('include', 'details')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', 'details')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', 'details')
  })

  it('cy.reload() - reload the page', () => {
    // https://on.cypress.io/reload
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

  it('cy.visit() - visit a remote url', () => {
    // https://on.cypress.io/visit

    // Visit any sub-domain of your current domain

    // Pass options to the visit
    cy.visit('http://localhost:3000/details', {
      timeout: 50000, // increase total time for the visit to resolve
      onBeforeLoad (contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
      onLoad (contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
    })
    })
})

