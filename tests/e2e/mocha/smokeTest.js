const URL = process.env.BASE_URL;
describe('Smoke Test', function() {
  
  after((browser, done) => {
    browser.end(function() {
      done();
    });
  });

  it('Devo conseguir acessar a url do WebChat 2.0', function(browser) {
    browser
      .url(URL)
  });

  describe('Ao carregar a tela', () => {
    it('Deve aparecer o título no header', function(browser) {
      browser
        .waitForElementVisible('.content-header')
        .assert.containsText('.content-header > .header-title', 'Atendimento - WebChat')
    });

    it('Deve aparecer logo da New Way', function(browser) {
      browser
        .waitForElementVisible('div .company-logo')
        .assert.attributeEquals('.company-logo > img', 'src', 'https://i.ibb.co/v4TKWk2/newway-512.png')
        .assert.visible('.company-logo > img')
    });

    it('Deve aparecer o título e subtítulo da New Way', function(browser) {
      browser
      .waitForElementVisible('div .company-info')
      .assert.containsText('div .company-info > h2', 'New Way')
      .assert.containsText('div .company-info > h3', 'WebChat 2.0 da New Way - Chatbots team rocks!')
    });

    it('Devo conseguir clicar no input', function(browser) {
      browser
        .waitForElementVisible('section .footer-input-message')
        .assert.elementPresent('.input-message')
        .click('.input-message')
    });

    it('Deve aparecer o botão de enviar desabilitado', function(browser) {
      browser
        .waitForElementVisible('section .footer-input-message')
        .assert.elementPresent('.sendMessage[disabled]')
    });

    it('Deve habilitar o botão quando digitar no input', function(browser) {
      browser
        .waitForElementVisible('section .footer-input-message')
        .assert.elementPresent('.sendMessage[disabled]')
        .click('.input-message')
        .setValue('.input-message', 'Teste')
        .assert.elementNotPresent('.sendMessage[disabled]')
        .clearValue('.input-message')
        .pause(2000)
    });

    it('Deve aparecer um balão com typing e mensagem de erro após mensagem digitada pelo usuário', function(browser) {
      browser
        .waitForElementVisible('section .footer-input-message')
        .click('.input-message')
        .setValue('.input-message', 'Inserindo uma nova mensagem')
        .click('.sendMessage')
        .assert.containsText('.card-message-user .card-message-balloon > div', 'Inserindo uma nova mensagem')
        .assert.elementPresent('.typing')
        .waitForElementNotPresent('.typing')
        .waitForElementVisible('.company-logo-chat')
        .assert.attributeEquals('.company-logo-chat', 'src', 'https://i.ibb.co/s5RFWDB/newway-192.png')
        .assert.containsText('.card-message-robot .card-message-balloon', 'Sorry, your connection has been lost, please open another preview.')
    });
    
    it('Deve ficar fullscreen e voltar ao normal ao clicar no botão', function(browser) {
      browser
        .waitForElementVisible('.content-header .content-header-image')
        .click('.content-header .content-header-image')
        .pause(1000)
        .click('.content-header .content-header-image')
        .pause(1000)
    });
  });
});