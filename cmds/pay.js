const Discord = require("discord.js")
const fs = require("fs")
let coins = require("../node_modules/storage/coins.json")

module.exports.run = async(bot, message, args) => {
    message.delete().catch()
    if (message.channel.id === '628630745002409985') return message.reply(`извини, я не могу писать в этом чате, попробуй написать свою команду в <#633248510879203349>`).then(msg => {msg.delete(5000)})
    try{
    function isNumeric(n) {return !isNaN(parseFloat(n)) && isFinite(n)}
    
    let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if (!args[0]) return message.reply(`вы не указали пользователя`)
    if (!coins[pUser.id]) {coins[pUser.id] = {coins: 0}}
    if (!coins[message.author.id]) {coins[message.author.id] = {coins: 0}}
    let res = args.slice(1).join(" ")
    let pCoins = coins[pUser.id].coins
    let sCoins = coins[message.author.id].coins
    if (args[0] == "null") return message.reply(`вы указали не пользователя`)

    if (pUser.id == '551770080409681922') return message.reply('ой как мило ☺ но мне не нужны <:cookiecoin:629367595803344896> спасибо!')
    if (pUser.id == '235148962103951360') return message.reply('этой черепашке не нужны <:cookiecoin:629367595803344896>')
    if (pUser.id == '252128902418268161') return message.reply('а музыкальному боту <:cookiecoin:629367595803344896> зачем? Он ведь даже говорить не умеет')
    if (!pUser) return message.reply(`пользователь не найден`)
    if (pUser.id == message.author.id) return message.reply(`зачем вы пытаетесь передать <:cookiecoin:629367595803344896> самому себе?`)
    if (!isNumeric(res)) return message.reply("вы ввели не число")
    if (res <= 0) return message.reply(`вы отправляете отрицательную сумму <:cookiecoin:629367595803344896>`)
    if (!res) return message.reply(`вы не ввели сумму <:cookiecoin:629367595803344896> для того чтобы их передать`)
    if (!coins[message.author.id]) return message.reply(`упс, вы у нас новенький, у вас нет <:cookiecoin:629367595803344896> попробуйте написать команду снова`)
    if (res > sCoins) return message.reply(`у вас недостаточно <:cookiecoin:629367595803344896>`)

    coins[message.author.id] = {coins: sCoins - parseInt(res)}
    coins[pUser.id] = {coins: pCoins + parseInt(res)}
    const embed = new Discord.RichEmbed()
    .setColor(0x36393F)
    .setDescription(`${message.author} только что отправил ${res} <:cookiecoin:629367595803344896> пользователю ${pUser} Какой добродетель.`)
    .setAuthor("Передача баланса", message.author.displayAvatarURL)
    message.channel.send(embed)
    fs.writeFile("../node_modules/storage/coins.json", JSON.stringify(coins), (err) => {if (err) console.log(err)})
    }catch(err) {console.log(err)}
}
module.exports.help = {
    name: "pay",
    aliases: ["отправить", "give"]
}
