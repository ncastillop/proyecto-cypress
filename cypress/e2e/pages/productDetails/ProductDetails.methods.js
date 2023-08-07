import { CommonPageMethods } from "../common-page/CommonPage.methods";
import { ProductsDetailsElements } from "./ProductDetails.elements";

export class ProductsDetailsMethods{
    
    static clickOnaddToCartButton(){
        ProductsDetailsElements.buttons.addToCart.click()
    }

    static verifyProductDetailsPageDisplayed(){
        ProductsDetailsElements.buttons.addToCart.should('be.visible')
    }

    static verifyConfirmMessage(){
        CommonPageMethods.verifyAlert('Product added.')
    }
}