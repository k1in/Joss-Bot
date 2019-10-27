const Discord = require("discord.js")

module.exports.run = async(bot, message, args) => {
    message.delete().catch()
    if (message.channel.id === '628630745002409985') return message.reply(`извини, я не могу писать в этом чате, попробуй написать свою команду в <#633248510879203349>`).then(msg => {msg.delete(5000)})
    const embed1 = new Discord.RichEmbed()
    .setColor(0x36393F)
    .setDescription("**Привет! Вот краткий список того, что я могу:**\n\n!$ - Проверка баланса\n\n!casino - Казино\n\n!erules - Правила участия на ивентах\n\n!help - Справка\n\n!pay - Отправить <:cookiecoin:629367595803344896> пользователю\n\n!shop - Магазин ролей")
    message.channel.send(embed1)
}
module.exports.help = {
    name: "help",
    aliases: ["хелп", "помощь", "commands", "команды"]
}