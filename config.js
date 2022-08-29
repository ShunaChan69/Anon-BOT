let fs = require('fs')

let flaaa = JSON.parse(fs.readFileSync('./api/fla.json'))
let waifu = JSON.parse(fs.readFileSync('./api/waifu.json'))
let gembi = JSON.parse(fs.readFileSync('./api/gembi.json'))
let bucin = JSON.parse(fs.readFileSync('./api/bucin.json'))
let data = JSON.parse(fs.readFileSync('./data.json'))


global.owner = JSON.parse(fs.readFileSync('./settings/owner.json')) // Put your number to folder /src/owner.json
global.mods = JSON.parse(fs.readFileSync('./settings/moderator.json')) // Want some help?

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  lol: 'https://api.lolhuman.xyz',
  adicug: 'https://api.adiofficial.xyz',
  males: 'https://malest.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://neoxr-api.herokuapp.com': 'apikeylu',
  'https://api.xteam.xyz': 'NezukoTachibana281207',
  'https://melcanz.com': 'melcantik',
  'https://api.lolhuman.xyz': 'jokowi3periode',
  'https://zahirr-web.herokuapp.com': 'apikeylu',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://api.adiofficial.xyz': 'apikeylu'
}

global.wait = '_*Sedang di proses...*_'
global.eror = '_*Maaf server tidak stabil...*_'

//========Url Template Buttons=========//
global.dtu = 'ɪɴꜱᴛᴀɢʀᴀᴍ'
global.urlnya = "https://www.instagram.com/eabdalmufid_"
global.gcbot = 'ɢʀᴏᴜᴩ ʙᴏᴛ'
global.gcurl = "https://chat.whatsapp.com/I2OK9w2mkIpKngLpFs0i93"

//============= callButtons =============//
global.dtc = 'ᴄᴀʟʟ ᴏᴡɴᴇʀ'
global.phn = '+62 8954119543956'
global.kontakOwn = [
  ['628954119543956', 'Bal', 'Owner ʙᴏᴛ', 'bal@balhis.codes', true],
  ['628954119543956', 'Iqbal', 'Owner ʙᴏᴛ', 'bal@balhis.codes', true],
]

//============= Games ================//
global.benar = '_*Benar✅*_'
global.salah = '_*Salah❌*_'
global.dikit = "Dikit lagi, semangat ya :')"
global.multiplier = 100 // The higher, The harder levelup

// Sticker WM
global.packname = data.namabot
global.author = data.owner

//=========== Requirements ==========//  
global.colong1 = 'Anon'
global.colong2 = 'Anon'
global.img = pickRandom(waifu)
global.fla = pickRandom(flaaa)

//=========== Update? ==========//  
global.iklanOwner = `IKLAN`
global.igsessionID = data.sessionID
global.iguserID = data.userID
global.gembi = gembi
global.bucin = bucin
global.grupcurhat = 'ID_GRUP@g.us'
global.pinhead = `_auth=1; _b=\"${data.pinterest_b}\"; _pinterest_sess=${data.pinterest_sess}; _ir=0`

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      healt: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      fishingrod: '🎣',
      pickaxe: '⛏️',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      iron: '⛓️',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      makananpet: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
