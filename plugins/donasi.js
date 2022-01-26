/**
 * TOLONG JANGAN GANTI GAMBARNYA,NOMORKU DAN SAWERIAKU
 * MENDING KALIAN TAMBAHIN NOMOR KALIAN
*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let handler = async (m) => {
let duit = `*────── 「 DONATE 」 ──────*

Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
┌〔 Donasi • Emoney 〕
├ •GOPAY : 089525518325
├ •DANA : 081285866502
└────
Berapapun donasi kalian akan sangat berarti 👍
“Setiap orang berada di bawah naungan sedekahnya (pada hari kiamat) hingga diputuskan di antara manusia atau ia berkata: “Ditetapkan hukuman di antara manusia.” Yazid berkata: “Abul Khair tidak pernah melewati satu haripun melainkan ia bersedekah padanya dengan sesuatu, walaupun hanya sepotong kue atau bawang merah atau seperti ini.” (HR. Al-Baihqi, Al-Hakim dan Ibnu Khuzaimah).
Arigatou!

Contact person Owner:
wa.me/6289525518325 (Owner)`
let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/Donasijpg-01-26' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: duit,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '🏧 Saweria',
               url: 'tidak tersedia'
             }

           },
               {
             callButton: {
               displayText: 'Telkomsel',
               phoneNumber: '+62 812-8586-6502'
             }
           },           
               {
             quickReplyButton: {
               displayText: '🧒 Owner',
               id: '.owner',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|bagiduit$/i

module.exports = handler
