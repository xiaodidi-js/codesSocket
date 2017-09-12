// pages/forget/forget.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadHidden: true,
    getCodeNumber: '获取验证码',
    disaCode: false,
    phone: '',
    code: '',
    pword: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  getCodeNumber () {
    let that = this;
    var num = 10;
    var times = setInterval(function() {
      num--;
      that.setData({getCodeNumber: "还有" + num + "秒",});
      if (num > 0) {
        that.setData({
          disaCode: true,
        });
      } else {
        clearInterval(times);
        that.setData({
          getCodeNumber: '重新获取',
          disaCode: false,
        });
      }
    },1000);
  },

  ForgetForm (e) {
    console.log('forget');
    if (e.detail.value.phone == '') {
      wx.showModal({
        title: '提示',
        content: "请输入手机号码!",
        showCancel: false,
        success: function (res) { }
      });
      return false;
    } else if (e.detail.value.code == '') {
      wx.showModal({
        title: '提示',
        content: "验证码为空!",
        showCancel: false,
        success: function (res) { }
      });
      return false;
    } else if (e.detail.value.pword == '') {
      wx.showModal({
        title: '提示',
        content: "密码为空!",
        showCancel: false,
        success: function (res) { }
      });
      return false;
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})