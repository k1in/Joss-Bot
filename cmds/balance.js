const Discord = require("discord.js")
let coins = require("../coins.json")
const db = require("quick.db")

module.exports.run = async(bot, message, args) => {
    message.delete().catch()
    if (message.channel.id === '628630745002409985') return message.reply(`извини, я не могу писать в этом чате, попробуй написать свою команду в <#633248510879203349>`).then(msg => {msg.delete(5000)})
    if (!coins[message.author.id]) {coins[message.author.id] = {coins: 0}}
    let uCoins = await db.fetch(`money_${message.author.id}`)
    const embed = new Discord.RichEmbed()
    .setColor(0x36393F)
    .setDescription(`${message.author}, ваш баланс составляет: ${uCoins} <:cookiecoin:629367595803344896>`)
    .setAuthor("Проверка баланса", message.author.displayAvatarURL)
    message.channel.send(embed)
}
module.exports.help = {
    name: "balance",
    aliases: ["$", "баланс", "bal", "бал", "money", "деньги", "cookies", "cookie", "куки"]
}