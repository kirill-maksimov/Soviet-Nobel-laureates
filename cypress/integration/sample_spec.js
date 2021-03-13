import { BASE_URL } from '../../src/consts/base-url';

describe('Simple Test', () => {
    it('Check that tests are running', () => {
        expect(true).to.equal(true)
    })
})

describe('Running frontend', () => {
    it('Check that frontend page is running on port 3000', () => {
        cy.visit(BASE_URL)
    })
})

describe('Click Next Period', () => {
    it('Check that Next Period button is clickable', () => {
        cy.contains('Next').click()
    })
})
