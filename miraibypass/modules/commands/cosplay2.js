const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "cosplay2",
  version: "1.0.5",
  hasPermssion: 0,
  credits: "HelyT",
  description: "Ảnh Cospay Phiên bản rẻ hơn của Cosplay",
  commandCategory: "Random-img",
  usages: "cosplay2",
  cooldowns: 1,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [
"https://i.ibb.co/xYw2Sz0/naughty-rabbit-162747181596591.jpg",
"https://i.ibb.co/Z1SbH43/naughty-rabbit-162747180052889.jpg",
"https://i.ibb.co/SKRWtsj/naughty-rabbit-162747185001576.jpg",
"https://i.ibb.co/tJshtxz/naughty-rabbit-162747186880850.jpg",
"https://i.ibb.co/9qK5HYP/naughty-rabbit-162747188194497.jpg",
"https://i.ibb.co/xDQxzzR/naughty-rabbit-162747198058918.jpg",
"https://i.ibb.co/7tXZ7W9/naughty-rabbit-162747204523069.jpg",
"https://i.ibb.co/k9rWY8F/naughty-rabbit-162747204523148.jpg",
"https://i.ibb.co/23WRgRT/naughty-rabbit-162747205300324.jpg",
"https://i.ibb.co/x3q29h2/naughty-rabbit-162747380019763.jpg",
"https://i.ibb.co/zffGbsw/naughty-rabbit-1627471727197345.jpg",
"https://i.ibb.co/HPCKzbq/naughty-rabbit-1627471727198251.jpg",
"https://i.ibb.co/pK5Zkyj/naughty-rabbit-1627471727198397.jpg",
"https://i.ibb.co/VWfHxs9/naughty-rabbit-1627471727198434.jpg",
"https://i.ibb.co/StXbbGm/naughty-rabbit-1627471727198494.jpg",
"https://i.ibb.co/XpbxMCd/naughty-rabbit-1627471727199330.jpg",
"https://i.ibb.co/R3xfV4Y/naughty-rabbit-1627471727199571.jpg",
"https://i.ibb.co/KrtJpQP/naughty-rabbit-1627471727199904.jpg",
"https://i.ibb.co/7SsvcSN/naughty-rabbit-1627471776565210.jpg",
"https://i.ibb.co/f4w9cb7/naughty-rabbit-1627471776565269.jpg",
"https://i.ibb.co/fChcmYf/naughty-rabbit-1627471776565585.jpg",
"https://i.ibb.co/mhprgWd/naughty-rabbit-1627471776565830.jpg",
"https://i.ibb.co/MfwySf4/naughty-rabbit-1627471800527406.jpg",
"https://i.ibb.co/djq15N6/naughty-rabbit-1627471800527414.jpg",
"https://i.ibb.co/Wyy9MJr/naughty-rabbit-1627471800527944.jpg",
"https://i.ibb.co/wyDcKnN/naughty-rabbit-1627471800528153.jpg",
"https://i.ibb.co/MSgyCzS/naughty-rabbit-1627471800528552.jpg",
"https://i.ibb.co/V28cQZm/naughty-rabbit-1627471800529110.jpg",
"https://i.ibb.co/9n9pm6V/naughty-rabbit-1627471800529842.jpg",
"https://i.ibb.co/kQBmXhn/naughty-rabbit-1627471800887114.jpg",
"https://i.ibb.co/1stzCYM/naughty-rabbit-1627471800887303.jpg",
"https://i.ibb.co/09WYz2p/naughty-rabbit-1627471800887699.jpg",
"https://i.ibb.co/x5q8XPB/naughty-rabbit-1627471815965798.jpg",
"https://i.ibb.co/ZzZDFW5/naughty-rabbit-1627471815966154.jpg",
"https://i.ibb.co/98KDD7m/naughty-rabbit-1627471828739400.jpg",
"https://i.ibb.co/GQxVz36/naughty-rabbit-1627471828739595.jpg",
"https://i.ibb.co/0cw9XST/naughty-rabbit-1627471828739637.jpg",
"https://i.ibb.co/F7wNfyV/naughty-rabbit-1627471841779514.jpg",
"https://i.ibb.co/D7f848L/naughty-rabbit-1627471841779613.jpg",
"https://i.ibb.co/K2QKvyN/naughty-rabbit-1627471841780209.jpg",
"https://i.ibb.co/K6LQTBn/naughty-rabbit-1627471841780316.jpg",
"https://i.ibb.co/FBfnfL9/naughty-rabbit-1627471841780420.jpg",
"https://i.ibb.co/Hnw1J2c/naughty-rabbit-1627471841780434.jpg",
"https://i.ibb.co/z2XXKSf/naughty-rabbit-1627471841780787.jpg",
"https://i.ibb.co/fdW7bL0/naughty-rabbit-1627471841781796.jpg",
"https://i.ibb.co/YDwsyzH/naughty-rabbit-1627471850014588.jpg",
"https://i.ibb.co/R9Pcnxb/naughty-rabbit-1627471850014829.jpg",
"https://i.ibb.co/PwJ6kTW/naughty-rabbit-1627471868806715.jpg",
"https://i.ibb.co/qMSXJYK/naughty-rabbit-1627471868807251.jpg",
"https://i.ibb.co/Y3ZZtFx/naughty-rabbit-1627471868807444.jpg",
"https://i.ibb.co/8mLJyTC/naughty-rabbit-1627471868808100.jpg",
"https://i.ibb.co/5k1h72X/naughty-rabbit-1627471868808130.jpg",
"https://i.ibb.co/s5Q6pvw/naughty-rabbit-1627471868808302.jpg",
"https://i.ibb.co/4R9xfdp/naughty-rabbit-1627471868808488.jpg",
"https://i.ibb.co/fnDbBgB/naughty-rabbit-1627471868808736.jpg",
"https://i.ibb.co/N3YgtXG/naughty-rabbit-1627471868809510.jpg",
"https://i.ibb.co/4gfznVW/naughty-rabbit-1627471881943129.jpg",
"https://i.ibb.co/803G771/naughty-rabbit-1627471881943235.jpg",
"https://i.ibb.co/M7xv5rN/naughty-rabbit-1627471881943810.jpg",
"https://i.ibb.co/WspqGQ7/naughty-rabbit-1627471881944225.jpg",
"https://i.ibb.co/qgVWY6y/naughty-rabbit-1627471881944254.jpg",
"https://i.ibb.co/bgcMSKY/naughty-rabbit-1627471881944339.jpg",
"https://i.ibb.co/BqxkX8V/naughty-rabbit-1627471881944358.jpg",
"https://i.ibb.co/2q5B2CL/naughty-rabbit-1627471881945137.jpg",
"https://i.ibb.co/vQt9cRm/naughty-rabbit-1627471881945279.jpg",
"https://i.ibb.co/DbZt1RM/naughty-rabbit-1627471889407415.jpg",
"https://i.ibb.co/kQDDtbG/naughty-rabbit-1627471889407656.jpg",
"https://i.ibb.co/Zx2j9B9/naughty-rabbit-1627471889407689.jpg",
"https://i.ibb.co/27rj4dJ/naughty-rabbit-1627471889407933.jpg",
"https://i.ibb.co/sQ3YBWX/naughty-rabbit-1627471889408203.jpg",
"https://i.ibb.co/zf7nwYk/naughty-rabbit-1627471889408564.jpg",
"https://i.ibb.co/844DqLT/naughty-rabbit-1627471889408616.jpg",
"https://i.ibb.co/5B2ghZG/naughty-rabbit-1627471912794105.jpg",
"https://i.ibb.co/zJkX7fX/naughty-rabbit-1627471912794201.jpg",
"https://i.ibb.co/mXdgBNq/naughty-rabbit-1627471912794232.jpg",
"https://i.ibb.co/Z1nkHDW/naughty-rabbit-1627471912794340.jpg",
"https://i.ibb.co/0tmWYXf/naughty-rabbit-1627471912794405.jpg",
"https://i.ibb.co/x1G9pdV/naughty-rabbit-1627471912794455.jpg",
"https://i.ibb.co/Y8TzFBb/naughty-rabbit-1627471912794502.jpg",
"https://i.ibb.co/ZxJ972H/naughty-rabbit-1627471912794748.jpg",
"https://i.ibb.co/vY6Lc3X/naughty-rabbit-1627471912794750.jpg",
"https://i.ibb.co/4VhrmSy/naughty-rabbit-1627471912794831.jpg",
"https://i.ibb.co/1YCH6VX/naughty-rabbit-1627471914457555.jpg",
"https://i.ibb.co/6yBMzQr/naughty-rabbit-1627471914459245.jpg",
"https://i.ibb.co/N3cxRqm/naughty-rabbit-1627471914459423.jpg",
"https://i.ibb.co/GVDkJ3x/naughty-rabbit-1627471914459874.jpg",
"https://i.ibb.co/9GLTs64/naughty-rabbit-1627471914460598.jpg",
"https://i.ibb.co/Y0FQwmK/naughty-rabbit-1627471917585680.jpg",
"https://i.ibb.co/LrVvSvS/naughty-rabbit-1627471917585724.jpg",
"https://i.ibb.co/fnGQ3Kp/naughty-rabbit-1627471917586352.jpg",
"https://i.ibb.co/Qczkzsy/naughty-rabbit-1627471917586404.jpg",
"https://i.ibb.co/RNs1DNG/naughty-rabbit-1627471917586687.jpg",
"https://i.ibb.co/WGc7dMd/naughty-rabbit-1627471917587140.jpg",
"https://i.ibb.co/DKVczrc/naughty-rabbit-1627471917587220.jpg",
"https://i.ibb.co/J27hV3Y/naughty-rabbit-1627471917587696.jpg",
"https://i.ibb.co/RQt2X2g/naughty-rabbit-1627471917587735.jpg",
"https://i.ibb.co/W2jbH1r/naughty-rabbit-1627471917593756.jpg",
"https://i.ibb.co/60gfdYC/naughty-rabbit-1627471934118399.jpg",
"https://i.ibb.co/C9dMHfF/naughty-rabbit-1627471934119909.jpg",
"https://i.ibb.co/7pgdCmB/naughty-rabbit-1627471934119912.jpg",
"https://i.ibb.co/HCFWc7q/naughty-rabbit-1627471934119994.jpg",
"https://i.ibb.co/Gk6tBMy/naughty-rabbit-1627471934120397.jpg",
"https://i.ibb.co/dkHh4vF/naughty-rabbit-1627471934120478.jpg",
"https://i.ibb.co/5R1hDss/naughty-rabbit-1627471935344601.jpg",
"https://i.ibb.co/7QPy8Wt/naughty-rabbit-1627471935345184.jpg",
"https://i.ibb.co/9VLmCSs/naughty-rabbit-1627471935345482.jpg",
"https://i.ibb.co/Gp1VLnS/naughty-rabbit-1627471935345591.jpg",
"https://i.ibb.co/42gH0Pz/naughty-rabbit-1627471935345729.jpg",
"https://i.ibb.co/51rqR3X/naughty-rabbit-1627471935346730.jpg",
"https://i.ibb.co/BKwpgY6/naughty-rabbit-1627471935346791.jpg",
"https://i.ibb.co/4WJpWwG/naughty-rabbit-1627471935346849.jpg",
"https://i.ibb.co/5YVzQdj/naughty-rabbit-1627471935346951.jpg",
"https://i.ibb.co/VT1v83z/naughty-rabbit-1627471945299768.jpg",
"https://i.ibb.co/PWCNBgZ/naughty-rabbit-1627471945300492.jpg",
"https://i.ibb.co/NyYQX9Z/naughty-rabbit-1627471945300548.jpg",
"https://i.ibb.co/d216642/naughty-rabbit-1627471945300591.jpg",
"https://i.ibb.co/RSv2ZsN/naughty-rabbit-1627471945300600.jpg",
"https://i.ibb.co/gMRXsWV/naughty-rabbit-1627471945300654.jpg",
"https://i.ibb.co/8r6WfQw/naughty-rabbit-1627471945300755.jpg",
"https://i.ibb.co/qkqTFDV/naughty-rabbit-1627471945300780.jpg",
"https://i.ibb.co/JxzLSrJ/naughty-rabbit-1627471945300803.jpg",
"https://i.ibb.co/c1Ggc6n/naughty-rabbit-1627471954933359.jpg",
"https://i.ibb.co/1mQsn21/naughty-rabbit-1627471963873286.jpg",
"https://i.ibb.co/862tq5b/naughty-rabbit-1627471963873400.jpg",
"https://i.ibb.co/dLrxjBy/naughty-rabbit-1627471963873622.jpg",
"https://i.ibb.co/8zTf0f7/naughty-rabbit-1627471970359708.jpg",
"https://i.ibb.co/wSGnXkn/naughty-rabbit-1627471970359849.jpg",
"https://i.ibb.co/MP9pb26/naughty-rabbit-1627471970360122.jpg",
"https://i.ibb.co/Ptc00LT/naughty-rabbit-1627471970360291.jpg",
"https://i.ibb.co/8sNjCsC/naughty-rabbit-1627471970360550.jpg",
"https://i.ibb.co/DD5FDNc/naughty-rabbit-1627471970360805.jpg",
"https://i.ibb.co/ySdgvky/naughty-rabbit-1627471970360836.jpg",
"https://i.ibb.co/r4zXjRh/naughty-rabbit-1627471970360889.jpg",
"https://i.ibb.co/cXyLxYN/naughty-rabbit-1627471970360918.jpg",
"https://i.ibb.co/c1pp7Nz/naughty-rabbit-1627471980588832.jpg",
"https://i.ibb.co/TMkD0wT/naughty-rabbit-1627471980589229.jpg",
"https://i.ibb.co/sRCy9Vq/naughty-rabbit-1627471980589297.jpg",
"https://i.ibb.co/BsrG3CS/naughty-rabbit-1627471980589372.jpg",
"https://i.ibb.co/p0GFJVB/naughty-rabbit-1627471980589374.jpg",
"https://i.ibb.co/Ybq5pbV/naughty-rabbit-1627471980589388.jpg",
"https://i.ibb.co/RTDhGvq/naughty-rabbit-1627471980589831.jpg",
"https://i.ibb.co/J35mgYK/naughty-rabbit-1627471980589845.jpg",
"https://i.ibb.co/TR6QrnN/naughty-rabbit-1627471997620203.jpg",
"https://i.ibb.co/mFbJC81/naughty-rabbit-1627471997620386.jpg",
"https://i.ibb.co/tP61cH8/naughty-rabbit-1627471997620848.jpg",
"https://i.ibb.co/P1535Yc/naughty-rabbit-1627472019668161.jpg",
"https://i.ibb.co/WWNHzct/naughty-rabbit-1627472019668321.jpg",
"https://i.ibb.co/hMHpcLm/naughty-rabbit-1627472019668364.jpg",
"https://i.ibb.co/vV4LkfS/naughty-rabbit-1627472019668386.jpg",
"https://i.ibb.co/4dQTjr0/naughty-rabbit-1627472019668512.jpg",
"https://i.ibb.co/rtpmMMQ/naughty-rabbit-1627472019668554.jpg",
"https://i.ibb.co/M8F8J6h/naughty-rabbit-1627472019668570.jpg",
"https://i.ibb.co/52h6s06/naughty-rabbit-1627472019668678.jpg",
"https://i.ibb.co/Qb8FC1X/naughty-rabbit-1627472035425662.jpg",
"https://i.ibb.co/9Vy2hpd/naughty-rabbit-1627472035426134.jpg",
"https://i.ibb.co/TYzDGjz/naughty-rabbit-1627472035426618.jpg",
"https://i.ibb.co/VMyS1yf/naughty-rabbit-1627472035426665.jpg",
"https://i.ibb.co/0XDgZGF/naughty-rabbit-1627472035426757.jpg",
"https://i.ibb.co/7VJtsVV/naughty-rabbit-1627472035426817.jpg",
"https://i.ibb.co/vvKfBt4/naughty-rabbit-1627472045230350.jpg",
"https://i.ibb.co/7yJcQJw/naughty-rabbit-1627472045231345.jpg",
"https://i.ibb.co/NTbq8vt/naughty-rabbit-1627472053003311.jpg",
"https://i.ibb.co/BZ3pVtz/naughty-rabbit-1627472053003747.jpg",
"https://i.ibb.co/yPKSyFs/naughty-rabbit-1627472053003880.jpg",
"https://i.ibb.co/br0CS4L/naughty-rabbit-1627472242298832.jpg",
"https://i.ibb.co/Pw01X3z/naughty-rabbit-1627472245504145.jpg",
"https://i.ibb.co/qCqnFFB/naughty-rabbit-1627472245504172.jpg",
"https://i.ibb.co/CQY3X0h/naughty-rabbit-1627472245504499.jpg",
"https://i.ibb.co/Mcs8Cf8/naughty-rabbit-1627472245504663.jpg",
"https://i.ibb.co/tpc6P6p/naughty-rabbit-1627472245504944.jpg",
"https://i.ibb.co/mC6hNxn/naughty-rabbit-1627472245505364.jpg",
"https://i.ibb.co/XV5JNtv/naughty-rabbit-1627472245505758.jpg",
"https://i.ibb.co/RNMTQHt/naughty-rabbit-1627472250646200.jpg",
"https://i.ibb.co/B4xjzJx/naughty-rabbit-1627472250646207.jpg",
"https://i.ibb.co/R7xKjVG/naughty-rabbit-1627472250646257.jpg",
"https://i.ibb.co/vPCBgnV/naughty-rabbit-1627472254117145.jpg",
"https://i.ibb.co/phwvtgK/naughty-rabbit-1627472254118269.jpg",
"https://i.ibb.co/9yq9pNR/naughty-rabbit-1627472706882935.jpg",
"https://i.ibb.co/n6VpmKV/naughty-rabbit-1627472706883141.jpg",
"https://i.ibb.co/h7xZXHB/naughty-rabbit-1627472706883255.jpg",
"https://i.ibb.co/cwjXQcX/naughty-rabbit-1627472706883588.jpg",
"https://i.ibb.co/1rkJ1RT/naughty-rabbit-1627472706883622.jpg",
"https://i.ibb.co/Cwxpgdk/naughty-rabbit-1627472706883679.jpg",
"https://i.ibb.co/YbS6QVV/naughty-rabbit-1627472706883912.jpg",
"https://i.ibb.co/zPQ8cSF/naughty-rabbit-1627472706883925.jpg",
"https://i.ibb.co/CHWwLMV/naughty-rabbit-1627472859234607.jpg",
"https://i.ibb.co/cwkqPVP/naughty-rabbit-1627472859235163.jpg",
"https://i.ibb.co/4ZjGyzN/naughty-rabbit-1627472859235350.jpg",
"https://i.ibb.co/NjHkY1y/naughty-rabbit-1627472859236202.jpg",
"https://i.ibb.co/pXZP2hC/naughty-rabbit-1627472859236252.jpg",
"https://i.ibb.co/JxwDMh3/naughty-rabbit-1627472859236343.jpg",
"https://i.ibb.co/DbnnQSq/naughty-rabbit-1627472859236812.jpg",
"https://i.ibb.co/sHwCFpv/naughty-rabbit-1627472859236816.jpg",
"https://i.ibb.co/Zgg0q21/naughty-rabbit-1627472859236972.jpg",
"https://i.ibb.co/qR4pXs0/naughty-rabbit-1627472859237465.jpg",
"https://i.ibb.co/jDQr0Ln/naughty-rabbit-1627472890152263.jpg",
"https://i.ibb.co/tZmZHCq/naughty-rabbit-1627472890152560.jpg",
"https://i.ibb.co/2cffwdX/naughty-rabbit-1627473648069567.jpg",
"https://i.ibb.co/1z8PM9w/naughty-rabbit-1627473648070690.jpg",
"https://i.ibb.co/BC3nLDt/naughty-rabbit-1627473648070728.jpg",
"https://i.ibb.co/W2mYXJv/naughty-rabbit-1627473757897108.jpg",
"https://i.ibb.co/6HVTx7x/naughty-rabbit-1627473757898316.jpg",
"https://i.ibb.co/KcZchmv/naughty-rabbit-1627473757898430.jpg",
"https://i.ibb.co/v1DMNYk/naughty-rabbit-1627473757898655.jpg",
"https://i.ibb.co/pWj7TsT/naughty-rabbit-1627473757898696.jpg",
"https://i.ibb.co/QkrRgrJ/naughty-rabbit-1627473824683191.jpg",
"https://i.ibb.co/rwB0ZNW/naughty-rabbit-1627473824683290.jpg",
"https://i.ibb.co/SKZSGvK/naughty-rabbit-1627473856609732.jpg",
"https://i.ibb.co/rkFMm4G/naughty-rabbit-1627473856610727.jpg",
"https://i.ibb.co/30KpJKR/naughty-rabbit-1627473856610745.jpg",
];
const moneyUser = (await Currencies.getData(event.senderID)).money;
var moneyBet = 500;
if (moneyBet > moneyUser) {
return api.sendMessage(`Bạn cần 500 đô để xem ảnh ?`,event.threadID, event.messageID);
}
   var callback = () => api.sendMessage({body:`Ảnh Cosplay\n✅Đã trừ 500 đô trên tài khoản của bạn!\nSố Ảnh: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/30.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/30.jpg"));  
      request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/30.jpg")).on("close",() => callback());
return await Currencies.decreaseMoney(event.senderID, moneyBet);
  };