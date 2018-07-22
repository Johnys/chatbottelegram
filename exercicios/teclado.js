const env = require('../.env');
const Telegraf = require('telegraf');
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token);

const tecladoCarne = Markup.keyboard([
  ['Porco', 'Vaca', 'Carneiro'],
  ['Galinha', 'Eu como é ovo'],
  ['Eu sou vegetariano']
]).resize().extra();


bot.start(async ctx => {
  const from = ctx.update.message.from;
  await ctx.reply(`Seja bem vindo, ${from.first_name}`);
  await ctx.reply('Qual bebida você prefere?', Markup.keyboard(['Coca', 'Pepsi']).resize().oneTime().extra());
});

bot.hears(['Coca', 'Pepsi'], async ctx => {
  await ctx.reply(`Nossa eu tambem gosto de ${ctx.match}`);
  await ctx.reply('Qual sua carne predileta', tecladoCarne);
});


bot.startPolling();