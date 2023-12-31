import { CommonPageData } from "../pages/common-page/CommonPage.data"
import { CommonPageMethods } from "../pages/common-page/CommonPage.methods"
import { LoginData } from "../pages/login/Login.data"
import { SignupMethods } from "../pages/signup/Signup.methods"
import { Logger } from "../util/Logger"

const user = CommonPageMethods.generateRandomString()
const pass = CommonPageMethods.generateRandomString(7)

describe(CommonPageData.testSuites.registro, ()=>{
    it('Registro de usuario valido',()=>{

        Logger.stepNumber(1)
        Logger.stepLog('Navegar a la pagina de inicio')
        CommonPageMethods.navigateToDemoBlaze()

        Logger.stepNumber(2)
        Logger.stepLog('Hacer clic en "Sign up" en la barra de navegacion')
        CommonPageMethods.clickOnSignUpOption()
        //cy.wait(30000)
        Logger.stepNumber(3)
        Logger.stepLog('Completar todos los campos obligatorios con informacion valida')
        SignupMethods.insertUsername(user)
        SignupMethods.insertPassword(pass)

        Logger.stepNumber(4)
        Logger.stepLog('Hacer clic en "Sign up" para registrar el usuario')
        SignupMethods.clickOnSignupButton()
        cy.wait(3000)
        Logger.verification('Verificar que se muestre el mensaje "Sign up successful"')
        SignupMethods.verifySignupSuccesfulMessageIsDisplayed()

    });
    it('Registro de usuario invalido',()=>{

        Logger.stepNumber(1)
        Logger.stepLog('Navegar a la pagina de inicio')
        CommonPageMethods.navigateToDemoBlaze()

        Logger.stepNumber(2)
        Logger.stepLog('Hacer clic en "Sign up" en la barra de navegacion')
        CommonPageMethods.clickOnSignUpOption()
        //cy.wait(30000)
        Logger.stepNumber(3)
        Logger.stepLog('Completar todos los campos obligatorios con informacion invalida')
        SignupMethods.insertUsername(LoginData.validCredencials.username)
        SignupMethods.insertPassword(LoginData.validCredencials.username)

        Logger.stepNumber(4)
        Logger.stepLog('Hacer clic en "Sign up" para registrar el usuario')
        SignupMethods.clickOnSignupButton()
        cy.wait(3000)
        Logger.verification('Verificar que se muestre el mensaje "This user already exist."')
        SignupMethods.verifySignupErrorMessageIsDisplayed()

    })
})