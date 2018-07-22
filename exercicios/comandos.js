const env = require('../.env');
const Telegraf = require('telegraf');
const bot = new Telegraf(env.token);

bot.start(async ctx => {
  const from = ctx.update.message.from;
  await ctx.reply(`Seja bem vindo, ${from.first_name}\n Avise se precisar de /ajuda`);
});

bot.command('ajuda', ctx => {
  ctx.reply(`/ajuda: vou mostrar as opções
  /ajuda2: para testar via hears
  /op2: opção generica
  /op3: Outra opção generica`);
});

bot.hears('/ajuda2', ctx => ctx.reply('Eu tambem consigo capturar comando, mas utilize a /ajuda mesmo'));

bot.hears(/\/op/i, ctx => ctx.reply('Resposta para comandos genericos'));

bot.startPolling();