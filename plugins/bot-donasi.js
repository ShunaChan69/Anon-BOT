let handler = async (m, { conn, usedPrefix }) => {
conn.sendButton(m.chat, `
╭─「 *DONASI* 」
│ > Ingin donasi ke BOT?
│ > QRIS : https://bit.ly/QRISPAY
│ > Dana : 089509952003
│ > Gopay : 089509952003
│ _Hasil donasi akan dipakai untuk membuat BOT ONLINE 24 JAM_
╰────
╭─「 *NOTE* 」
│ > _Tidak ada paksaan untuk kalian berdonasi~_
│ > _Berapapun jumlahnya silahkan berdonasi~_
╰────

「 *Total Donasi Yang Masuk : Rp. 170.000* 」
`.trim(), wm, 'Menu', usedPrefix + 'menu', m)
}
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
