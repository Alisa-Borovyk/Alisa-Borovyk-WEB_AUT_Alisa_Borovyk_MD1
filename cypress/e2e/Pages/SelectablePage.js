class SelectablePage {
    get gridTab() { return cy.get('#demo-tab-grid'); }
    get gridContainer() { return cy.get('#gridContainer'); }

    visit() {
        cy.visit('https://demoqa.com/selectable');
    }

    switchToGrid() {
        this.gridTab.click();
    }

    clickElement(label) {
        this.gridContainer.contains(label).click();
    }

    validateSelection(label, shouldBeSelected) {
        const assertion = shouldBeSelected ? 'have.class' : 'not.have.class';
        this.gridContainer.contains(label).should(assertion, 'active');
    }
}

export default new SelectablePage();