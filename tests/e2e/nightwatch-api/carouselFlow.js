const URL = 'http://localhost:3000/?flowId=5d2a3d79ea2f873566adcb54';
module.exports = {
  'Deve abrir a URL com três mensagens do bot': function(browser) {
    browser
      .url(URL)
      .waitForElementVisible('.card-message-robot')
      .assert.visible('.card-message-robot:nth-child(2) > .card-message-balloon > div')
      .assert.containsText('.card-message-robot:nth-child(2) > .card-message-balloon > div', 'bora la mano')
      .assert.visible('.image-card-carousel-wrapper:nth-child(3) > .image-card-carousel')
      .assert.visible('.card-message-robot:nth-child(4) > .card-message-balloon > div')
      .assert.containsText('.card-message-robot:nth-child(4) > .card-message-balloon > div', 'vamos testar com este texto agora :D')
  },
  'Deve conter pelo menos duas imagens na segunda mensagem': function(browser) {
    browser
      .waitForElementVisible('.card-message-robot')
      .assert.visible('.image-card-carousel-wrapper:nth-child(3) > .image-card-carousel > img:nth-child(2)')
  },
  'Deve finalizar o teste': function(browser) {
    browser.end();
  }
}