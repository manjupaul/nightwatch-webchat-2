const URL = process.env.URL_QUESTION
module.exports = {

  after: function(browser) {
    browser.end();
  },
  
  'Deve abrir a URL com o fluxo de questões': function(browser) {
    browser
      .url(URL)
      .waitForElementVisible('.card-message-robot')
      .assert.containsText('.card-message-robot:nth-child(2) > .card-message-balloon > div', 'asdasdasdad')
      .assert.containsText('.card-message-robot:nth-child(3) > .card-message-balloon > div', '1 - sim')
      .assert.containsText('.card-message-robot:nth-child(3) > .card-message-balloon > div', '2 - nao')
  },
  'Deve haver as opções de resposta em botões': function(browser) {
    browser
      .waitForElementVisible('.show-choices.card-buttons-title')
      .assert.visible('.card-buttons')
      .assert.containsText('.card-buttons-item:nth-child(1)', 'sim')
      .assert.containsText('.card-buttons-item:nth-child(2)', 'nao')
  },
  'Deve clicar no botão \'sim\' e receber uma resposta': function(browser) {
    browser
      .click('.card-buttons-item:nth-child(1)')
      .assert.elementPresent('.typing')
      .waitForElementNotPresent('.typing')
      .assert.containsText('.card-message-robot:nth-child(5) > .card-message-balloon > div', 'sabia que ja tinha dado a bunda')
      .assert.containsText('.card-message-robot:nth-child(6) > .card-message-balloon > div', '1 - sim')
      .assert.containsText('.card-message-robot:nth-child(6) > .card-message-balloon > div', '2 - nao')
  },
  'Deve clicar no botão \'nao\' e receber uma resposta': function(browser) {
    browser
      .click('.card-buttons-item:nth-child(2)')
      .assert.elementPresent('.typing')
      .waitForElementNotPresent('.typing')
      .assert.containsText('.card-message-robot:nth-child(8) > .card-message-balloon > div', 'pode falar a verdade vc ja deu a bunda sim kkkkk')
      .assert.containsText('.card-message-robot:nth-child(9) > .card-message-balloon > div', 'vlw !!!!')
  }
}