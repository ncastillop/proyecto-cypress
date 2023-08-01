import { ThankYouForYourPurchaseElements } from "./ThankYouForYourPurchase.elements";

export class ThankYouForYourPurchaseMethods{
    static clickOnOkButton(){
        ThankYouForYourPurchaseElements.buttons.ok.click()
    }

    static verifyGreenCheckMarkIsDisplayed(){
        ThankYouForYourPurchaseElements.icons.greenCheckMark.should("exist")
    }
}