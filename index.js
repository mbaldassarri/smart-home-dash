const vars = require('./vars');
const TeleBot = require('telebot');
const dash_button = require('node-dash-button');
const bot = new TeleBot(vars.TELEGRAM_BOT_TOKEN);
var dash = dash_button([vars.AMAZON_DASH_ALERT_MAC, vars.AMAZON_DASH_IOT_MAC], null, null, 'all'); //address from step above
//FATTO FIN ORA : settare codici in un file esterno, integrare dash button, creare repo
bot.start();

//bot.sendMessage(vars.TELEGRAM_BOT_TOKEN, 'yeah');

dash.on("detected", function (dash_id){
    if (dash_id === vars.AMAZON_DASH_ALERT_MAC){
        console.log("omg nonna ha bisogno di aiuto");
        bot.sendMessage(vars.TELEGRAM_BOT_TOKEN, 'Ho bisogno di aiuto! Chiamami');
        // type http post call to localhost Home-Assistant here to buzzer rPi
    } else if (dash_id === vars.AMAZON_DASH_IOT_MAC){
        console.log("omg found the other! turn on the lights");
        //type http post call to localhost Home-Assistant here to turn on lights
    }
});

bot.on('/hello', (msg) => {
    return bot.sendMessage(msg.from.id, `Ciao ${ msg.from.first_name }! Ti trovo bene oggi ! :)`);
});

//aggiungere evento al bot
bot.on('/accendi_luci', (msg) => {
    //http post call to localhost HA to turn on lights
});

//aggiungere evento al bot
bot.on('/spegni_luci', (msg) => {
    //http post call to localhost HA to turn on lights
});