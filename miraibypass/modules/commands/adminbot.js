const request = require('request');
const fs = global.nodemodule["fs-extra"]
module.exports.config = {
  name: "adminbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HelyT",
  description: "Kiểm tra thông tin người dùng.",
  commandCategory: "Info",
  usages: "info",
  cooldowns: 1,
  dependencies: {
"request": ""
}
};

module.exports.run = async({api,event,args,Users,global,Currencies}) => {
var callback = () => api.sendMessage(
  {body:`🥳ADMIN BOT🥳\n
  \n👀 Tên: Nguyễn Thiện Nhân
  \n❎ Tuổi: 1x
  \n👤 😶 Giới tính: Nam
  \n💫 Chiều cao: 1m79
  \n💘 Mối quan hệ: Ế :<
  \n😎 Quê quán: Bình Thuận
  \n🤔 Nơi ở: Sài Gòn
  \n👫 Gu: Giọng nói :<
  \n🌸 Tính cách: Độc thân nhưng đéo vui tính :)
  \n👉 Profile: https://www.facebook.com/ThienNhan.URL/`,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(
        encodeURI(`https://graph.facebook.com/${100000522905523}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
       };