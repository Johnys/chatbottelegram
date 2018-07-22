const env = require('../.env');
const Telegraf = require('telegraf');
const bot = new Telegraf(env.token);

bot.start(async ctx => {
  const from = ctx.update.message.from;
  console.log(from);
  await ctx.reply(`Seja bem vindo, ${from.first_name} 😎`);
  await ctx.replyWithHTML(`Destacando messagem <b>HTML</b><i>de varias</i> <code>formas</code> <pre>possíveis</pre> <a href="http://www.google.com">link</a>`);
  await ctx.replyWithMarkdown(' Destacando mensagem *Markdown*'
  + '_de várias_ `formas` ```possíveis```'
  + '[Google](http://www.google.com)');
});

bot.startPolling();