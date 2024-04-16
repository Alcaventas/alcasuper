/*import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'*/
let handler = async (m, { conn, usedPrefix, command}) => {
  

let Reglas = ` ⚠️𝗥𝗘𝗦𝗣𝗘𝗧𝗔 𝗟𝗔𝗦 𝗥𝗘𝗚𝗟𝗔𝗦⚠️\n
1: ¡𝙽𝙾 𝙻𝙻𝙰𝙼𝙰𝚁 𝙰𝙻 𝙱𝙾𝚃!,
2: ¡𝙽𝙾 𝙷𝙰𝙲𝙴𝚁𝙻𝙴 𝚂𝙿𝙰𝙼 𝙰𝙻 𝙱𝙾𝚃!,
3: ¡𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙰 𝙰𝙻 𝙾𝚆𝙽𝙴𝚁 𝚂𝙾𝙻𝙾 𝚂𝙸 𝙴𝚂 𝙸𝙼𝙿𝙾𝚁𝚃𝙰𝙽𝚃𝙴!,
4: ¡𝙽𝙾 𝙴𝚂𝙲𝚁𝙸𝙱𝙰𝚂 𝙰𝙻 𝙿𝚁𝙸𝚅𝙰𝙳𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃!,
5: ¡𝚁𝙴𝚂𝙿𝙴𝚃𝙰 𝙻𝙾𝚂 𝚃𝙴𝚁𝙼𝙸𝙽𝙾𝚂 𝚈 𝙲𝙾𝙽𝙳𝙸𝙲𝙸𝙾𝙽𝙴𝚂!,
6: ¡𝚄𝚂𝙰 𝙴𝙻 𝙱𝙾𝚃 𝙳𝙴 𝙼𝙰𝙽𝙴𝚁𝙰 𝙰𝙿𝚁𝙾𝙿𝙸𝙰𝙳𝙰!,
7: ¡𝙽𝙾 𝙸𝙽𝚂𝚄𝙻𝚃𝙰𝚁 𝙰𝙻 𝙱𝙾𝚃!

📔𝗶𝗻𝗳𝗼 : 𝚂𝙸 𝚂𝙴 𝚀𝚄𝙴𝙱𝚁𝙰𝙽𝚃𝙰 𝙰𝙻𝙶𝚄𝙽𝙰 𝙳𝙴 𝙻𝙰𝚂 𝚁𝙴𝙶𝙻𝙰𝚂,
𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝙱𝙰𝙽𝙴𝙰𝙳𝙾 𝚈 𝙱𝙻𝙾𝚀𝚄𝙴𝙰𝙳𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃.

${md}
`.trim()
await conn.sendFile(m.chat, imagen1, 'gata.mp4', Reglas)
}
handler.customPrefix = /reglas|Reglas|reglasbot, botreglas|uso, usobot|uso del bot/i
handler.command = new RegExp
handler.register = true
handler.exp = 70
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
