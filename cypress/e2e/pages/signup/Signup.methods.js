import { SignupElements } from "./Signup.elements"

export class SignupMethods{
    static insertUsername(user){
        SignupElements.textBoxes.username.invoke('val',user)
    }

    static insertPassword(pass){
        SignupElements.textBoxes.password.invoke('val',pass)
    }

    static clickOnSignupButton(){
        SignupElements.buttons.signup.click()
    }

    static signup(username, password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnLoginButton()
    }
}
