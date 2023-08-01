import { CartMethods } from "./pages/cart/Cart.methods"
import { HomeMethods } from "./pages/home/Home.methods"
import { LoginMethods } from "./pages/login/Login.methods"

describe('template spec', ()=> {
    it('passes', ()=>{
        cy.visit('https://demoblaze.com/')
        cy.wait(30000)
        CartMethods.clickOnDeleteLink('Samsung galaxy s7')
        cy.wait(5000)
    })
})