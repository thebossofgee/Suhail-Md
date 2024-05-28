const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaaohhsAO7RF5o9rvH11";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaaohhsAO7RF5o9rvH11" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_30_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDk1LFxuICAgICAgICAzMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDM0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk5LFxuICAgICAgICA4NixcbiAgICAgICAgMzEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICA1MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ1LFxuICAgICAgICA4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA2OSxcbiAgICAgICAgMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMixcbiAgICAgICAgMjMyLFxuICAgICAgICAzNixcbiAgICAgICAgMzYsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDQyLFxuICAgICAgICA0MixcbiAgICAgICAgMjA2LFxuICAgICAgICAzMixcbiAgICAgICAgMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjMsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMixcbiAgICAgICAgNjcsXG4gICAgICAgIDYwLFxuICAgICAgICA5MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE4LFxuICAgICAgICA0NCxcbiAgICAgICAgODIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTksXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDksXG4gICAgICAgIDI4LFxuICAgICAgICA1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDg3LFxuICAgICAgICAzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDY2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAwLFxuICAgICAgICAyNyxcbiAgICAgICAgODksXG4gICAgICAgIDc0LFxuICAgICAgICA5NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDkxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NyxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTksXG4gICAgICAgIDQzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTksXG4gICAgICAgIDEzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDU2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDM4LFxuICAgICAgICA5MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVqUmRUVENDVC9PeVhJWWY5QUxzVnhLS3B4SzY3UTUrbXEvK1h6OW4rdDA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImFFZkVWNUJNVGtlcDBQdzU0UlNwOEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzA5MzQ0NTYtZTBjOC00YjY1LWFhNWMtNmU4YzA0ZDU5ZmI2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ4LFxuICAgICAgMTYxLFxuICAgICAgNjEsXG4gICAgICAyNDgsXG4gICAgICA3OSxcbiAgICAgIDIwNyxcbiAgICAgIDIwOCxcbiAgICAgIDgxLFxuICAgICAgMjE5LFxuICAgICAgNzAsXG4gICAgICAyNTAsXG4gICAgICA5LFxuICAgICAgMjA1LFxuICAgICAgMTQ2LFxuICAgICAgOTUsXG4gICAgICAyMDQsXG4gICAgICAyMjIsXG4gICAgICAyMzMsXG4gICAgICAyNDQsXG4gICAgICAxMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAzLFxuICAgICAgMTc0LFxuICAgICAgMjQsXG4gICAgICAxNzcsXG4gICAgICAxNDAsXG4gICAgICAyMjgsXG4gICAgICAxMTEsXG4gICAgICAyMjYsXG4gICAgICA3MixcbiAgICAgIDE2NCxcbiAgICAgIDAsXG4gICAgICAxMDgsXG4gICAgICAyNTAsXG4gICAgICAyOCxcbiAgICAgIDE2NCxcbiAgICAgIDI1LFxuICAgICAgMjE1LFxuICAgICAgNzQsXG4gICAgICAxOTMsXG4gICAgICAyMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUVZISEpFS1pcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTQ2MDc1MTU4OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzEyOTczNjgzOTE5Mjc6MzVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVhwd1pNRUVLN0wxTElHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3dDRmMm8xMDA4ZjkrbUpFZGp6K3piS2E5YjRxN0UrUWI3K3g3THo0cVRvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkdQcm1KelZoTkpyeWRFSE4vTVJvWllrOUlPaHZyNFlCaW45dFRNS21QUnBkQm15UEd5SW41SmFuK1hIRGJOb3BsbGVNR3dWeXhoZ0QzUG8vb2xWc0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjBobUNjdzhBSTZVbm9mYnE1NnJ0cVBXQXo5d25tRFpSdmVYSDZENjY4SUZRVVN5TURvQmp4WVd2a2Q1bWF0NkpNN3hLSW5naEVLY0dsNXZDdUJZV2hnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTQ2MDc1MTU4OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY4NTYyNDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDUkFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNSQS5qc29uIjogIntcImtleURhdGFcIjpcIm1RalpqZ3d4c0RpQzdZbXNzQk15U04xWnRvTVhOcTY0eERORUR2RmtJYTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTExNDY2NjE3OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjc0ODM0NjQwNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Mr Stacha",
  ownername:process.env.OWNER_NAME|| "Stacha gee",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
