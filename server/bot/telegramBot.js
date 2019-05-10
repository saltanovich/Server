const TelegramBot = require('node-telegram-bot-api');
const { telegramBotToken } = require('../config/config');

const bot = new TelegramBot(telegramBotToken, {polling: true});

bot.welcome = (chatId) => {
  bot
    .sendMessage(chatId, 'Hi, user. Welcome to Random Coffee!')
    .catch(error => console.log(error));
}

bot.ban = (chatId) => {
  bot.sendMessage(chatId, `You are banned!`);
};

module.exports = bot;
