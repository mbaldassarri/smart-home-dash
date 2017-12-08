const vars = require('./vars');
const TeleBot = require('telebot');
const dash_button = require('node-dash-button');
const bot = new TeleBot(vars.TELEGRAM_BOT_TOKEN);
var dash = dash_button([vars.AMAZON_DASH_ALERT_MAC, vars.AMAZON_DASH_IOT_MAC], null, null, 'all'); 
bot.start();

const alertArray = [
    "Ho bisogno di aiuto! Chiamami",
    "Do si jita?? \u{1F621}",
    "Vai sempre jirenne, do si rriata?! \u{1F624}",
    "Vemme ad aiutà che non me tengo ritta!",
    "Sfacciataccia, veni su! \u{1F612}",
    "NNAMARIA !!! NNAMARI' !!! \u{1F60A}",
    "Me juti?? Grazie cocca..."
  ];

dash.on("detected", function (dash_id){
    if (dash_id === vars.AMAZON_DASH_ALERT_MAC){
        bot.sendMessage(vars.CHAT_ID, alertArray[Math.floor(Math.random() * alertArray.length)]);
        // type http post call to localhost Home-Assistant here to buzzer rPi
    } else if (dash_id === vars.AMAZON_DASH_IOT_MAC){
        bot.sendMessage(vars.CHAT_ID, "iot");
        //type http post call to localhost Home-Assistant here to turn on lights
    }
});

bot.on('/hello', (msg) => {
    return bot.sendMessage(msg.from.id, `Ciao ${ msg.from.first_name }! Ti trovo bene oggi ! \u{1F604}`);
});

bot.on('/accendi_luci', (msg) => {
    //http post call to localhost HA to turn on lights
});

bot.on('/spegni_luci', (msg) => {
    //http post call to localhost HA to turn on lights
});