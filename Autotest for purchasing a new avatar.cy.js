describe('Покупка аватара', function () {                               // название набора тестов
   it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
        cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
        cy.get('input[type="email"]').type('gfdvdsfsd@gmail.com');      // вводим логин
        cy.get('input[type="password"]').type('Aa5dsfsdf2!');    // вводим пароль
        cy.intercept('POST', '/api/login').as('loginRequest'); //перехватывается все POST-запросы к /api/login, и они помечаются псевдонимом loginRequest.
        cy.get('.auth__button').click();  // нажимаем кнопку Подтвердить
        cy.wait('@loginRequest')                   // Ожидаем ответ
        cy.get('.header__btns > [href="/shop"]').click();               // нажимаем кнопку Магазин
        cy.get('.available > button').first().click();                  // кликаем по кнопке Купить у первого доступного аватара
        cy.get('.credit').type('4620869113632996');                     // вводим номер карты
        cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
        cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
        cy.get('.k_input_name').type('NAME');                           // вводим имя владельца действия карты
        cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
        cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
        cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
        cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
    });
});