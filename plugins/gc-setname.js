import Presence from '@whiskeysockets/baileys';
const handler = async (m, {conn, args, text}) => {
  if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝙌𝙐𝙀 𝙌𝙐𝙄𝙀𝙍𝙀 𝘼𝙂𝙍𝙀𝙂𝘼𝙍 𝙋𝘼𝙍𝘼 𝙇𝘼𝙎 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝘼𝙎*`;
  try {
    const text = args.join` `;
    if (!args || !args[0]) {
    } else {
      conn.groupUpdateSubject(m.chat, text);
    }
  } catch (e) {
    throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙉𝙊 𝙋𝙐𝙀𝘿𝙀 𝙎𝙀𝙍 𝙈𝘼𝙎 𝘿𝙀 25 𝙇𝙀𝙏𝙍𝘼𝙎*';
  }
};
handler.help = ['setname <text>'];
handler.tags = ['group'];
handler.command = /^(setname)$/i;
handler.group = true;
handler.admin = true;
export default handler;
