let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/e9f2deab6243e78ec54e3.png', m, { packname: "AwaaBot", author: "@IyanOffc" })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler
