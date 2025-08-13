const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╔═══════════════════╗
   *🤖 ${settings.botName || '𝗧𝗘𝗖𝗛𝗞𝗘𝗘𝗗-𝗠𝗗'}*  
   Version: *${settings.version || '2.0.5'}*
   by ${settings.botOwner || '𝗧𝗘𝗖𝗛𝗞𝗘𝗘𝗗'}
   YT : ${global.ytch}
╚═══════════════════╝

📜 *𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗖𝗔𝗧𝗘𝗚𝗢𝗥𝗜𝗘𝗦:*

╔══════════════════╗
      🌐 *GENERAL TOOLS*
╠══════════════════╣
]➤ 📔  .help / .menu  
]➤ 🟢  .alive  
]➤ 📶  .ping  
]➤ 🔊  .tts <text>  
]➤ 👑  .owner  
]➤ 😂  .joke  
]➤ 💬  .quote  
]➤ 🧠  .fact  
]➤ 🌦️  .weather <city>  
]➤ 📰  .news  
]➤ 🎨  .attp <text>  
]➤ 🎶  .lyrics <song_title>  
]➤ 🎱  .8ball <question>  
]➤ 👥  .groupinfo  
]➤ 🛡️  .staff / .admins  
]➤ 🔍  .vv  
]➤ 🌐  .trt <text> <lang>  
]➤ 📸  .ss <link>  
]➤ 🆔  .jid  
]➤ 🕵️  .hackgc <group link>  
]➤ 🚫  .ban-channel <channel link>  
╚══════════════════╝
╔══════════════════╗
      👮‍♂️ *𝗔𝗗𝗠𝗜𝗡 𝗖𝗢𝗡𝗧𝗥𝗢𝗟𝗦*
╠══════════════════╣
]➤ 🚫  .ban @user  
]➤ ⬆️  .promote @user  
]➤ ⬇️  .demote @user  
]➤ 🔇  .mute <minutes>  
]➤ 🔊  .unmute  
]➤ 🗑️  .delete / .del  
]➤ 👢  .kick @user  
]➤ ⚠️  .warn @user  
]➤ 📋  .warnings @user  
]➤ 🔗  .antilink  
]➤ 🤬  .antibadword  
]➤ 🧹  .clear  
]➤ 📣  .tag <message>  
]➤ 📢  .tagall  
]➤ 🤖  .chatbot  
]➤ 🔄  .resetlink  
]➤ 👋  .welcome <on/off>  
]➤ 📴  .goodbye <on/off>  
╚══════════════════╝
╔═══════════════╗
      🔒 *𝗢𝗪𝗡𝗘𝗥 𝗭𝗢𝗡𝗘*
╠═══════════════╣
]➤ 🔧  .mode
]➤ 📶  .autostatus
]➤ 🧼  .clearsession
]➤ 🛡️  .antidelete
]➤ 🧹  .cleartmp
]➤ 🖼️  .setpp <reply to image>
]➤ 😎  .autoreact
╚═══════════════╝
╔══════════════════╗
    🎨 *𝗜𝗠𝗔𝗚𝗘 & 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗙𝗨𝗡*
╠══════════════════╣
]➤ 🌫️  .blur <image>  
]➤ 🖼️  .simage <reply to sticker>  
]➤ 🧊  .sticker <reply to image>  
]➤ 🧷  .tgsticker <link>  
]➤ 😂  .meme  
]➤ 🎁  .take <packname>  
]➤ 😍  .emojimix <emoji1>+<emoji2>  
╚══════════════════╝  

╔══════════════════╗
    🎮 *𝗚𝗔𝗠𝗘𝗦 & 𝗖𝗛𝗔𝗟𝗟𝗘𝗡𝗚𝗘𝗦*
╠══════════════════╣
]➤ ❌⭕  .tictactoe @user  
]➤ 🧠  .hangman  
]➤ 🔤  .guess <letter>  
]➤ 📚  .trivia  
]➤ ✅  .answer <answer>  
]➤ 😇  .truth  
]➤ 😈  .dare  
╚══════════════════╝  

╔══════════════════╗
    🤖 *𝗔𝗜 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦*
╠══════════════════╣
]➤ 💬  .gpt <question>  
]➤ 🧠  .gemini <question>  
]➤ 🎨  .imagine <prompt>  
]➤ 🔮  .flux <prompt>  
╚══════════════════╝
╔══════════════════╗
    🎯 *𝗙𝗨𝗡 & 𝗦𝗢𝗖𝗜𝗔𝗟*
╠══════════════════╣
]➤ 💖  .compliment @user  
]➤ 🤬  .insult @user  
]➤ 😘  .flirt  
]➤ 📝  .shayari  
]➤ 🌙  .goodnight  
]➤ 🌹  .roseday  
]➤ 🎭  .character @user  
]➤ 💀  .wasted @user  
]➤ 💞  .ship @user  
]➤ 🥺  .simp @user  
]➤ 🤡  .stupid @user [text]  
╚══════════════════╝  

╔══════════════════╗
    🔤 *𝗧𝗘𝗫𝗧𝗠𝗔𝗞𝗘𝗥 𝗦𝗧𝗬𝗟𝗘𝗦*
╠══════════════════╣
]➤ 🧱  .metallic <text>  
]➤ ❄️  .ice <text>  
]➤ 🌨️  .snow <text>  
]➤ 💎  .impressive <text>  
]➤ 🧬  .matrix <text>  
]➤ 💡  .light <text>  
]➤ 🌈  .neon <text>  
]➤ 😈  .devil <text>  
]➤ 💜  .purple <text>  
]➤ ⚡  .thunder <text>  
]➤ 🍃  .leaves <text>  
]➤ 🎖️  .1917 <text>  
]➤ 🏟️  .arena <text>  
]➤ 🕶️  .hacker <text>  
]➤ 🏖️  .sand <text>  
]➤ 🎀  .blackpink <text>  
]➤ 🌀  .glitch <text>  
]➤ 🔥  .fire <text>  
╚══════════════════╝  

╔══════════════════╗
    📥 *𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥𝗦*
╠══════════════════╣
]➤ 🎵  .play <song_name>  
]➤ 🎶  .song <song_name>  
]➤ 📸  .instagram <link>  
]➤ 📘  .facebook <link>  
]➤ 🎥  .tiktok <link>  
]➤ ?repo
video <song name>  
]➤ 📹  .ytmp4 <link>  
╚══════════════════╝  

╔══════════════════╗
    💻 *𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 𝗧𝗢𝗢𝗟𝗦*
╠══════════════════╣
]➤ 🧾  .commands not available or not installed
╚══════════════════╝
📢 *Join our channel for updates!*`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363418929897261@newsletter',
                        newsletterName: 'TECHKEED-MD',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363418929897261@newsletter',
                        newsletterName: 'TECHKEED-MD BY TIEGOPHASHA',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
