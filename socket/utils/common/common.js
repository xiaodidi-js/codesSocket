
//  微信后台的appid
let j = {
  appID: 'wx427aa2cee61883dd',
  secret: '945ffa55aed70a50c4db910df20c778e'
};

//  请求地址
module.exports = {
  j: j,
  purl: "https://api.gizwits.com/app/",
  //  后台获取数据
  serviceUri: 'https://yelvti.qupinmall.com/public/index/',
  //  https://www.chlorop.com.cn/weixin/public/index/
  //  语音上传连接
  onloadurl: 'https://yelvti.qupinmall.com/public/index/dev/zhen',
  gizwitsAppId: 'd8b4d2f0bce943ee9ecb4abfa01a2e55',
  wxopen: 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token',
  access_token: '2BVg5XaXPn8MD6UgPp-bbMQ03VjKFxmn03ZBqpMp23ZN7V4uIhPNDZC2sIP6ArX2fjvUaUUKCrx-xLkLyRDGU2T8zqB3Q9ck9G-kczwwwIsgCIMLi1di2pdaXzNFTOIHJNWiAJAWAJ',
  template_id: 'ho9RAP7GBHDJYg3EVHqiBgxSQmt1apwOpGAhLBCfgkI', //  模版ID
  uploadFileUrl: 'https://yelvti.qupinmall.com/public/index/dev/zhen',
  header: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT',
    'Access-Control-Allow-Headers': 'Origin, X-Requested - With, Content-Type, Accept'
  },
}

//  http://yuyin.ittun.com/public/index/dev/zhen