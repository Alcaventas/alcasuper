const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*𝙈𝙀𝙉𝙎𝘼𝙅𝙀:* *𝘼𝙡𝙘𝙖𝙗𝙤𝙩 𝙫.1*`;
  let teks = `*𝙈𝙀𝙉𝘾𝙄𝙊𝙉 𝙂𝙀𝙉𝙀𝙍𝘼𝙇*\n\n *𝘼𝙡𝙘𝙖𝙗𝙤𝙩 𝙫.1* \n\n🫰🏻 *𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙎:*\n`;
  for (const mem of participants) {
    teks += `🍭 @${mem.id.split('@')[0]}\n`;
  }
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;