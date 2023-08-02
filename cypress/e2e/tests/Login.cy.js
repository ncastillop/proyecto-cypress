import { CommonPageData } from "../pages/common-page/CommonPage.data";
import { CommonPageMethods } from "../pages/common-page/CommonPage.methods";
import { LoginData } from "../pages/login/Login.data";
import { LoginMethods } from "../pages/login/Login.methods";
import { Logger } from "../util/Logger";

describe(CommonPageData.testSuites.autenticacion, ()=>{
    it('Inicio de sesión valido',()=>{
        Logger.stepNumber(1)
        Logger.stepLog('Navegar a la pagina de inicio')
        CommonPageMethods.navigateToDemoBlaze()

        Logger.stepNumber(2)
        Logger.stepLog('Hacer clic en "Log in" en la barra de navegacion')
        CommonPageMethods.clickOnLoginOption()
        //cy.wait(30000)
        Logger.stepNumber(3)
        Logger.stepLog('Ingresar un nombre de usuario y contraseña válidos')
        LoginMethods.insertUsername(LoginData.validCredencials.username)
        LoginMethods.insertPassword(LoginData.validCredencials.password)

        Logger.stepNumber(4)
        Logger.stepLog('Hacer clic en "Log in" para iniciar sesión.')
        LoginMethods.clickOnLoginButton()
        cy.wait(3000)
        Logger.stepNumber(5)
        Logger.verification('Validar inicio de sesión.')
        LoginMethods.validateLoginSuccessful(LoginData.validCredencials.username)


    });
    it('Inicio de sesión invalido',()=>{
        Logger.stepNumber(1)
        Logger.stepLog('Navegar a la pagina de inicio')
        CommonPageMethods.navigateToDemoBlaze()

        Logger.stepNumber(2)
        Logger.stepLog('Hacer clic en "Log in" en la barra de navegacion')
        CommonPageMethods.clickOnLoginOption()
        //cy.wait(30000)
        Logger.stepNumber(3)
        Logger.stepLog('Ingresar un nombre de usuario y contraseña inválidos')
        LoginMethods.insertUsername(LoginData.invalidCredencials.username)
        LoginMethods.insertPassword(LoginData.invalidCredencials.password)

        Logger.stepNumber(4)
        Logger.stepLog('Hacer clic en "Log in" para iniciar sesión.')
        LoginMethods.clickOnLoginButton()
        cy.wait(3000)
        Logger.stepNumber(5)
        Logger.verification('Validar inicio de sesión invalido.')
        LoginMethods.validateLoginInvalid()


    })


})