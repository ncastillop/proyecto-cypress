import { LoginMethods } from "./pages/login/Login.methods"

describe('template spec', ()=> {
    it('passes', ()=>{
        cy.visit('https://demoblaze.com/')
        cy.get('a[data-target="#logInModal"]').click()
        LoginMethods.login('username','password');
        cy.wait(10000)
    })
})