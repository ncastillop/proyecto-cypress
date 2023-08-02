import { Logger } from "../../util/Logger";
import { CommonPageMethods } from "../common-page/CommonPage.methods";
import { LoginElements } from "./Login.elements";

export class LoginMethods{

    static insertUsername(user){
        LoginElements.textBoxes.username.invoke('val',user)
    }

    static insertPassword(pass){
        LoginElements.textBoxes.password.invoke('val',pass)
    }

    static clickOnLoginButton(){
        LoginElements.buttons.login.click()
    }

    static login(username, password){
        Logger.subStep('Insert username')
        this.insertUsername(username)
        Logger.subStep('Insert password')
        this.insertPassword(password)
        Logger.subStep('Click on Login button')
        this.clickOnLoginButton()
    }

    static validateLoginSuccessful(user){
        cy.get('a#nameofuser').should('contain.text', user)
    }

    static validateLoginInvalid(){
        CommonPageMethods.verifyAlert('User does not exist.')
    }

}