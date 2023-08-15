class LoginPage {
    // Locators
login = '#login'
password = '#password'
buuton = 'button[type="submit"]'

    getEmailInput() {
      return cy.get(this.login);
    }
  
    getPasswordInput() {
      return cy.get(this.password);
    }
  
    getLoginButton() {
      return cy.get(this.buuton);
    }
  
    // Actions
    typeEmail(email) {
      this.getEmailInput().type(email); //cy.get("#login").type(email);
    }
  
    typePassword(password) {
    return  this.getPasswordInput().type(password); // cy.get('#password');
    }
  
    clickLogin() {
      this.getLoginButton().click();
    }

    validation(selector){
     selector.invoke('prop','validationMessage')
                        .should('eq','Please fill out this field.')
    }

    errormessage(){
     return cy.get('.alert').should('contain', 'Wrong login/password')

    }

  }
  
  // Export the Page Object for use in tests
  export default LoginPage;
  