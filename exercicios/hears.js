const env = require('../.env');
const Telegraf = require('telegraf');
const axios = require('axios');
const moment = require('moment');
const bot = new Telegraf(env.token);

const getFileInfo = async id => {
  return await axios.get(`${env.apiURL}/getFile?file_id=${id}`);
};

bot.start(ctx => {
  const from = ctx.update.message.from;
  console.log(from);
  ctx.reply(`Seja bem vindo, ${from.first_name}`);
});

bot.hears('pizza', ctx => {
  ctx.reply('Quero');
});

bot.hears(['figado', 'chuchu'], ctx => {
  ctx.reply('Não Quero');
});

bot.hears('🐷', ctx => {
  ctx.reply('bacon');
});

bot.hears(/burguer/i, ctx=> {
  ctx.reply('Quero muito');
});

bot.hears(/(\d{2}\/\d{2}\/\d{4})/, ctx => {
  moment.locale('pt-BR');
  const data = moment(ctx.match[1], 'DD/MM/YYYY');
  ctx.reply(`${ctx.match[1]} cai em ${data.format('dddd')}`);
});

bot.startPolling();