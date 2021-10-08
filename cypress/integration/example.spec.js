
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains the alchemy logo', ()=>{
            cy.get('#number-input').should('be.visible');
        });
    });

    describe('user interactions', () => {
        it('should decrease the number of guesses');
             cy.get('#guess');
             cy.get('#answer-text').should('be.visible');
    });
});