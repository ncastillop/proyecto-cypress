import { LoginMethods } from "./pages/login/Login.methods"

describe('template spec', ()=> {
    it('passes', ()=>{
        cy.visit('https://demoblaze.com/')
        cy.get('a[data-target="#logInModal"]').click()
        LoginMethods.login('random01','random01');
        cy.get('a#nameofuser').should('contain.text','random01')
        cy.wait(10000)
    })
})