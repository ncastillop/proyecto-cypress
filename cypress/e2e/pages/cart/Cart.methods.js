import { CartElement } from "./Cart.elements";

export class CartMethods{
    static clickOnDeleteLink(productName){
        CartElement.links.delete(productName).click()
    }

    static verifyProductAdded(productName){
        CartElement.links.delete(productName).should('be.visible')
    }

    static clickOnPlaceOrderButton(){
        CartElement.buttons.placeOrder.click()
    }
}