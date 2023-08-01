import { CommonPageData } from "./CommonPage.data";
import { CommonPageElements } from "./CommonPage.elements";

export class CommonPageMethods{
    static navigateToDemoBlaze(){
        cy.visit(CommonPageData.url)
    }

    static clickOnHomeOption(){
        CommonPageElements.topMenu.home.click()
    }

    static clickOnContactOption(){
        CommonPageElements.topMenu.home.click()
    }

    static clickOnAboutUsOption(){
        CommonPageElements.topMenu.home.click()
    }

    static clickOnCartOption(){
        CommonPageElements.topMenu.home.click()
    }

    static clickOnLoginOption(){
        CommonPageElements.topMenu.home.click()
    }

    static clickOnSignUpOption(){
        CommonPageElements.topMenu.home.click()
    }
}