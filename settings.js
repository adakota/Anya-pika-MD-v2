const fs = require('fs')
const chalk = require('chalk')

//---------⚠️ 𝗪𝗮𝗿𝗻𝗶𝗻𝗴 ⚠️-----------\\
global.simpleBotname = "Anya" //⚠️ Only use normal and one work name here or you'll get errors ⚠️//


//------------❤️ 𝗕𝗼𝘁 𝗱𝗲𝘁𝗮𝗶𝗹𝘀 ❤️-----------\\
global.botname = "norfreezer-bot" 
global.websitex = "https://github.com/Pika4O4" // Website to be displayed //
global.botscript = 'https://github.com/PikaBotz/Anya-pika-MD-v2' // Script link //
global.packname = "𓅓𝖓𝖔𝖗𝖊︀︀︀︀ ᠻ᥅ꫀꫀꫀɀꫀ᥅𓅓" // sticker watermark packname //
global.author = "🥵3.69_ρỉƙꪖ" // sticker watermark author //
actiontitle = '࿙⚜𝑨𝒏𝒚𝒂⚜࿚' // text who displays on the top of welcome and left message //
global.headerText = "Anya by Pika" // text for header of menu //        
     
             //-------------👑Owner & vcard 👑----------\\             
             global.ownernumber = ['+22891532394']   // Owner number //
             global.vcardowner = ['+22891532394']   // vcard owner number //
             global.ownername = "3.69_Pika"   // Owner name //
             global.ytname = "YT: ONYXPIKA"   // Yt chanel name //
             global.socialm = "𝗚𝗶𝘁𝗵𝘂𝗯 : Pika4o4"   // Github or insta name //
             global.location = "India, Assam, Dibrugarh"   // Location //
             global.owner = ['918811074852','917355622763','919673141317']
             global.ownertag = '918811074852'  // Tag number //
             global.linkz = "https://wa.me/+918811074852"  // Theme url which will be displayed on whatsapp //
             global.premium = ['918811074852']  // premium numbers //             
             global.waterMark = "×͜× King ✘ Pika™ ✓" // Your own watermark //

global.prefa = ['','-']

//--------Random bot name for Info section--------\\
name16 = "𓄂⍣⃝ 🇦𝚗𝚢𝚊 𓆩×͜×𓆪ꪾ️"
name17 = "*Λ⃝ͷ🇾Λ 𓆩×͜×𓆪ꪾ*"
name18 = "*Λ⃝ͷʏΛ 𓆩×͜×𓆪ꪾ*"

//--------Random footer message-----------\\
footer1 = `𓄂⍣⃝🇦𝚗𝚢𝚊ㅤꪜ⃢𝟤ㅤ𓆩×͜×𓆪ꪾ `
footer2 = `Λ⃝ͷʏΛㅤꪜ⃢𝟤ㅤ𓆩×͜×𓆪ꪾ`

//--------Left message "Nikal msg"--------\\
nikalmsg1 = 'Ye galiye ye choubara, yaha dikhna na dubara 😚🖕🏻' 
nikalmsg2 = 'Patt se headshot 🔫...Abey dil se bura lagta hai bhai 😂.'

//--------Text for document captions--------\\
global.Menudoccap1 = 'Best friendly Bot for you...'
global.Menudoccap2 = 'Always available for you Darling....'
global.Menudoccap3 = '𝘉𝘦𝘴𝘵 𝘧𝘶𝘯𝘤𝘵𝘪𝘰𝘯𝘢𝘭 𝘣𝘰𝘵 𝘧𝘰𝘳 𝘺𝘰𝘶...'
global.Menudoccap4 = "Isn't the moon lovely?"
global.Menudoccap5 = 'Cutest bot ever saw<3'

//--------Random Tag msg--------\\
tag1 = '𝘏𝘦𝘺 𝘦𝘷𝘦𝘳𝘺𝘣𝘰𝘥𝘺😚, 𝘊𝘰𝘮𝘦 𝘰𝘯𝘭𝘪𝘯𝘦 𝘢𝘯𝘥 𝘶𝘴𝘦 𝘵𝘩𝘪𝘴 𝘢𝘸𝘦𝘴𝘰𝘮𝘦 𝘉𝘰𝘵.' 
tag2 = '𝘖𝘺𝘦 𝘦𝘷𝘦𝘳𝘺𝘰𝘯𝘦!! 𝘞𝘩𝘦𝘳𝘦 𝘢𝘳𝘦 𝘺𝘰𝘶 𝘢𝘭𝘭?😐' 
tag3 = '𝘈𝘣𝘦𝘺 𝘰𝘯𝘭𝘪𝘯𝘦 𝘢𝘢𝘰 𝘺𝘢𝘢𝘳!😑' 
tag4 = '𝘞𝘰𝘸 𝘭𝘰𝘰𝘬 𝘢𝘵 𝘵𝘩𝘪𝘴 𝘢𝘥𝘷𝘢𝘯𝘤𝘦 𝘉𝘰𝘵.😚' 
tag5 = '𝘠𝘢𝘢𝘳 𝘬𝘺𝘢 𝘉𝘰𝘵 𝘩𝘢𝘪❤️' 
tag6 = '𝘐𝘵𝘯𝘢 𝘮𝘻𝘢 𝘬𝘺𝘶 𝘢𝘢 𝘳𝘩𝘢 𝘩𝘢𝘪...𝘛𝘶𝘯𝘦 𝘩𝘢𝘸𝘢 𝘮𝘦 𝘣𝘩𝘢𝘯𝘨 𝘮𝘪𝘭𝘢𝘺𝘢 𝘩𝘢𝘪!🥵' 
tag7 = '𝘞𝘩𝘦𝘳𝘦 𝘢𝘳𝘦 𝘺𝘰𝘶 𝘢𝘭𝘭?' 
tag8 = '𝘏𝘦𝘺 𝘸𝘩𝘦𝘳𝘦 𝘺𝘰𝘶 𝘢𝘭𝘭?...𝘤𝘰𝘮𝘦 𝘩𝘦𝘳𝘦 𝘨𝘶𝘺𝘴 𝘶𝘴𝘦 𝘵𝘩𝘪𝘴 𝘖𝘗 𝘉𝘰𝘵!🔥' 
tag9 = '𝘠𝘰𝘶 𝘢𝘭𝘭 𝘴𝘩𝘰𝘶𝘭 𝘵𝘳𝘺 𝘵𝘩𝘪𝘴 𝘤𝘶𝘵𝘦 𝘈𝘯𝘺𝘢❤️🍫' 
tag10 = '𝘈𝘺𝘰𝘰 𝘈𝘯𝘺𝘢 𝘪𝘴 𝘉𝘦𝘴𝘵!!😚' 


global.mess = {
    success: 'Work done 𝗗𝗮𝗿𝗹𝗶𝗻𝗴❤️',
    admin: "Baby!\nThis command is only for 𝗔𝗱𝗺𝗶𝗻𝘀...So i can't process your command babe. 😑",
    botAdmin: 'First make me 𝗔𝗱𝗺𝗶𝗻!!! 😐',
    owner: 'This command is only for my 𝗼𝘄𝗻𝗲𝗿..',
    group: "Baka !!!!!\nYou can't use this command in a 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗰𝗵𝗮𝘁 !😑",
    private: 'Such a baka !!\nThis command is only for 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗰𝗵𝗮𝘁𝘀. 🥲',
    bot: "This Feature Is Only For 𝗕𝗼𝘁... and you're not a 𝗕𝗼𝘁.",
    wait: "I'm progressing your command baby❤️, Please wait......",
    linkm: 'Abey where is the link...?',
    error: 'I got an 𝗲𝗿𝗿𝗼𝗿!!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'You have been banned by the 𝗼𝘄𝗻𝗲𝗿 😡, if you want to be 𝘂𝗻𝗯𝗮𝗻𝗻𝗲𝗱, chat owner.',
    nsfw: 'The nsfw feature has not been activated, Bc padhai likhai karo 𝗜𝗔𝗦 - 𝗬𝗔𝗦 bano lekin nhii tumhe to nudity dekhni hai 👏',
    banChat: 'The bot was banned 𝗶𝗻 𝘁𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽!, please contact the owner to unban.'
}

//--------------- Document message --------------\\
name11 = 'Hey,\nI am freezer bot' 
name12 = 'Hey,\nI am freezer bot' 
name13 = 'Hey,\nI am Miss freezer bot'

const _0x1b8476=_0x26e7;(function(_0x5199a8,_0x4bdc35){const _0x4f7350=_0x26e7,_0x5007fd=_0x5199a8();while(!![]){try{const _0x102f13=-parseInt(_0x4f7350(0x1c4))/0x1*(parseInt(_0x4f7350(0x1a0))/0x2)+parseInt(_0x4f7350(0x1bc))/0x3*(-parseInt(_0x4f7350(0x229))/0x4)+parseInt(_0x4f7350(0x1f6))/0x5+parseInt(_0x4f7350(0x219))/0x6*(-parseInt(_0x4f7350(0x1d0))/0x7)+-parseInt(_0x4f7350(0x1a3))/0x8*(parseInt(_0x4f7350(0x1f5))/0x9)+parseInt(_0x4f7350(0x23a))/0xa*(parseInt(_0x4f7350(0x190))/0xb)+parseInt(_0x4f7350(0x18f))/0xc;if(_0x102f13===_0x4bdc35)break;else _0x5007fd['push'](_0x5007fd['shift']());}catch(_0x279cbd){_0x5007fd['push'](_0x5007fd['shift']());}}}(_0x5835,0xe5ce5));function _0x4fe8(_0x7f5a,_0x3cf616){const _0x44abbc=_0x58cc();return _0x4fe8=function(_0xa2f582,_0x3d5496){_0xa2f582=_0xa2f582-0xc5;let _0x2592da=_0x44abbc[_0xa2f582];return _0x2592da;},_0x4fe8(_0x7f5a,_0x3cf616);}const _0x107926=_0x4fe8;(function(_0x49754d,_0x48e3ec){const _0x581172=_0x26e7,_0x2aab36=_0x4fe8,_0x5c415e=_0x49754d();while(!![]){try{const _0x2f8676=-parseInt(_0x2aab36(0x183))/0x1*(-parseInt(_0x2aab36(0x150))/0x2)+parseInt(_0x2aab36(0x156))/0x3*(parseInt(_0x2aab36(0x153))/0x4)+parseInt(_0x2aab36(0xfd))/0x5*(-parseInt(_0x2aab36(0xf0))/0x6)+parseInt(_0x2aab36(0x158))/0x7*(-parseInt(_0x2aab36(0x160))/0x8)+-parseInt(_0x2aab36(0xc8))/0x9*(parseInt(_0x2aab36(0x15f))/0xa)+-parseInt(_0x2aab36(0x175))/0xb*(parseInt(_0x2aab36(0xc5))/0xc)+parseInt(_0x2aab36(0x174))/0xd;if(_0x2f8676===_0x48e3ec)break;else _0x5c415e[_0x581172(0x176)](_0x5c415e['shift']());}catch(_0x381be8){_0x5c415e['push'](_0x5c415e[_0x581172(0x232)]());}}}(_0x58cc,0xa6b5c),tagemoji1='🥵',tagemoji2='🔥',tagemoji3='❤️',tagemoji4='🎃',tagemoji5='🍓',global[_0x107926(0xcb)]='🤖',global[_0x107926(0x194)]='💘',global[_0x107926(0x12d)]=_0x1b8476(0x1f8),global[_0x1b8476(0x1fe)]='👾',global[_0x107926(0xe8)]='😚',global[_0x107926(0x109)]='🥰',global[_0x1b8476(0x221)]='😘',global[_0x107926(0xf4)]='😈',global[_0x107926(0x198)]='🥵',global[_0x107926(0x190)]='🔥',global[_0x107926(0x118)]='❤️',global[_0x1b8476(0x1eb)]='😳',global[_0x1b8476(0x1d4)]=_0x107926(0x184),global[_0x107926(0x195)]='😉',global[_0x1b8476(0x19f)]=fs[_0x107926(0x193)](_0x107926(0x171)),global[_0x107926(0xde)]=fs[_0x107926(0x193)](_0x107926(0xeb)),global[_0x1b8476(0x1d3)]=fs[_0x107926(0x193)](_0x107926(0x16b)),global[_0x1b8476(0x225)]=fs[_0x1b8476(0x1f7)](_0x107926(0x13b)),global[_0x1b8476(0x187)]=fs[_0x1b8476(0x1f7)](_0x107926(0xfc)),global[_0x107926(0x182)]=fs[_0x107926(0x193)]('./AnyaPikaMedia/theme/Command-image/Cimg6.jpg'),global[_0x107926(0x170)]=fs[_0x107926(0x193)](_0x107926(0xed)),global[_0x107926(0x15b)]=fs[_0x107926(0x193)](_0x107926(0xe5)),global[_0x107926(0xd7)]=fs[_0x107926(0x193)](_0x107926(0xff)),global[_0x107926(0xee)]=fs[_0x1b8476(0x1f7)](_0x107926(0x163)),global[_0x1b8476(0x1b6)]=fs[_0x107926(0x193)](_0x107926(0x196)),global['thumb12']=fs[_0x107926(0x193)](_0x107926(0x13e)),global['thumb13']=fs[_0x1b8476(0x1f7)](_0x107926(0xd8)),global[_0x107926(0x105)]=fs[_0x107926(0x193)](_0x107926(0x199)),global[_0x107926(0x13c)]=fs[_0x1b8476(0x1f7)](_0x107926(0xe6)),global[_0x107926(0xf6)]=fs[_0x107926(0x193)](_0x107926(0x128)),global[_0x1b8476(0x249)]=fs[_0x107926(0x193)](_0x1b8476(0x1d7)),global[_0x107926(0x14b)]=fs[_0x1b8476(0x1f7)](_0x107926(0x11c)),global[_0x107926(0x12e)]=fs[_0x107926(0x193)](_0x107926(0xdb)),global[_0x107926(0x10a)]=fs[_0x107926(0x193)](_0x107926(0xf1)),global[_0x107926(0xdf)]=fs[_0x107926(0x193)](_0x107926(0xec)),global[_0x107926(0xea)]=fs[_0x107926(0x193)](_0x107926(0x173)),global[_0x107926(0x132)]=fs[_0x107926(0x193)](_0x107926(0x10d)),global[_0x107926(0xe1)]=fs[_0x107926(0x193)](_0x107926(0x179)),global[_0x107926(0x185)]=fs[_0x1b8476(0x1f7)]('./AnyaPikaMedia/theme/Command-image/Cimg25.jpg'),global[_0x1b8476(0x24d)]=fs[_0x107926(0x193)](_0x107926(0x10c)),global[_0x107926(0xfb)]=fs[_0x107926(0x193)](_0x1b8476(0x16e)),global[_0x1b8476(0x17e)]=fs[_0x107926(0x193)](_0x107926(0x141)),global[_0x107926(0x151)]=fs[_0x107926(0x193)](_0x107926(0x113)),global[_0x107926(0x149)]=fs[_0x1b8476(0x1f7)](_0x1b8476(0x21d)),global[_0x107926(0x155)]=fs[_0x1b8476(0x1f7)](_0x107926(0x189)),global[_0x107926(0xf9)]=fs[_0x1b8476(0x1f7)](_0x107926(0xef)),global[_0x107926(0x139)]=fs[_0x107926(0x193)]('./AnyaPikaMedia/theme/Command-image/Cimg33.jpg'),global[_0x107926(0x131)]=fs[_0x107926(0x193)](_0x107926(0x197)),global[_0x1b8476(0x19e)]=fs[_0x107926(0x193)]('./AnyaPikaMedia/theme/Command-image/Cimg35.jpg'),global[_0x107926(0x114)]=fs['readFileSync'](_0x1b8476(0x1b5)),global['thumb37']=fs[_0x107926(0x193)](_0x107926(0x178)),global[_0x107926(0xcd)]=fs[_0x107926(0x193)](_0x107926(0x152)),global[_0x107926(0x167)]=fs[_0x1b8476(0x1f7)](_0x107926(0x100)),global[_0x107926(0x12a)]=fs[_0x107926(0x193)](_0x1b8476(0x22d)),global[_0x1b8476(0x241)]=fs[_0x107926(0x193)](_0x107926(0xf7)),global[_0x107926(0x137)]=fs[_0x107926(0x193)](_0x107926(0x10b)),global[_0x107926(0x168)]=fs[_0x107926(0x193)](_0x1b8476(0x234)),global['thumb44']=fs[_0x107926(0x193)](_0x1b8476(0x1f9)),global[_0x107926(0xe4)]=fs[_0x107926(0x193)](_0x107926(0xd2)),global[_0x107926(0xd6)]=fs[_0x107926(0x193)](_0x107926(0xd0)),global[_0x107926(0x106)]=fs[_0x107926(0x193)](_0x107926(0x11a)),global[_0x107926(0x12c)]=fs[_0x107926(0x193)](_0x107926(0xca)),global[_0x1b8476(0x1b0)]=fs[_0x107926(0x193)](_0x107926(0x145)),global[_0x107926(0x164)]=fs[_0x107926(0x193)](_0x107926(0x127)),global[_0x107926(0x135)]=fs[_0x1b8476(0x1f7)](_0x107926(0x157)),global[_0x107926(0x191)]=fs['readFileSync'](_0x1b8476(0x17c)),global[_0x1b8476(0x1c3)]=fs[_0x107926(0x193)](_0x107926(0xd3)),global['thumb54']=fs[_0x107926(0x193)](_0x107926(0x18b)),global['thumb55']=fs[_0x107926(0x193)]('./AnyaPikaMedia/theme/Command-image/Cimg55.jpg'),global[_0x107926(0xfe)]=fs[_0x107926(0x193)](_0x107926(0xf8)),global[_0x107926(0x19a)]=fs[_0x107926(0x193)](_0x107926(0x130)),global[_0x107926(0x16d)]=fs[_0x107926(0x193)](_0x1b8476(0x18e)),global[_0x107926(0x10e)]=fs[_0x107926(0x193)](_0x1b8476(0x213)),global[_0x107926(0x126)]=fs[_0x107926(0x193)](_0x107926(0x119)),global[_0x107926(0xc7)]=fs[_0x107926(0x193)](_0x107926(0x117)),global[_0x1b8476(0x1f4)]=fs[_0x1b8476(0x1f7)](_0x107926(0xe3)),global[_0x107926(0x19b)]=fs[_0x1b8476(0x1f7)](_0x107926(0x142)),global[_0x107926(0xc6)]=fs[_0x107926(0x193)](_0x107926(0xe0)),global[_0x107926(0x14d)]=fs[_0x107926(0x193)](_0x107926(0x17c)),global[_0x107926(0x18d)]=fs[_0x107926(0x193)](_0x1b8476(0x204)),global[_0x107926(0x124)]=fs[_0x1b8476(0x1f7)](_0x107926(0x144)),global[_0x107926(0x146)]=fs[_0x107926(0x193)](_0x107926(0x13d)),global[_0x1b8476(0x236)]=fs[_0x107926(0x193)](_0x107926(0x140)),global[_0x107926(0x15a)]=fs[_0x107926(0x193)](_0x107926(0x16c)),global[_0x107926(0x16f)]=fs[_0x107926(0x193)]('./AnyaPikaMedia/theme/Command-image/Cimg71.jpg'),global[_0x107926(0xe7)]=fs['readFileSync']('./AnyaPikaMedia/theme/Command-image/Cimg72.jpg'),global[_0x107926(0xe9)]=fs[_0x107926(0x193)](_0x1b8476(0x1fd)),global[_0x1b8476(0x207)]=fs[_0x107926(0x193)](_0x107926(0x16e)),global[_0x107926(0xda)]=fs[_0x1b8476(0x1f7)](_0x107926(0x18e)),global[_0x1b8476(0x179)]=fs[_0x107926(0x193)](_0x1b8476(0x1dc)),global[_0x107926(0x11b)]=fs[_0x1b8476(0x1f7)](_0x107926(0x186)),global[_0x107926(0xce)]=fs[_0x1b8476(0x1f7)](_0x107926(0x169)),global[_0x107926(0x102)]=fs[_0x107926(0x193)](_0x107926(0x125)),global['thumb80']=fs[_0x107926(0x193)]('./AnyaPikaMedia/theme/Command-image/Cimg80.jpg'),global[_0x107926(0x133)]=fs[_0x107926(0x193)]('./AnyaPikaMedia/theme/Command-image/Cimg81.jpg'),global[_0x1b8476(0x1ca)]=fs[_0x107926(0x193)](_0x107926(0x11e)),global[_0x107926(0x136)]=fs[_0x107926(0x193)](_0x107926(0x189)),global[_0x1b8476(0x1d2)]=fs[_0x107926(0x193)](_0x107926(0x189)),global[_0x107926(0xfa)]=fs[_0x107926(0x193)](_0x1b8476(0x1a4)),global[_0x107926(0x17d)]=fs['readFileSync'](_0x107926(0x189)),global[_0x107926(0x111)]=fs[_0x107926(0x193)](_0x107926(0x189)),global[_0x107926(0x172)]=fs[_0x107926(0x193)](_0x107926(0x189)),global[_0x107926(0x16a)]=fs[_0x107926(0x193)](_0x1b8476(0x1a4)),global[_0x107926(0x161)]=fs[_0x107926(0x193)](_0x107926(0x189)),global[_0x107926(0x13a)]=fs[_0x107926(0x193)](_0x107926(0x189)),global[_0x1b8476(0x250)]=fs[_0x107926(0x193)]('./AnyaPikaMedia/theme/Command-image/Cimg31.jpg'),global[_0x107926(0x14f)]=fs[_0x1b8476(0x1f7)](_0x107926(0x189)),global[_0x1b8476(0x1fa)]=fs['readFileSync'](_0x107926(0x189)),global[_0x107926(0x187)]=fs[_0x107926(0x193)](_0x107926(0x189)),global[_0x107926(0x181)]=fs[_0x107926(0x193)](_0x107926(0x189)),global[_0x107926(0xd9)]=fs[_0x1b8476(0x1f7)](_0x107926(0x189)),global[_0x107926(0x154)]=fs[_0x107926(0x193)](_0x1b8476(0x1a4)),global[_0x107926(0x165)]=fs[_0x107926(0x193)](_0x1b8476(0x1a4)),global[_0x107926(0x177)]=fs[_0x107926(0x193)](_0x107926(0x189)),global[_0x107926(0x12b)]=[],global[_0x1b8476(0x242)]=[],global[_0x107926(0x121)]=[],global[_0x107926(0x123)]=[],global[_0x1b8476(0x214)]=[],global['ntilinktt']=[],global[_0x107926(0x17b)]=[],global[_0x1b8476(0x1ee)]=[],global['nticall']=[],global['ntwame']=[],global[_0x107926(0x116)]=[],global[_0x107926(0xe2)]=[],global[_0x107926(0xdd)]=[],global[_0x107926(0xcc)]=[],global[_0x107926(0x17e)]=[],global[_0x107926(0x120)]=[],global[_0x1b8476(0x184)]=[],global[_0x107926(0x188)]=[],global[_0x107926(0x14c)]='🥵',global[_0x107926(0x17a)]='💘',global['themeemoji3']='🖤',global[_0x107926(0xd1)]='🐦',global[_0x107926(0x134)]='🐤',global[_0x107926(0x112)]='💖',global[_0x1b8476(0x197)]='❤️',global[_0x1b8476(0x1c6)]='🔥',global[_0x107926(0x18a)]='😈',global[_0x1b8476(0x240)]='🎃',autoemoji1='🥹',autoemoji2='🥵',autoemoji3='🎃',autoemoji4='🔥',autoemoji5=_0x107926(0x19c),autoemoji6=_0x107926(0x184),autoemoji7='❤️',autoemoji8='👻',autoemoji9='😻',autoemoji10='☺️',autoemoji11='😊',autoemoji12='😍',autoemoji13='🥰',autoemoji14='😘',autoemoji15='😚',global[_0x107926(0x101)]=![],global[_0x107926(0x180)]=![],global[_0x1b8476(0x1e6)]=![],global[_0x1b8476(0x169)]=![],global[_0x107926(0x107)]=!![],empty=_0x107926(0x138),global[_0x107926(0xd4)]='',global[_0x107926(0x115)]=fs[_0x107926(0x193)](_0x107926(0x17f)),global[_0x107926(0x10f)]=_0x107926(0x11d),global[_0x107926(0x15e)]=!![],itemcount1=_0x107926(0x103),itemcount2=_0x107926(0xc9),global[_0x107926(0x148)]={'zenz':_0x1b8476(0x203)},global[_0x107926(0xf5)]={'https://zenzapis.xyz':_0x107926(0x110)},global[_0x107926(0x147)]=['','-'],global['sp']='⭔',global[_0x107926(0x166)]={'premium':_0x107926(0x159),'free':0xc,'monayawal':0x3e8},global[_0x107926(0x192)]={'darahawal':0x64,'besiawal':0xf,'goldawal':0xa,'emeraldawal':0x5,'umpanawal':0x5,'potionawal':0x1},symb1='-',symb2='.',symb3=',',symb4='!',symb5='+',symb6='#',symb7='_',symb8='%',symb9='$',symb10='',global[_0x1b8476(0x22a)]=_0x107926(0xf3),global[_0x107926(0x104)]=_0x1b8476(0x18c),global[_0x1b8476(0x20f)]=_0x107926(0x176),global[_0x107926(0x162)]=_0x1b8476(0x1e0),global['doc5']=_0x107926(0xdc),global[_0x107926(0x14a)]=_0x1b8476(0x235),global[_0x107926(0x15d)]=fs[_0x1b8476(0x1f7)](_0x107926(0x13f)),global[_0x107926(0x18f)]=fs['readFileSync'](_0x107926(0x13f)),global[_0x107926(0xd5)]=fs[_0x107926(0x193)](_0x107926(0x13f)),global[_0x1b8476(0x226)]=fs[_0x107926(0x193)](_0x1b8476(0x1bb)),global[_0x107926(0x14e)]=fs[_0x107926(0x193)](_0x1b8476(0x1bb)),link1=_0x107926(0x15c),global[_0x107926(0x129)]=_0x1b8476(0x18a),global[_0x107926(0x18c)]=_0x107926(0xf2),global[_0x107926(0x11f)]='https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=',global[_0x107926(0x122)]=_0x1b8476(0x23c));function _0x58cc(){const _0x50809b=_0x1b8476,_0x4c46f3=['themeemoji9','./AnyaPikaMedia/theme/Command-image/Cimg54.jpg',_0x50809b(0x1b8),_0x50809b(0x180),_0x50809b(0x217),'log0','reactmoji10','thumb52',_0x50809b(0x16a),_0x50809b(0x1f7),'reactmoji2',_0x50809b(0x1de),_0x50809b(0x21a),_0x50809b(0x1e7),_0x50809b(0x1a5),'./AnyaPikaMedia/theme/Command-image/Cimg14.jpg',_0x50809b(0x1e5),_0x50809b(0x177),_0x50809b(0x1f8),'3420072GMmaom','thumb64',_0x50809b(0x1cf),_0x50809b(0x182),'77777777',_0x50809b(0x186),_0x50809b(0x198),'rkyt','thumb38','thumb78','unwatchFile',_0x50809b(0x1fb),_0x50809b(0x170),_0x50809b(0x178),'./AnyaPikaMedia/theme/Command-image/Cimg53.jpg',_0x50809b(0x1be),_0x50809b(0x212),_0x50809b(0x1a1),_0x50809b(0x202),_0x50809b(0x173),_0x50809b(0x20d),_0x50809b(0x22f),_0x50809b(0x1a9),_0x50809b(0x1d1),_0x50809b(0x1ae),_0x50809b(0x19b),_0x50809b(0x1d9),_0x50809b(0x23e),_0x50809b(0x1c7),_0x50809b(0x233),_0x50809b(0x1cb),_0x50809b(0x1df),'./AnyaPikaMedia/theme/Command-image/Cimg8.jpg',_0x50809b(0x224),_0x50809b(0x211),_0x50809b(0x175),_0x50809b(0x181),_0x50809b(0x20b),_0x50809b(0x1ac),_0x50809b(0x21b),_0x50809b(0x201),_0x50809b(0x174),_0x50809b(0x1c1),_0x50809b(0x1e1),_0x50809b(0x246),'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=','application/vnd.openxmlformats-officedocument.presentationml.presentation',_0x50809b(0x1bd),'APIKeys',_0x50809b(0x1fc),_0x50809b(0x244),'./AnyaPikaMedia/theme/Command-image/Cimg56.jpg',_0x50809b(0x223),_0x50809b(0x16d),'thumb27',_0x50809b(0x19c),'2677895kRjUgd',_0x50809b(0x192),'./AnyaPikaMedia/theme/Command-image/Cimg9.jpg','./AnyaPikaMedia/theme/Command-image/Cimg39.jpg',_0x50809b(0x227),_0x50809b(0x215),_0x50809b(0x21c),_0x50809b(0x210),_0x50809b(0x251),_0x50809b(0x222),'available','watchFile',_0x50809b(0x1cd),_0x50809b(0x1ef),_0x50809b(0x23f),_0x50809b(0x189),_0x50809b(0x1ce),'thumb59','sessionName',_0x50809b(0x20a),'thumb87',_0x50809b(0x1b7),_0x50809b(0x1ba),_0x50809b(0x216),_0x50809b(0x1cc),_0x50809b(0x24b),_0x50809b(0x238),_0x50809b(0x1db),_0x50809b(0x1ed),'./AnyaPikaMedia/theme/Command-image/Cimg47.jpg',_0x50809b(0x1a2),_0x50809b(0x17d),_0x50809b(0x22b),_0x50809b(0x1bf),_0x50809b(0x218),_0x50809b(0x171),_0x50809b(0x18b),_0x50809b(0x19d),_0x50809b(0x17a),'thumb67',_0x50809b(0x1d8),'thumb60','./AnyaPikaMedia/theme/Command-image/Cimg50.jpg','./AnyaPikaMedia/theme/Command-image/Cimg16.jpg',_0x50809b(0x24e),_0x50809b(0x228),_0x50809b(0x1ad),_0x50809b(0x1a8),_0x50809b(0x1b4),_0x50809b(0x1ab),'cache',_0x50809b(0x195),_0x50809b(0x172),'thumb23','thumb81','themeemoji5','thumb51',_0x50809b(0x1e8),'thumb42',_0x50809b(0x1aa),_0x50809b(0x18d),'thumb91','./AnyaPikaMedia/theme/Command-image/Cimg4.jpg',_0x50809b(0x22e),_0x50809b(0x1c9),_0x50809b(0x1c8),_0x50809b(0x1bb),_0x50809b(0x247),_0x50809b(0x1d6),_0x50809b(0x231),_0x50809b(0x17f),_0x50809b(0x1b9),_0x50809b(0x193),_0x50809b(0x191),_0x50809b(0x1e4),_0x50809b(0x17b),_0x50809b(0x220),_0x50809b(0x1f2),_0x50809b(0x1a6),_0x50809b(0x24c),_0x50809b(0x196),_0x50809b(0x226),_0x50809b(0x1da),_0x50809b(0x248),_0x50809b(0x237),_0x50809b(0x22c),_0x50809b(0x1af),_0x50809b(0x1b1),'thumb31',_0x50809b(0x1e3),_0x50809b(0x1b2),'2163553MmOoli','Infinity',_0x50809b(0x185),_0x50809b(0x1a7),_0x50809b(0x1c5),_0x50809b(0x24f),_0x50809b(0x1f0),_0x50809b(0x1ea),_0x50809b(0x1f1),'thumb90',_0x50809b(0x245),'./AnyaPikaMedia/theme/Command-image/Cimg10.jpg',_0x50809b(0x1ec),_0x50809b(0x1d5),_0x50809b(0x1c2),_0x50809b(0x209),'thumb43',_0x50809b(0x20c),_0x50809b(0x200),_0x50809b(0x16f),'./AnyaPikaMedia/theme/Command-image/Cimg70.jpg',_0x50809b(0x23d),'./AnyaPikaMedia/theme/Command-image/Cimg74.jpg',_0x50809b(0x183),'thumb7','./AnyaPikaMedia/theme/Command-image/Cimg1.jpg',_0x50809b(0x205),_0x50809b(0x230),_0x50809b(0x20e),_0x50809b(0x1b3),_0x50809b(0x1f3),_0x50809b(0x1ff),_0x50809b(0x24a),_0x50809b(0x199),_0x50809b(0x208),_0x50809b(0x19a),_0x50809b(0x1c0),_0x50809b(0x1e2),_0x50809b(0x23b),'./AnyaPikaMedia/theme/Anya-Bot.mp4',_0x50809b(0x16c),'thumb96',_0x50809b(0x1dd),_0x50809b(0x21e),_0x50809b(0x206),_0x50809b(0x194),_0x50809b(0x21f),_0x50809b(0x239),_0x50809b(0x188),_0x50809b(0x1a4)];return _0x58cc=function(){return _0x4c46f3;},_0x58cc();}function _0x5835(){const _0x448d28=['thumb57','autoReadGc','./AnyaPikaMedia/theme/Command-image/Cimg34.jpg','thumb83','resolve','1110zbFluD','reactmoji12','thumb50','./AnyaPikaMedia/theme/Command-image/Cimg60.jpg','ntilinkall','thumb20','antitags','8oWxbkA','doc6','application/vnd.openxmlformats-officedocument.wordprocessingml.document','thumb62','889137whrSqf','9368320iPnTaT','readFileSync','🧚‍♀️','./AnyaPikaMedia/theme/Command-image/Cimg44.jpg','thumb94','./AnyaPikaMedia/theme/Command-image/Cimg46.jpg','thumb16','./AnyaPikaMedia/theme/Command-image/Cimg73.jpg','reactmoji4','thumb100','thumb89','./AnyaPikaMedia/theme/Command-image/Cimg7.jpg','thumb9','https://zenzapis.xyz','./AnyaPikaMedia/theme/Command-image/Cimg66.jpg','thumb88','❤️‍🔥','thumb74','themeemoji2','thumb39','44eff1531fb0','thumb22','./AnyaPikaMedia/theme/Command-image/Cimg78.jpg','thumb97','24922924PZryqI','doc3','doc2','thumb72','err4r','./AnyaPikaMedia/theme/Command-image/Cimg59.jpg','ntilinktg','thumb79','thumb36','./AnyaPikaMedia/theme/Command-image/Cimg75.jpg','flarun','9565338PqZTtQ','./AnyaPikaMedia/theme/Command-image/Cimg11.jpg','./AnyaPikaMedia/theme/Command-image/Cimg21.jpg','69696969','./AnyaPikaMedia/theme/Command-image/Cimg30.jpg','8465AAipOC','./AnyaPikaMedia/theme/Command-image/Cimg77.jpg','thumb30','reactmoji7','thumb47','thumb32','./AnyaPikaMedia/theme/Command-image/Cimg15.jpg','thumb4','thumb','autoTyping','thumb40','16132YmMShg','doc1','session','./AnyaPikaMedia/theme/Command-image/Cimg38.jpg','./AnyaPikaMedia/theme/Command-image/Cimg40.jpg','thumb15','thumb75','./AnyaPikaMedia/theme/Command-image/Cimg22.jpg','./AnyaPikaMedia/theme/Command-image/Cimg63.jpg','shift','ntnsfw','./AnyaPikaMedia/theme/Command-image/Cimg43.jpg','application/vnd.android.package-archive','thumb69','thumb29','./AnyaPikaMedia/theme/Command-image/Cimg61.jpg','thumb95','5172430pSDNPh','wlcm','https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=','thumb58','./AnyaPikaMedia/theme/Command-image/Cimg64.jpg','./AnyaPikaMedia/theme/Command-image/Cimg42.jpg','themeemoji10','thumb41','ntilinkytch','log','./AnyaPikaMedia/theme/Command-image/Cimg41.jpg','doc4','./AnyaPikaMedia/theme/Command-image/Cimg20.jpg','./AnyaPikaMedia/theme/Command-image/Cimg69.jpg','14vfMTZI','thumb17','./AnyaPikaMedia/theme/Command-image/Cimg37.jpg','nttoxic','themeemoji1','thumb26','flaming','thum','thumb92','thumb14','autoRecord','rpg','Update\x27','autoreadpmngc','thumb85','./AnyaPikaMedia/theme/Command-image/Cimg27.jpg','./AnyaPikaMedia/theme/Command-image/Cimg3.jpg','themeemoji4','gcrevoke','thumb34','./AnyaPikaMedia/theme/Command-image/Cimg13.jpg','thumb10','reactmoji5','push','thumb63','./AnyaPikaMedia/theme/Command-image/Cimg45.jpg','thumb76','ntilinkfb','APIs','./AnyaPikaMedia/theme/Command-image/Cimg52.jpg','./AnyaPikaMedia/theme/Command-image/Cimg18.jpg','thumb28','redBright','thumb66','thumb73','567gQtQJP','thumb71','autorep','thumb70','./AnyaPikaMedia/theme/Command-image/Cimg48.jpg','thumb5','ntilink','./AnyaPikaMedia/theme/Command-image/Cimg26.jpg','https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=','ntilinkig','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','thumb33','./AnyaPikaMedia/theme/Command-image/Cimg58.jpg','12304236BxfLza','11UpwtMr','thumb68','thumb56','./AnyaPikaMedia/theme/Command-image/Cimg49.jpg','thumb25','./AnyaPikaMedia/theme/Command-image/Cimg57.jpg','thumb65','themeemoji7','reactmoji1','./AnyaPikaMedia/theme/Command-image/Cimg24.jpg','ntilinktwt','thumb2','./AnyaPikaMedia/theme/Command-image/Cimg5.jpg','flasmurf','thumb35','thumb1','682ReZXeS','thumb46','thumb77','8WYlBLu','./AnyaPikaMedia/theme/Command-image/Cimg31.jpg','reactmoji9','thumb18','thumb8','thumb48','./AnyaPikaMedia/theme/Command-image/Cimg19.jpg','\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a','thumb19','./AnyaPikaMedia/theme/Command-image/Cimg2.jpg','ntilinkytvid','ntvirtex','31376idLZkf','thumb49','thumb98','./AnyaPikaMedia/theme/Command-image/Cimg51.jpg','44yigUKF','reactmoji3','./AnyaPikaMedia/theme/Command-image/Cimg36.jpg','thumb11','themeemoji6','fluming','./AnyaPikaMedia/theme/Command-image/Cimg67.jpg','./AnyaPikaMedia/theme/Command-image/Cimg29.jpg','./AnyaPikaMedia/theme/Anyapic.jpg','15drojSJ','reactmoji8','footernull','./AnyaPikaMedia/theme/Command-image/Cimg82.jpg','./AnyaPikaMedia/theme/Command-image/Cimg65.jpg','./AnyaPikaMedia/theme/Command-image/Cimg32.jpg','limitawal','thumb53','2234WCSEtP','https://github.com/Pika4O4','themeemoji8','thumb24','./AnyaPikaMedia/theme/Command-image/Cimg12.jpg','./AnyaPikaMedia/theme/Command-image/Cimg68.jpg','thumb82','./AnyaPikaMedia/theme/Command-image/Cimg62.jpg','vidmenu','reactmoji6','./AnyaPikaMedia/theme/Command-image/Cimg23.jpg','thumb61','7rkPlto','application/pdf','thumb84','thumb3','reactmoji13','thumb99','./AnyaPikaMedia/theme/Command-image/Cimg28.jpg','./AnyaPikaMedia/theme/Command-image/Cimg17.jpg','./AnyaPikaMedia/theme/Command-image/Cimg79.jpg','thumb21','thumb93','reactmoji11','./AnyaPikaMedia/theme/Command-image/Cimg76.jpg','thumb6','reactmoji14','thumb45','application/zip','6rCbOXg','thumb86','267fueedT','prefa'];_0x5835=function(){return _0x448d28;};return _0x5835();}let file=require[_0x1b8476(0x1e9)](__filename);function _0x26e7(_0x589d91,_0xf96467){const _0x583579=_0x5835();return _0x26e7=function(_0x26e7d7,_0x140d79){_0x26e7d7=_0x26e7d7-0x169;let _0x41282e=_0x583579[_0x26e7d7];return _0x41282e;},_0x26e7(_0x589d91,_0xf96467);}fs[_0x107926(0x108)](file,()=>{const _0xaab9b1=_0x1b8476,_0x1ecd36=_0x107926;fs[_0x1ecd36(0xcf)](file),console[_0xaab9b1(0x243)](chalk[_0x1ecd36(0x143)](_0xaab9b1(0x16b)+__filename+'\x27')),delete require[_0x1ecd36(0x12f)][file],require(file);});
