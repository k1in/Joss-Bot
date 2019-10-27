const Discord = require("discord.js")

module.exports.run = async(bot, message, args) => {
    message.delete().catch()
    if (message.channel.id === '628630745002409985') return message.reply(`извини, я не могу писать в этом чате, попробуй написать свою команду в <#633248510879203349>`).then(msg => {msg.delete(5000)})
    if (!message.member.roles.some(r=>["⠀⠀⠀⠀⠀⠀Администратор⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀ ⠀⠀⠀⠀ Репортер⠀⠀⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀ ⠀⠀   Модератор ⠀⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀⠀      Программист    ⠀⠀⠀⠀⠀⠀"].includes(r.name)))
    return message.reply("у вас недостаточно прав на использование данной команды")
    const embed = new Discord.RichEmbed()
    .setColor(0x36393F)
    .setDescription(args.join(" ") + " @everyone")
    .setAuthor("Новостное Оповещение", bot.user.displayAvatarURL)
    message.channel.send(embed)
}
module.exports.help = {
    name: "emb",
    aliases: ["емб"]
}