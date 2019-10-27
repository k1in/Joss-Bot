const Discord = require("discord.js")

module.exports.run = async(bot, message, args) => {
    message.delete().catch()
    if (message.channel.id === '628630745002409985') return message.reply(`извини, я не могу писать в этом чате, попробуй написать свою команду в <#633248510879203349>`).then(msg => {msg.delete(5000)})
    if (!message.member.roles.some(r=>["⠀⠀⠀⠀⠀⠀Администратор⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀ Ведущий Ивентов ⠀⠀⠀⠀⠀"].includes(r.name)))
    return message.reply("у вас недостаточно прав на использование данной команды")
    let channel = message.guild.channels.find(c => c.name == "Мафия" && c.type == "voice")
    channel.delete()
}
module.exports.help = {
    name: "mafiaend",
    aliases: ["мафияенд"]
}