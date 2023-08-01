import { CartElement } from "./Cart.elements";

export class CartMethods{
    static clickOnDeleteLink(productName){
        CartElement.links.delete(productName).click()
    }
}