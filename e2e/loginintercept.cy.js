let url, credentials, message;

describe('Intercepting Login', () => {
  beforeEach(() => {
    cy.fixture('login').then((data) => {
      url = data.url;
      credentials = data.credentials;
      message = data.message;
      cy.visit(url.login);
    });
  });

  it('Login', () => {
    // cy.intercept('GET', '/rabbitmq/session_info/').as('login');
    cy.intercept('POST', '/web/dataset/call_kw/res.users/read').as('login');
    cy.login(credentials.email, credentials.password);


    cy.wait('@login').then((interceptrequest) => {
      const jsonResponse = interceptrequest.response.body; 
      const id = jsonResponse.result[0].id;
      cy.log('Body Response:', id);
      expect(id).to.equal(285)
      cy.debug()
    });


    // cy.wait('@login').then((interceptrequest) => {
    //   const response = interceptrequest.response.statusCode;
    //   cy.log('Response of status:', response);
    //   expect(response).equal(200);
    // });

    // cy.wait('@login').then((interceptrequest) => {
    //   const jsonResponse = JSON.parse(interceptrequest.response.body); 
    //   const sessionId = jsonResponse.session_id;
    //   const sessionToken = jsonResponse.session_token;
    //   expect(sessionId).to.exist; 
    //   expect(sessionToken).to.exist;

    // });
  });
});
