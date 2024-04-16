const toM = (a) => '@' + a.split('@')[0];
function handler(m, {groupMetadata}) {
  const ps = groupMetadata.participants.map((v) => v.id);
  const a = ps.getRandom();
  let b;
  do b = ps.getRandom();
  while (b === a);
  m.reply(`*${toM(a)}, 𝘿𝙀𝘽𝙀𝙍𝙄𝘼𝙎 𝘿𝙀 𝘾𝘼𝙎𝘼𝙍𝙏𝙀 💍 𝘾𝙊𝙉 ${toM(b)}, 𝙃𝘼𝘾𝙀𝙉 𝘽𝙐𝙀𝙉𝘼 𝙋𝘼𝙍𝙀𝙅𝘼 💓*`, null, {
    mentions: [a, b],
  });
}
handler.help = ['formarpareja'];
handler.tags = ['main', 'fun'];
handler.command = ['formarpareja', 'formarparejas'];
handler.group = true;
export default handler;
