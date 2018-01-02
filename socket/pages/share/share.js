// pages/share/share.js

const did = wx.getStorageSync('did');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cancel: true,
    top: 0,
    layer: true,
    did: "",
    devices: wx.getStorageSync('devices')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this;
    wx.getSystemInfo({
      success(res) {
        that.setData({
          winTop: (res.windowHeight - 330) / 2,
        });
      },
    });
  },

  longChose(e) {
    this.setData({
      did: e.currentTarget.dataset.did
    });
    switch(true) {
      case this.data.cancel == false:
        this.setData({
          cancel: true,
        });
        break;
      case this.data.cancel == true:
        this.setData({
          cancel: false,
        });
        break;
      default:
        break;
    }
  },

  clickChonse() {
    this.setData({
      cancel: true,
    });
  },

  addShare() {
    let that = this;
    let options = wx.getStorageSync('options');
    var head = {
      'content-type': 'application/json',
      'X-Gizwits-Application-Id': options.gizwitsAppId,
      'X-Gizwits-User-token': options.token,
    };
    wx.request({
      url: 'https://api.gizwits.com/app/sharing',
      method: "POST",
      header: head,
      data: {
        "type": 0,
        "did": that.data.did,
        "phone": "13630017088",
      },
      success(res) {
        that.setData({
          layer: true,
        });
        wx.showModal({
          title: '警告!',
          content: res.data.error_message,
        })
      }
    })

  },

  cancenLayer() {
    this.setData({
      layer: true,
    });
  }

})