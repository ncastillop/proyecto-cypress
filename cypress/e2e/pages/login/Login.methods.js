import { LoginElements } from "./Login.elements";

export class LoginMethods{

    static insertUsername(user){
        LoginElements.textBoxes.username.type(user)
    }

    static insertPassword(pass){
        LoginElements.textBoxes.password.type(pass)
    }

    static clickOnLoginButton(){
        LoginElements.buttons.login.click()
    }

    static login(username, password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnLoginButton()
    }

}