const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:;;;
FN: ᴹᴿ᭄ IyanOffcོ_1ঔৣ꧂
item.ORG: ᴹᴿ᭄ IyanOffcོ_1ঔৣ꧂
item1.TEL;waid=62895323413434:62895323413434@s.whatsapp.net
item1.X-ABLabel:Call Me😝
item2.EMAIL;type=INTERNET: yanslemek@gmail.com
item2.X-ABLabel:📧Email
item3.ADR:;;🎍Pasuruan;;;;
item3.X-ABADR:ac
item3.X-ABLabel:Asal Kota
item4.URL:https//github.com/IyanXd
item4.X-ABLabel:Website
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'Owner Awaa', 
            contacts: [{ vcard }]  
        }
    }
)
let rozi = 'https://telegra.ph/file/d08b8727f867519c53419.jpg'
await conn.send3ButtonImg(m.chat, rozi, "*Hai kak👋,  Itu nomor owner gw…*", '📮: jngn di spam kack', 'Source code', '.sc', 'Back', '.menu', 'Donasi', '.donasi', sentMsg)}
handler.help = ['owner2', 'creator2']
handler.tags = ['info']

handler.command = /^(owner2|creator2)$/i

module.exports = handler
