const vars = require('./vars');
const TeleBot = require('telebot');
const dash_button = require('node-dash-button');
const bot = new TeleBot(vars.TELEGRAM_BOT_TOKEN);
var dash = dash_button(vars.AMAZON_DASH_ALERT_MAC, null, null, 'all'); 
bot.start();

const alertArray = [
    "I need help! Come here",
    "Insert other random alerts here..."
  ];

dash.on("detected", function (dash_id){
    if (dash_id === vars.AMAZON_DASH_ALERT_MAC){
        bot.sendMessage(vars.CHAT_ID, alertArray[Math.floor(Math.random() * alertArray.length)]);
    }
});

bot.on('/hello', (msg) => {
    return bot.sendMessage(msg.from.id, `Ciao ${ msg.from.first_name }! Ti trovo bene oggi ! \u{1F604}`);
});