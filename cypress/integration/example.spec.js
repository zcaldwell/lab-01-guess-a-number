
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains the alchemy logo', ()=>{
            cy.get('.main-logo').should('be.visible');
        });
    });
});