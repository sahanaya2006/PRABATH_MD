const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("94720797915")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Sahan:Sahan123456@cluster0.2s8k9t2.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'sam@sec.live'
global.github = 'https://github.com/sahanaya2006/PRABATH-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.devs = '94762280384';
global.website = 'https://github.com/prabathLK/PRABATH-MD' //wa.me/+94762280384
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://textpro.me/images/user_image/2023/11/654a8bc2bbed8.jpg'
module.exports = {
  OPENAI_API_KEY:process.env.OPENAI_API_KEY || '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',
  botname: process.env.BOT_NAME || 'Sahan-MD',
  dl_limit: process.env.DL_SIZE || '300',
  art: process.env.AUTO_RESTART || 'true',
  sudo: process.env.SUDO || '94762280384',
  alivepic: process.env.ALIVE_IMG || 'https://textpro.me/images/user_image/2023/11/654a8bc2bbed8.jpg',
  alivemsj: process.env.ALIVE_MSJ || '*POWERD BY Sahan-MD* 🎊',
  ownername:process.env.OWNER_NAME || 'Sahan',
  sessionName: process.env.SESSION_ID || 'PUT-HERE',
  author: process.env.PACK_INFO.split(";")[0] || 'sahan', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'true',
  packname: process.env.PACK_INFO.split(";")[1] || 'Sahan',
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'fuck,huth,fucking,huththa,huththo,hukanna,fucked,pakaya,pako,ponnaya,ponnayo,kariya,kariyo,huththaa,hutta',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true',
  antifake : process.env.FAKE_COUNTRY_CODE || '91',
  readmessage: process.env.READ_MESSAGE || true,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || 'put your herokuapp name',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || 'a8149aa3-ba4a-43ba-9278-685a02d2f929',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || 'Hi',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || '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',
  VERSION: process.env.VERSION === undefined ? 'v.5.0.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'PRABATH-MD',
  WORKTYPE: process.env.WORK_TYPE === undefined ? 'public' : process.env.WORK_TYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
