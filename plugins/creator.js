const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;BAYU OFC;;;'
                    + 'FN:BAYU OFC\n' // full name
                    + 'ORG:BAYU OFC;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6289525518325:+62 895-2551-8325\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'BAYU', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
