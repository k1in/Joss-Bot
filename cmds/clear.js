const Discord = require("discord.js")

module.exports.run = async(bot, message, args) => {
    if (!message.member.roles.some(r=>["⠀⠀⠀⠀⠀⠀Администратор⠀⠀⠀⠀⠀⠀"].includes(r.name)))
    return message.reply("у вас недостаточно прав на использование данной команды")
    
    message.channel.bulkDelete(11).then(() => {
        console.log(`Удалено 10 сообщений. Кто их удалил? А вот кто -> ${message.author.username}`)
    })
}
module.exports.help = {
    name: "clear",
    aliases: ["очистка"]
}