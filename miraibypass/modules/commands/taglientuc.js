module.exports.config = {
	name: "taglientuc",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "NTKhang",
	description: "Tag liên tục người bạn tag 10 lần",
	commandCategory: "group",
	usages: " @tag",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));};
	var mention = Object.keys(event.mentions)[0];
  if(!mention) return api.sendMessage("Cần tag người bạn muốn tag liên tục, tag sml", event.threadID, event.messageID);
  var name = ((await api.getUserInfo(mention))[mention]).name;
  var tagmention = [{tag: name, id:mention}];
  var out = function (text) { api.sendMessage({body: text, mentions: tagmention}, event.threadID);}
  await delay(2000);//2000 là 2 giây
  out(`Alo con lợn ${name}`);
  await delay(3000);//3000 là 3 giây
  out(`Hiện hồn ${name} `);
  await delay(3000);//3000 là 3 giây
  out(`Ai tìm mày kìa aloo ${name} `);
  await delay(3000);//3000 là 3 giây
  out(`Có người gặp mày kìa đĩ ơi ${name}`);
  await delay(3000);//3000 là 3 giây
  out(`Hiện hồn đi con lợn này ${name}`);
  await delay(3000);//3000 là 3 giây
  out(`Hiện hồn nhanh không người ta đốt nhà mày giờ ${name}`);
  await delay(3000);//3000 là 3 giây
  out(`Mày đâu rồi có người tìm gấp kìa ${name}`);
  await delay(3000);//3000 là 3 giây
  out(`Aloooooooooo trả lời đi alo alo ${name}`);
  await delay(3000);//3000 là 3 giây
  out(`Con cặc địt mẹ mày ${name}`);
  await delay(3000);//3000 là 3 giây
  out(`Tao đéo tag nữa mệt rồi, pai pai ${name}`);
  await delay(3000);//3000 là 3 giây
  out(`Tao dỗi rồi ${name}`);
}