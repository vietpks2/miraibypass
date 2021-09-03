module.exports.config = {
name: "bủh",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "hihihihi",
	commandCategory: "NoCầnPrefix",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("bủh")==0 || (event.body.indexOf("Bủh")==0)) {
		var msg = {
				body: "Bủh",
				attachment: fs.createReadStream(__dirname + `/noprefix/xxx.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}
