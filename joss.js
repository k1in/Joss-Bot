const Discord = require("discord.js")
const bot = new Discord.Client()
const fs = require("fs")
const db = require("quick.db")
bot.commands = new Discord.Collection()
bot.aliases = new Discord.Collection()
let coins = require("./coins.json")
fs.readdir("./cmds", (err, files) => {
    if (err) console.log(err)
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Команд не найдено")
        return
    }
    jsfile.forEach((f, i) => {
        let props = require(`./cmds/${f}`)
        console.log(`Файл ${f} обработан`)
        bot.commands.set(props.help.name, props)
        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.name)
        })
    })
})

bot.on("ready", () => {
    console.log(`Бот ${bot.user.username} онлайн!`)
    bot.user.setPresence({
        status: "online",
        game: {
            name: "на лучший сервер в дискорде",
            type: "WATCHING"
        }
    })
})

bot.on("message", async message => {
    console.log(`Пользователь ${message.author.username} написал: ${message.content}`)
    let prefix = "!"
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0]
    let args = messageArray.slice(1)
    let commandFile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    let sender = message.author
    let msg = message.content.toUpperCase()

    if (message.author.bot) return
    if (message.channel.type === "dm") return
    if (message.attachments.size > 0) return
    if (!message.content.startsWith("!")) return
    if (commandFile) commandFile.run(bot, message, args)
})

bot.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel
    let oldUserChannel = oldMember.voiceChannel

    if(oldUserChannel === undefined && newUserChannel !== undefined) {
        console.log('Пользователь подключился к голосовому каналу')
    }else if (newUserChannel === undefined) {
        console.log('Пользователь покинул голосовой канал')
        if (oldUserChannel.name === 'Мафия') {
            if (oldUserChannel.members.size < 1) {
                oldUserChannel.delete()
            }
        }
        if (oldUserChannel.name === 'Монополия') {
            if (oldUserChannel.members.size < 1) {
                oldUserChannel.delete()
            }
        }
        if (oldUserChannel.name === 'Правда или Действие') {
            if (oldUserChannel.members.size < 1) {
                oldUserChannel.delete()
            }
        }
        if (oldUserChannel.name === 'Своя Игра') {
            if (oldUserChannel.members.size < 1) {
                oldUserChannel.delete()
            }
        }
    }
    else if(newUserChannel !== undefined && oldUserChannel !== undefined){
        console.log('Перемещен голосовой канал')
    }
})

bot.login(process.env.token)


/*const Discord = require("discord.js")
let coins = require("../coins.json")

module.exports.run = async(bot, message, args) => {
    try {
        message.delete().catch()
        if (message.channel.id === '628630745002409985') return message.reply(`извини, я не могу писать в этом чате, попробуй написать свою команду в <#633248510879203349>`).then(msg => {msg.delete(5000)})
        function isNumeric(n) {return !isNaN(parseFloat(n)) && isFinite(n)}
        let slot = ['https://cdn.discordapp.com/attachments/629018576103407648/633269953340112916/0.png', 'https://cdn.discordapp.com/attachments/629018576103407648/633269955441459201/1.png', 'https://cdn.discordapp.com/attachments/629018576103407648/633269959644020748/2.png', 'https://cdn.discordapp.com/attachments/629018576103407648/633270186069196800/3.png', 'https://cdn.discordapp.com/attachments/629018576103407648/633270180935630848/4.png', 'https://cdn.discordapp.com/attachments/629018576103407648/633270182734987275/5.png', 'https://cdn.discordapp.com/attachments/629018576103407648/633269989205344271/6.png', 'https://cdn.discordapp.com/attachments/629018576103407648/633269991759937577/7.png', 'https://cdn.discordapp.com/attachments/629018576103407648/633269996864274453/8.png', 'https://cdn.discordapp.com/attachments/629018576103407648/633270002149228575/9.png', 'https://cdn.discordapp.com/attachments/629018576103407648/633269938164858890/10.png', 'https://cdn.discordapp.com/attachments/629018576103407648/633269939830259736/11.png', 'https://cdn.discordapp.com/attachments/629018576103407648/633269941939863552/12.png', 'https://cdn.discordapp.com/attachments/629018576103407648/633269943646945291/13.png', 'https://cdn.discordapp.com/attachments/629018576103407648/633269945798623265/14.png']
        let rand = Math.floor(Math.random() * (slot.length - 0) + 0)
        let result = slot[rand]
        console.log(rand)

        if (!args[0]) return message.reply('вы не указали ставку. Попробуйте: !roulette [сумма]/!рулетка [сумма]')
        if (!isNumeric(args[0])) return message.reply("вы ввели не число")
        if (args[0] <= 0) return message.reply(`вы не можете поставить отрицательную сумму <:cookiecoin:629367595803344896>`)
        if (args[0] > coins[message.author.id].coins) return message.reply(`у вас недостаточно <:cookiecoin:629367595803344896>`)
        let coef = 13
        const embed = new Discord.RichEmbed()
            .setDescription('**Добро пожаловать в Казино!**\n\nЧтобы играть - выберите одну из видов ставок, поставив реакцию на один из смайликов под сообщением:\n<:red:633275913924116491> - Красное. В качестве победной суммы вы получите **удвоенную ставку**\n<:black:633275913802612737> - Черное. В качестве победной суммы вы получите **удвоенную ставку**\n<:green:633275914049945600> - Зеленое. В качестве победной суммы вы получите вашу ставку **умноженную на 14**')
            .setColor(0x36393F)
        message.channel.send(embed).then(message => {message.react('633275913924116491').then(() => message.react('633275913802612737')).then(() => message.react('633275914049945600'))}).then(msg => {
        const filter = (reaction, user) => {return ['633275913924116491', '633275913802612737', '633275914049945600'].includes(reaction.emoji.id) && user.id === message.author.id}
        msg.awaitReactions(filter, { max: 1, time: 5000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();
        
                if (reaction.emoji.id === '633275913924116491') {
                    msg.reply('1')
                } else if (reaction.emoji.id === '633275913802612737') {
                    msg.reply('2')
                } else if (reaction.emoji.id === '633275914049945600') {
                    msg.reply('3')
                } else {
                    msg.reply('4')
                }
            }).catch(collected => {
                msg.reply('5')
                console.log(collected)
            })
        })
    }catch(err) {console.log(err)}
}
module.exports.help = {
    name: "roulette",
    aliases: ["рулетка"]
}*/