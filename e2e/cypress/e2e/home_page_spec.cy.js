describe('Home Page', () => {
    it('Should load the home page successfully', () => {
      cy.visit('http://localhost:4321');  
      cy.contains('Fresh').should('exist');  
    });
  });
  