const Discord = require("discord.js")
const fs = require("fs")
let coins = require("../coins.json")

module.exports.run = async(bot, message, args) => {
    message.delete().catch()
    if (message.channel.id === '628630745002409985') return message.reply(`извини, я не могу писать в этом чате, попробуй написать свою команду в <#633248510879203349>`).then(msg => {msg.delete(5000)})
    if (!args[0]) {
        const embed = new Discord.RichEmbed()
        .setAuthor("⠀⠀⠀⠀⠀⠀⠀Магазин Ролей")
        .setColor(0x36393F)
        .setDescription('⠀⠀⠀     За 1500 <:cookiecoin:629367595803344896> вы получите:\n<@&628661605718163456>\n⠀⠀⠀     За 1250 <:cookiecoin:629367595803344896> вы получите:\n<@&633228429063487489>\n⠀⠀⠀     За 1000 <:cookiecoin:629367595803344896> вы получите:\n<@&633228398587674624>\n⠀⠀⠀     За 850 <:cookiecoin:629367595803344896> вы получите:\n<@&633228777450635275>\n⠀⠀⠀     За 700 <:cookiecoin:629367595803344896> вы получите:\n<@&633228865506115584>\n⠀⠀⠀     За 500 <:cookiecoin:629367595803344896> вы получите:\n<@&633228734475927552>\n⠀⠀⠀     За 300 <:cookiecoin:629367595803344896> вы получите:\n<@&633229249255309332>\n⠀⠀⠀     За 100 <:cookiecoin:629367595803344896> вы получите:\n<@&633230364126478346>')
        .setImage("https://cdn.discordapp.com/attachments/573163407327363093/633089437265297429/1.gif")
        .setFooter('⠀⠀⠀⠀⠀⠀⠀  Купить - !buy @роль')
        message.channel.send(embed)
    }else if (args[0] == '<@&628661605718163456>') {
        if (!coins[message.author.id]) {coins[message.author.id] = {coins: 0}}
        if (coins[message.author.id].coins < 1500) return message.reply(`у вас недостаточно <:cookiecoin:629367595803344896>`)
        const embed = new Discord.RichEmbed()
        .setAuthor("Покупка Роли")
        .setColor(0x36393F)
        .setDescription(`Поздравим ${message.author}\nС покупкой <@&628661605718163456> за 1500 <:cookiecoin:629367595803344896>`)
        message.channel.send(embed)
        coins[message.author.id] = {coins: coins[message.author.id].coins - 1500}
        message.member.addRole(message.guild.roles.get('628661605718163456'))
        fs.writeFile("../coins.json", JSON.stringify(coins), (err) => {if (err) console.log(err)})
    }else if (args[0] == '<@&633228429063487489>') {
        if (!coins[message.author.id]) {coins[message.author.id] = {coins: 0}}
        if (coins[message.author.id].coins < 1250) return message.reply(`у вас недостаточно <:cookiecoin:629367595803344896>`)
        const embed = new Discord.RichEmbed()
        .setAuthor("Покупка Роли")
        .setColor(0x36393F)
        .setDescription(`Поздравим ${message.author}\nС покупкой <@&633228429063487489> за 1250 <:cookiecoin:629367595803344896>`)
        message.channel.send(embed)
        coins[message.author.id] = {coins: coins[message.author.id].coins - 1250}
        message.member.addRole(message.guild.roles.get('633228429063487489'))
        fs.writeFile("../coins.json", JSON.stringify(coins), (err) => {if (err) console.log(err)})
    }else if (args[0] == '<@&633228398587674624>') {
        if (!coins[message.author.id]) {coins[message.author.id] = {coins: 0}}
        if (coins[message.author.id].coins < 1000) return message.reply(`у вас недостаточно <:cookiecoin:629367595803344896>`)
        const embed = new Discord.RichEmbed()
        .setAuthor("Покупка Роли")
        .setColor(0x36393F)
        .setDescription(`Поздравим ${message.author}\nС покупкой <@&633228398587674624> за 1000 <:cookiecoin:629367595803344896>`)
        message.channel.send(embed)
        coins[message.author.id] = {coins: coins[message.author.id].coins - 1000}
        message.member.addRole(message.guild.roles.get('633228398587674624'))
        fs.writeFile("../coins.json", JSON.stringify(coins), (err) => {if (err) console.log(err)})
    }else if (args[0] == '<@&633228777450635275>') {
        if (!coins[message.author.id]) {coins[message.author.id] = {coins: 0}}
        if (coins[message.author.id].coins < 850) return message.reply(`у вас недостаточно <:cookiecoin:629367595803344896>`)
        const embed = new Discord.RichEmbed()
        .setAuthor("Покупка Роли")
        .setColor(0x36393F)
        .setDescription(`Поздравим ${message.author}\nС покупкой <@&633228777450635275> за 850 <:cookiecoin:629367595803344896>`)
        message.channel.send(embed)
        coins[message.author.id] = {coins: coins[message.author.id].coins - 850}
        message.member.addRole(message.guild.roles.get('633228777450635275'))
        fs.writeFile("../coins.json", JSON.stringify(coins), (err) => {if (err) console.log(err)})
    }else if (args[0] == '<@&633228865506115584>') {
        if (!coins[message.author.id]) {coins[message.author.id] = {coins: 0}}
        if (coins[message.author.id].coins < 700) return message.reply(`у вас недостаточно <:cookiecoin:629367595803344896>`)
        const embed = new Discord.RichEmbed()
        .setAuthor("Покупка Роли")
        .setColor(0x36393F)
        .setDescription(`Поздравим ${message.author}\nС покупкой <@&633228865506115584> за 700 <:cookiecoin:629367595803344896>`)
        message.channel.send(embed)
        coins[message.author.id] = {coins: coins[message.author.id].coins - 700}
        message.member.addRole(message.guild.roles.get('633228865506115584'))
        fs.writeFile("../coins.json", JSON.stringify(coins), (err) => {if (err) console.log(err)})
    }else if (args[0] == '<@&633228734475927552>') {
        if (!coins[message.author.id]) {coins[message.author.id] = {coins: 0}}
        if (coins[message.author.id].coins < 500) return message.reply(`у вас недостаточно <:cookiecoin:629367595803344896>`)
        const embed = new Discord.RichEmbed()
        .setAuthor("Покупка Роли")
        .setColor(0x36393F)
        .setDescription(`Поздравим ${message.author}\nС покупкой <@&633228734475927552> за 500 <:cookiecoin:629367595803344896>`)
        message.channel.send(embed)
        coins[message.author.id] = {coins: coins[message.author.id].coins - 500}
        message.member.addRole(message.guild.roles.get('633228734475927552'))
        fs.writeFile("../coins.json", JSON.stringify(coins), (err) => {if (err) console.log(err)})
    }else if (args[0] == '<@&633229249255309332>') {
        if (!coins[message.author.id]) {coins[message.author.id] = {coins: 0}}
        if (coins[message.author.id].coins < 300) return message.reply(`у вас недостаточно <:cookiecoin:629367595803344896>`)
        const embed = new Discord.RichEmbed()
        .setAuthor("Покупка Роли")
        .setColor(0x36393F)
        .setDescription(`Поздравим ${message.author}\nС покупкой <@&633229249255309332> за 300 <:cookiecoin:629367595803344896>`)
        message.channel.send(embed)
        coins[message.author.id] = {coins: coins[message.author.id].coins - 300}
        message.member.addRole(message.guild.roles.get('633229249255309332'))
        fs.writeFile("../coins.json", JSON.stringify(coins), (err) => {if (err) console.log(err)})
    }else if (args[0] == '<@&633230364126478346>') {
        if (!coins[message.author.id]) {coins[message.author.id] = {coins: 0}}
        if (coins[message.author.id].coins < 100) return message.reply(`у вас недостаточно <:cookiecoin:629367595803344896>`)
        const embed = new Discord.RichEmbed()
        .setAuthor("Покупка Роли")
        .setColor(0x36393F)
        .setDescription(`Поздравим ${message.author}\nС покупкой <@&633230364126478346> за 100 <:cookiecoin:629367595803344896>`)
        message.channel.send(embed)
        coins[message.author.id] = {coins: coins[message.author.id].coins - 100}
        message.member.addRole(message.guild.roles.get('633230364126478346'))
        fs.writeFile("../coins.json", JSON.stringify(coins), (err) => {if (err) console.log(err)})
    }else {
        message.reply('выберите роль из списка !shop и купите ее написав !buy @роль')
    }
}
module.exports.help = {
    name: "shop",
    aliases: ["магазин", "шоп", "buy"]
}