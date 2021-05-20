describe('Home page', () => {
  
  beforeEach(() => {
  
    cy.visit('/');
  
  });

  it('should be able to show invalid searches', () => {
    cy.wait(6000)

    cy.get('#standard-basic')
      .type("canda", {delay: 150})
      .wait(4000)
      .type('{backspace}{backspace}{backspace}{backspace}{backspace}Ca', {delay: 350})
      .wait(6000)
      .type("na", {delay: 350})
      .wait(6000)
      .type("da", {delay: 350})
      .wait(5000)
  });

  it('should be able to load more trips', () => {
    cy.wait(5000)

    cy.scrollTo('bottom', { duration: 2000 })
      .wait(1000)
      .get('.scroll-to-top-button--scroll-img')
      .click()
    
    cy.scrollTo('bottom', { duration: 500 })
      .wait(1000)
      .get('.load-more')
      .click()
    
    cy.scrollTo('bottom', { duration: 2000 })
      .wait(1000)
      .get('.scroll-to-top-button--scroll-img')
      .click()

    cy.wait(2000)

  });

  it('should be able to search for Japan and visit a location', () => {
    cy.wait(4000)

    cy.get('#standard-basic')
      .type("Jj{backspace}aon{backspace}{backspace}pan", {delay: 150});

    cy.wait(6000)
      .get('.trip-container')
      .first()
      .click()

    cy.scrollTo('bottom', { duration: 2000 })
      .wait(1000)
      .get('.scroll-to-top-button--scroll-img')
      .click()

    cy.get('[alt=trickle-logo]')
      .wait(1000)
      .click()
  });

  it('should be able to go to a trips page', () => {
    cy.wait(5000)

    cy.get('.trip-container')
      .first()
      .click()
      
    cy.scrollTo('bottom', { duration: 2000 })
      .wait(1000)
      .get('.scroll-to-top-button--scroll-img')
      .click()

    cy.get('[alt=trickle-logo]')
      .wait(1000)
      .click()
    
  });

 

});