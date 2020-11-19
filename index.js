const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '';
console.log('Bot has been started...');
const bot = new TelegramBot(TOKEN,{
    polling:{
        interval:300,
        autoStart:true,
        params:{
            timeout:10
        }
    }
});

bot.on('message',msg=>{
    const {id} = msg.chat;
    if(msg.text==='Закрыть'){
        bot.sendMessage(id, 'Закрываю клавиатуру',{
            reply_markup:{
                remove_keyboard:true
            }
        })
    }
    else if(msg.text==='Ответить'){
        bot.sendMessage(id, 'Отвечаю',{
            reply_markup:{
                force_reply:true
            }
        })
    }
    else{
        bot.sendMessage(id, 'Клавиатура',{
            reply_markup:{
                keyboard:[
                [{
                    text:'Отправить местоположение',
                    request_location:true
                }],
                ['Ответить', 'Закрыть'],
                [{
                    text:'Отправить контакт',
                    request_contact:true
                }]
                ],
                one_time_keyboard:true
            }
        })
    }
    
})
