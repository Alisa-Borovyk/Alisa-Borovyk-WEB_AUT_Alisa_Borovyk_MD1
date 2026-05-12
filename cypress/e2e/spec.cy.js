// Используем './Pages/SelectablePage', так как папка называется Pages
import SelectablePage from './Pages/SelectablePage';

describe('MD1: Selectable Grid Scenario', () => {
    it('should validate grid selection with step logging', () => {
        
        // Эти команды cy.log создадут те самые "подписи" в интерфейсе Cypress
        cy.log('--- STEP A: Open URL ---');
        SelectablePage.visit();

        cy.log('--- STEP B: Click Grid Tab ---');
        SelectablePage.switchToGrid();

        cy.log('--- STEP C: Click items 2, 4, 6, 8 ---');
        const itemsToClick = ['Two', 'Four', 'Six', 'Eight'];
        itemsToClick.forEach(item => SelectablePage.clickElement(item));

        cy.log('--- STEP D: Verify Highlights ---');
        itemsToClick.forEach(item => SelectablePage.validateSelection(item, true));

        cy.log('--- STEP E: Verify No Highlights ---');
        const itemsToLeave = ['One', 'Three', 'Five', 'Seven', 'Nine'];
        itemsToLeave.forEach(item => SelectablePage.validateSelection(item, false));
    });
});