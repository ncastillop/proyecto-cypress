import { CartMethods } from "./pages/cart/Cart.methods"
import { CommonPageElements } from "./pages/common-page/CommonPage.elements"
import { CommonPageMethods } from "./pages/common-page/CommonPage.methods"
import { HomeMethods } from "./pages/home/Home.methods"
import { LoginMethods } from "./pages/login/Login.methods"
import { Logger } from "./util/Logger"

describe('template spec', ()=> {
    it('passes', ()=>{
        const user = 'random01'
        const pass = 'random01'

        Logger.stepNumber(1)
        Logger.stepLog('Navigate to DemoBlaze')
        CommonPageMethods.navigateToDemoBlaze()

        Logger.stepNumber(2)
        Logger.stepLog('Click on "Log In" link' )
        CommonPageMethods.clickOnLoginOption()

        Logger.stepNumber(3)
        Logger.stepLog('Login with this credentials: '+user+'/'+pass )
        LoginMethods.login(user,pass)

        Logger.verification('The home page should show "Welcome '+user+'" text')
        cy.get('a#nameofuser').should('contain.text',user)
    })
})