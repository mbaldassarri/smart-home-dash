vars = require('./vars');
const TeleBot = require('telebot');
const bot = new TeleBot(vars.TELEGRAM_BOT_TOKEN);

bot.start();
//TODO   settare codici in un file esterno, integrare dash button, creare repo
bot.sendMessage(vars.TELEGRAM_BOT_TOKEN, 'yeah');

bot.on('/hello', (msg) => {
    return bot.sendMessage(msg.from.id, `Hello, ${ msg.from.first_name }! You are cool!`);
});
