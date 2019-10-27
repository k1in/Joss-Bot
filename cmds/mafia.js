const Discord = require("discord.js")

module.exports.run = async(bot, message, args) => {
    message.delete().catch()
    if (message.channel.id === '628630745002409985') return message.reply(`извини, я не могу писать в этом чате, попробуй написать свою команду в <#633248510879203349>`).then(msg => {msg.delete(5000)})
    if (!message.member.roles.some(r=>["⠀⠀⠀⠀⠀⠀Администратор⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀ Ведущий Ивентов ⠀⠀⠀⠀⠀"].includes(r.name)))
    return message.reply("у вас недостаточно прав на использование данной команды")
    if (typeof message.member.voiceChannel == "undefined") return message.author.send('Уважаемый пользователь, подключитесь в любой из голосовых каналов для того чтобы воспользоваться командой **!mafia**')
        message.guild.createChannel("Мафия", {type: "voice"}).then(channel => {
            let category = message.guild.channels.find(c => c.name == "Ивенты" && c.type == "category")
            channel.setParent(category.id)
            channel.overwritePermissions(message.guild.defaultRole, {
                VIEW_CHANNEL: true,
                CONNECT: true,
                SPEAK: true
            })
            channel.overwritePermissions(message.guild.roles.find(role => role.name === "⠀⠀⠀⠀⠀ ⠀⠀   Модератор ⠀⠀⠀⠀⠀⠀⠀"), {
                VIEW_CHANNEL: true,
                CONNECT: true,
                SPEAK: true,
                MUTE_MEMBERS: true,
                MOVE_MEMBERS: true
            })
            channel.overwritePermissions(message.guild.roles.find(role => role.name === "⠀⠀⠀⠀⠀ Ведущий Ивентов ⠀⠀⠀⠀⠀"), {
                VIEW_CHANNEL: true,
                CONNECT: true,
                SPEAK: true,
                MUTE_MEMBERS: true,
                MOVE_MEMBERS: true
            })
            channel.createInvite().then(invite => {
                let eventchannel = bot.channels.get(`628650328283152425`) 
                const embed = new Discord.RichEmbed()
                .setDescription(`@everyone\nПрямо сейчас пройдет ивент **МАФИЯ**\n**Ведущий ивента:** ${message.author}\n**Место проведения ивента:** ${invite}\n**Правила проведения ивента:** Можно узнать, написав !erules в любой из текстовых каналов.`)
                .setAuthor("Оповещение о Ивенте!", bot.user.displayAvatarURL)
                .setImage("https://cdn.discordapp.com/attachments/577208827548794884/631534676485472266/giphy.gif")
                .setColor(0x36393F)
                eventchannel.send(embed)
            })
            message.member.setVoiceChannel(channel)
        }).catch(console.error)
    
}
module.exports.help = {
    name: "mafia",
    aliases: ["мафия"]
}