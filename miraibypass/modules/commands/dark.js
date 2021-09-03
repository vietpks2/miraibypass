module.exports.config = {
name: "dảk",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "dark",
	commandCategory: "NoCầnPrefix",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("dảk")==0 || (event.body.indexOf("Dảk")==0)) {
		var msg = {
				attachment: fs.createReadStream(__dirname + `/noprefix/bruh.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}
