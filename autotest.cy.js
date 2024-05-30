describe('Positive Login Test', () => {
    it('successfully logs in', () => {
      cy.visit('https://login.qa.studio')
      cy.get('#mail').type('german@dolnikov.ru')
      cy.get('#pass').type('iLoveqastudio1')
      cy.get('#loginButton').click()
      cy.get('#messageHeader').contains('Авторизация прошла успешно')
      cy.get('#messageHeader').should('be.visible')
      cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })
  })

  describe('Password Recovery Test', () => {
    it('proceeds with password recovery', () => {
      cy.visit('https://login.qa.studio')
      cy.contains('Забыли пароль').click()
      cy.get('#mailForgot').type('anyemail@example.com')
      cy.get('#restoreEmailButton').click()
      cy.contains('Успешно отправили пароль на e-mail').should('exist')
      cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })
  })

  describe('Negative Login Test', () => {
    it('successfully logs in', () => {
      cy.visit('https://login.qa.studio')
      cy.get('#mail').type('qqweqwe@dolnikov.ru')
      cy.get('#pass').type('iLoveqastudio1')
      cy.get('#loginButton').click()
      cy.get('#messageHeader').contains('Такого логина или пароля нет')
      cy.get('#messageHeader').should('be.visible')
      cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })
  })

  describe('Authorisation Test', () => {
    it('successfully logs in', () => {
      cy.visit('https://login.qa.studio')
      cy.get('#mail').type('germandolnikov.ru')
      cy.get('#pass').type('isdgsdgsg')
      cy.get('#loginButton').click()
      cy.get('#messageHeader').contains('Нужно исправить проблему валидации')
      cy.get('#messageHeader').should('be.visible')
      cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })
  })

  describe('Validation negative Test', () => {
    it('successfully logs in', () => {
      cy.visit('https://login.qa.studio')
      cy.get('#mail').type('dgfdgdsg')
      cy.get('#pass').type('isdgsdgsg')
      cy.get('#loginButton').click()
      cy.get('#messageHeader').contains('Нужно исправить проблему валидации')
      cy.get('#messageHeader').should('be.visible')
      cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })
  })

  describe('Email Case Insensitivity Test', () => {
    it('successfully logs in', () => {
      cy.visit('https://login.qa.studio')
      cy.get('#mail').type('GerMan@Dolnikov.ru')
      cy.get('#pass').type('iLoveqastudio1')
      cy.get('#loginButton').click()
      cy.get('#messageHeader').contains('Авторизация прошла успешно')
      cy.get('#messageHeader').should('be.visible')
      cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })
  })