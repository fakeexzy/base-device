/* My Info
* New Base Multi Device By Aulia Rahman
* Please Follow Me On All Sosial Media
* Instagram : https://instagram.com/auliarahman_ckep
* Tiktok : https://tiktok.com/@liaacans'
* Github : https://github.com/liacans
* Youtube : https://youtube.com/AuliaRahmanOfficial123
* Contact Me on wa.me/6285821676621
*/

/* My Web
* Rest Api : -
* Offc Web : https://indomiebase.my.id
*/

/* Thanks To
* Zero TT7
* Aulia Rahman
* Dhika Ardiant
* Mhankbarbar
* Chaliph
* Allah S.W.T
* Ortu
* All Creator Bot
* All Subscriber Ku
*/

const fs = require('fs')
const chalk = require('chalk')

//━━━━━━━━━━━━━━━[ WEBSITE APIKEY ]━━━━━━━━━━━━━━━━━//

global.APIs = {
liaacans: 'https://zenzapis.xyz',
}

//━━━━━━━━━━━━━━━[ APIKEY ]━━━━━━━━━━━━━━━━━//

global.APIKeys = {
'https://zenzapis.xyz': '0e92565522',
}

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//
global.thumb = fs.readFileSync('./image/thumbnail.jpg')
global.name = 'owner (Owner)',
global.owner = ['8617791041360']
global.premium = ['8617791041360']
global.botname = 'mei BOT'
global.packname = 'Nih Stikel Umtukmu'
global.author = 'mei BOT'
global.prefa = ['','!','.','/','#','$']
global.sp = '⭔'
global.mess = {
success: '✓ Success',
admin: 'Fitur Khusus Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
owner: 'Fitur Khusus Owner Bot',
group: 'Fitur Digunakan Hanya Untuk Group!',
private: 'Fitur Digunakan Hanya Untuk Private Chat!',
bot: 'Fitur Khusus Pengguna Nomor Bot',
wait: '*[WAIT]* SEDANG DIPROSES, HARAP TUNGGU SEBENTAR!',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
premium: "Infinity",
free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
