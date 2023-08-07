import { CartMethods } from "../pages/cart/Cart.methods";
import { CommonPageData } from "../pages/common-page/CommonPage.data";
import { CommonPageMethods } from "../pages/common-page/CommonPage.methods";
import { HomeElements } from "../pages/home/Home.elements";
import { HomeMethods } from "../pages/home/Home.methods";
import { LoginData } from "../pages/login/Login.data";
import { LoginMethods } from "../pages/login/Login.methods";
import { PlaceOrderMethods } from "../pages/placeOrder/PlaceOrder.methods";
import { ProductsDetailsMethods } from "../pages/productDetails/ProductDetails.methods";
import { ThankYouForYourPurchaseMethods } from "../pages/thankYouForYourPurchase/ThankYouForYourPurchase.methods";
import { Logger } from "../util/Logger";

describe(CommonPageData.testSuites.catalogoYCompra, ()=>{
    it('Navegacion por categoria', ()=>{
        Logger.stepNumber(1)
        Logger.stepLog('Iniciar sesión como usuario registrado.')
        Logger.subStep('Navegar a la aplicación demoblaze')
        CommonPageMethods.navigateToDemoBlaze()
        Logger.subStep('Hacer click Log In en el menu superior')
        CommonPageMethods.clickOnLoginOption()
        Logger.subStep('Ingresar credenciales validas')
        LoginMethods.login(LoginData.validCredencials.username,LoginData.validCredencials.password)

        Logger.stepNumber(2)
        Logger.stepLog('Navegar a la pagina de inicio')
        CommonPageMethods.clickOnHomeOption()

        Logger.stepNumber(3)
        Logger.stepLog('Seleccionar una categoría de productos en el menú de navegación.')
        HomeMethods.clickOnLaptopsOption()

        Logger.stepNumber(4)
        Logger.verification('Verificar que se muestra la lista de productos correspondiente a la categoría seleccionada.')
        HomeMethods.verifyProductDisplayed('Sony vaio i5')


    });
    it('Agregar producto al carrito', ()=>{
        Logger.stepNumber(1)
        Logger.stepLog('Iniciar sesión como usuario registrado.')
        Logger.subStep('Navegar a la aplicación demoblaze')
        CommonPageMethods.navigateToDemoBlaze()
        Logger.subStep('Hacer click Log In en el menu superior')
        CommonPageMethods.clickOnLoginOption()
        Logger.subStep('Ingresar credenciales validas')
        LoginMethods.login(LoginData.validCredencials.username,LoginData.validCredencials.password)

        Logger.stepNumber(2)
        Logger.stepLog('Navegar a la pagina de inicio')
        CommonPageMethods.clickOnHomeOption()

        Logger.stepNumber(3)
        Logger.stepLog('Seleccionar una categoría de productos en el menú de navegación.')
        HomeMethods.clickOnLaptopsOption()

        Logger.stepNumber(4)
        Logger.stepLog('Hacer clic en un producto específico')
        HomeMethods.clickOnProductLink('Sony vaio i5')
        cy.wait(3000)
        Logger.stepNumber(5)
        Logger.verification('Verificar que se muestra la página de detalles del producto.')
        ProductsDetailsMethods.verifyProductDetailsPageDisplayed()

        Logger.stepNumber(6)
        Logger.stepLog('Hacer clic en el botón "Add to cart".')
        ProductsDetailsMethods.clickOnaddToCartButton()
        cy.wait(3000)
        Logger.stepNumber(7)
        Logger.verification('Verificar que se muestra la página de detalles del producto.')
        ProductsDetailsMethods.verifyConfirmMessage()
        CommonPageMethods.clickOnCartOption()
        cy.wait(3000)
        CartMethods.verifyProductAdded('Sony vaio i5')

    });
    
    it('Realizar una compra', ()=>{
        Logger.stepNumber(1)
        Logger.stepLog('Iniciar sesión como usuario registrado.')
        Logger.subStep('Navegar a la aplicación demoblaze')
        CommonPageMethods.navigateToDemoBlaze()
        Logger.subStep('Hacer click Log In en el menu superior')
        CommonPageMethods.clickOnLoginOption()
        Logger.subStep('Ingresar credenciales validas')
        LoginMethods.login(LoginData.validCredencials.username,LoginData.validCredencials.password)

        Logger.stepNumber(2)
        Logger.stepLog('Navegar a la pagina de inicio')
        CommonPageMethods.clickOnHomeOption()

        Logger.stepNumber(3)
        Logger.stepLog('Seleccionar una categoría de productos en el menú de navegación.')
        HomeMethods.clickOnLaptopsOption()

        Logger.stepNumber(4)
        Logger.stepLog('Hacer clic en un producto específico')
        HomeMethods.clickOnProductLink('Sony vaio i5')
        cy.wait(3000)
        Logger.stepNumber(5)
        Logger.verification('Verificar que se muestra la página de detalles del producto.')
        ProductsDetailsMethods.verifyProductDetailsPageDisplayed()

        Logger.stepNumber(6)
        Logger.stepLog('Hacer clic en el botón "Add to cart".')
        ProductsDetailsMethods.clickOnaddToCartButton()
        cy.wait(3000)
        Logger.stepNumber(7)
        Logger.verification('Verificar que se muestra la página de detalles del producto.')
        ProductsDetailsMethods.verifyConfirmMessage()
        CommonPageMethods.clickOnCartOption()
        cy.wait(3000)
        CartMethods.verifyProductAdded('Sony vaio i5')

        Logger.stepNumber(8)
        Logger.stepLog('Hacer clic en el botón "Place Order".')
        CartMethods.clickOnPlaceOrderButton()
        
        Logger.stepNumber(9)
        Logger.stepLog('Completar los campos obligatorios en la página de información de envío.')
        PlaceOrderMethods.insertName('Nicolas')
        PlaceOrderMethods.insertCountry('Chile')
        PlaceOrderMethods.insertCity('Stgo')
        PlaceOrderMethods.insertCreditCard('5445646546565645')
        PlaceOrderMethods.insertMonth('12')
        PlaceOrderMethods.insertYear('2026')

        Logger.stepNumber(10)
        Logger.stepLog('Hacer clic en el botón "Purchase".')
        PlaceOrderMethods.clickOnPurchaseButton()

        Logger.stepNumber(10)
        Logger.verification ('Verificar que se muestra un mensaje de confirmación y se redirige al usuario a la página de inicio')
        ThankYouForYourPurchaseMethods.verifyGreenCheckMarkIsDisplayed()
    })
})