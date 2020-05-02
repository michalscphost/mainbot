var rbx = require("noblox.js")
var discord = require("discord.js")

var bot = new discord.Client();
var prefix = "-";

var Trello = require('trello')
var trello = new Trello("ee3d33668a3f6ac5b0c1c16c438b7712","cf5904309e95ca4fc308f83da43f4ba5da7fb64916a62db6f068cfb667bf9ed0")

bot.on("guildMemberAdd", member => {

    const exampleEmbed = new discord.RichEmbed()
        .setColor('#0099ff')
        .setTitle("Beep beep, boop boop!")
        
        .setAuthor('SCPF')
        .setDescription("Welcome to SCPF, " + member.user.username + "!")
        

        
        .setTimestamp()
        .setFooter('Automated message.. duhh!')
        

member.user.send(exampleEmbed)

})


async function purge(messageamount,message,delay) {
    if (message) {
        if (delay) {
            message.delete(delay);
        }
        else {
            message.delete();
        };
    };
    
    const fetched = await message.channel.fetchMessages({limit: messageamount});
    message.channel.bulkDelete(fetched);
};
function givetag(name,username,id,MESSAGEV2,colorer) {

   
                
  var i = 0
    trello.getCardsForList("5ea803298ff1897da1b65eac").then(function(cards) {
        for (i = 0;i < cards.length; i++) {
           console.log(cards)
            if (cards[i].name =='tag' + id ) {
                 trello.deleteCard(cards[i].id)
            }
        }
        const exampleEmbed = new discord.RichEmbed()

    .setColor('#0099ff')
    .setTitle("Command")
    
    .setAuthor('SCPF')
    .setDescription("Done!")
    .setTimestamp()
    .setFooter('Automated message.. duhh!')
    MESSAGEV2.edit(exampleEmbed)  
        var table = {div: name,name: username, rank: "",color: colorer}
        console.log(table.color)
        trello.addCard("tag" +id,JSON.stringify(table),"5ea803298ff1897da1b65eac")
    })

}
process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', reason.stack || reason)
    // Recommended: send the information to sentry.io
    // or whatever crash reporting service you use
  });
  bot.on('message', async (message) => {
    if (message.content == "Please type your message!") {message.delete()}
    if (message.author.bot) return;
    if (message.content.startsWith(prefix)) {
        var args = message.content.slice(prefix.length).split(/ +/);

        var command = args.shift().toLowerCase();
        var sentBy = message.author.username
        var mention = message.mentions.first
        console.log('Command: ' + command)
        console.log(args);
        

                
        if (command == "checkbooster") {
            
            var username = message.member.displayName.split(" | ")[0]
                const exampleEmbed = new discord.RichEmbed()

            .setColor('#0099ff')
            .setTitle("Command")
            
            .setAuthor('SCPF')
            .setDescription("Finding player..")
            .setTimestamp()
            .setFooter('Automated message.. duhh!')
           
    message.channel.send(exampleEmbed).then(function(MESSAGEV2) {
        rbx.getIdFromUsername(username)
        .then(function(id){
            
            var found = false
            






        
            
                let role = message.guild.roles.find("name", "absolute chad");
            if (message.member.roles.has(role.id)) {
                var found = true
                givetag("Nitro Booster",username,id,MESSAGEV2,"255,192,203")
                message.author.message("congrats you got nitro perks")
            }
            if (found == false) {
                const exampleEmbed = new discord.RichEmbed()

                .setColor('#0099ff')
                .setTitle("Command")
                
                .setAuthor('SCPF')
                .setDescription("No tags for you available at the moment!")
                .setTimestamp()
                .setFooter('Automated message.. duhh!')
                MESSAGEV2.edit(exampleEmbed)  
            }
        
        }).catch(function(err) {
            const exampleEmbed = new discord.RichEmbed()

            .setColor('#0099ff')
            .setTitle("Command")
            
            .setAuthor('SCPF')
            .setDescription("Error: " + err )
            .setTimestamp()
            .setFooter('Automated message.. duhh!')
           
              MESSAGEV2.edit(exampleEmbed)  
        })
            })
        
        }
        if (command == "updateversion") {
            var date = new Date();
            var string = new Date(date.getTime()).toString();

                //rbx.configureItem(4691441644,"Version","Test")
            //rbx.configureItem(4691441644,"test","Test2").then(function(a) {

                //console.log(a)
           // })
           var cards = trello.getCardsOnList("5ea8046c5de5846c7ff295ba").then(function(a) {
          
             
               
            
               const exampleEmbed = new discord.RichEmbed()
                   .setColor('#0099ff')
                   .setTitle("Changed version!")
                   
                   .setAuthor('SCPF')
                   .setDescription("Old version: " + a[a.length - 1].name +    "\n New version: " + string)
                   

                   
                   .setTimestamp()
                   .setFooter('Automated message.. duhh!')
                trello.addCard(string,string,"5ea8046c5de5846c7ff295ba")
                message.channel.send(exampleEmbed)
           })
           
         
                    
          
        }
    }
})





  //bot.login("NzA0NjM4MTE1ODcyMjQzNzg0.XqgDmw.v5zQTAv5G_TQsz3XxEz_CyCJ-7k")
  bot.login("NzA0NjM4MTE1ODcyMjQzNzg0.XqgDmw.v5zQTAv5G_TQsz3XxEz_CyCJ-7k")
