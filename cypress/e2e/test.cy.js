import { HomeMethods } from "./pages/home/Home.methods"
import { LoginMethods } from "./pages/login/Login.methods"

describe('template spec', ()=> {
    it('passes', ()=>{
        cy.visit('https://demoblaze.com/')
        HomeMethods.clickOnProductLink('Iphone 6 32gb')
        cy.wait(5000)
    })
})