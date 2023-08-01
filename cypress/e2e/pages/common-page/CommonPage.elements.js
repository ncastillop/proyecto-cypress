export class CommonPageElements{
    static get topMenu(){
        return{
            get home(){
                return cy.get('li.active a')
            },
            get contact(){
                return cy.contains('a', 'Contact')
            },
            get aboutUs(){
                return cy.contains('a', 'About us')
            },
            get cart(){
                return cy.contains('a', 'Cart')
            },
            get login(){
                return cy.get('a[data-target="#logInModal"]')
            },
            get signup(){
                return cy.contains('a', 'Sign up')
            }
        }
    }
}