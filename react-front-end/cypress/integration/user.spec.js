describe('Users page', () => {

  beforeEach(() => {
  
    cy.visit('/user/1');
  
  });

  it('should be able to edit add friends in group', () => {
    cy.wait(2000)

    cy.get('.single-trip').contains('Iceland Adventures')
      .click()
    
    cy.scrollTo('bottom', { duration: 2000 })
      .get('#add')
      .click()
      .wait(1000)
      .get('[alt=avatar]')
      .first()
      .click()
      .wait(1000)

    cy.get('.scroll-to-top-button--scroll-img')
      .click()

    cy.get('.MuiButton-label').contains('My Trips')
      .wait(1000)
      .click()

  });

  it('should be able to double drip in users page', () => {
    cy.wait(2000)
    
    cy.get('.single-trip').contains('Iceland Adventures')
      .get('.MuiButton-label').contains('Double my Drip!')
      .click()
      .wait(2000)

    cy.get('.MuiButton-label').contains('Click Here to For Your Chance to Win!')
      .click()
      .wait(300)
      .get('.MuiDialogContent-root')
      .click()
      .wait(1000)
    
    cy.get('.MuiButton-label').contains('Close Window')
      .click()

    cy.get('[alt=trickle-logo]')
      .wait(1000)
      .click()


  })


});