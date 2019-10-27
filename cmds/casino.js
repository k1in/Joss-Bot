const Discord = require("discord.js")
let coins = require("../node_modules/storage/coins.json")

module.exports.run = async(bot, message, args) => {
    try {
        message.delete().catch()
        if (message.channel.id === '628630745002409985') return message.reply(`извини, я не могу писать в этом чате, попробуй написать свою команду в <#633248510879203349>`).then(msg => {msg.delete(5000)})
        function isNumeric(n) {return !isNaN(parseFloat(n)) && isFinite(n)}
        let slot = ['<:pepewtf:631403971684335617>', '<:pepepog:631403972443504651>', '<:pepelewd:631403972044914688>', '<:pepelaugh:631403972225400842>', '<:pepedream:631403971952508928>', '<:pepehm:631403972443504653>']
        let rand1 = Math.floor(Math.random() * (slot.length - 0) + 0)
        let rand2 = Math.floor(Math.random() * (slot.length - 0) + 0)
        let rand3 = Math.floor(Math.random() * (slot.length - 0) + 0)
        let result = slot[rand1] + slot[rand2] + slot[rand3]

        if (150 < args[0]) return message.reply('увы, максимальная ставка - 150 <:cookiecoin:629367595803344896>')
        if (!args[0]) return message.reply('вы не указали ставку. Попробуйте: !casino [сумма]')
        if (!isNumeric(args[0])) return message.reply("вы ввели не число")
        if (args[0] <= 0) return message.reply(`вы не можете поставить отрицательную сумму <:cookiecoin:629367595803344896>`)
        if (args[0] > coins[message.author.id].coins) return message.reply(`у вас недостаточно <:cookiecoin:629367595803344896>`)
        let coef1 = 2
        const embed = new Discord.RichEmbed()
            .setColor(0x36393F)
        if (rand1 == rand2 && rand2 == rand3) {
                embed.setDescription(`⠀⠀⠀⠀⠀⠀  ${result}\n⠀⠀⠀⠀🎰**ДЖЕКПОТ**🎰\nВаш выигрыш составил: ${Math.floor(parseInt(args[0]) * coef1)} <:cookiecoin:629367595803344896>\n⠀⠀⠀⠀⠀Ваш баланс: ${coins[message.author.id].coins + Math.floor(parseInt(args[0]) * coef1)}`);
                message.channel.send(embed)
                if (!coins[message.author.id]) {coins[message.author.id] = {coins: 0}}
                coins[message.author.id] = {coins: coins[message.author.id].coins + Math.floor(parseInt(args[0]) * coef1)}
                fs.writeFile("../node_modules/storage/coins.json", JSON.stringify(coins), (err) => {if (err) console.log(err)})
        } else if (rand1 == rand2 || rand2 == rand3 || rand1 == rand3) {
            embed.setTitle(`⠀⠀⠀⠀              ⠀⠀**Казино**`)
            embed.setDescription(`⠀⠀⠀⠀  ⠀⠀${result}\n⠀⠀  🎰**ВЫ ПОБЕДИЛИ**🎰\nВаш выигрыш составил: ${args[0]} <:cookiecoin:629367595803344896>\n⠀⠀⠀⠀⠀   Ваш баланс: ${coins[message.author.id].coins + Math.floor(parseInt(args[0]))}`);
            message.channel.send(embed)
            if (!coins[message.author.id]) {coins[message.author.id] = {coins: 0}}
            coins[message.author.id] = {coins: coins[message.author.id].coins + Math.floor(parseInt(args[0]))}
            fs.writeFile("../node_modules/storage/coins.json", JSON.stringify(coins), (err) => {if (err) console.log(err)})
        }else {
            embed.setTitle(`⠀⠀⠀⠀              **Казино**`)
            embed.setDescription(`⠀⠀⠀⠀  ${result}\n🎰**ВЫ ПРОИГРАЛИ**🎰\n⠀         Вы проиграли: ${args[0]} <:cookiecoin:629367595803344896>\n⠀⠀⠀      Ваш баланс: ${coins[message.author.id].coins - Math.floor(parseInt(args[0]))}`);
            message.channel.send(embed)
            if (!coins[message.author.id]) {coins[message.author.id] = {coins: 0}}
            coins[message.author.id] = {coins: coins[message.author.id].coins - Math.floor(parseInt(args[0]))}
            fs.writeFile("../node_modules/storage/coins.json", JSON.stringify(coins), (err) => {if (err) console.log(err)})
        }
    }catch(err) {console.log(err)}
}
module.exports.help = {
    name: "casino",
    aliases: ["казино"]
}