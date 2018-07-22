const env = require('../.env');
const Telegraf = require('telegraf');
const axios = require('axios');
const bot = new Telegraf(env.token);

const getFileInfo = async id => {
  return await axios.get(`${env.apiURL}/getFile?file_id=${id}`);
};

bot.start(ctx => {
  const from = ctx.update.message.from;
  console.log(from);
  ctx.reply(`Seja bem vindo, ${from.first_name}`);
});

bot.on('voice', async ctx => {
  const voice = ctx.update.message.voice;
  const res = await getFileInfo(voice.file_id);
  ctx.replyWithVoice({url: `${env.apiFileURL}/${res.data.result.file_path}`});
});

bot.on('photo', async ctx => {
  const photo = ctx.update.message.photo[0];
  const res = await getFileInfo(photo.file_id);
  ctx.replyWithPhoto({url: `${env.apiFileURL}/${res.data.result.file_path}`})
});

bot.startPolling();