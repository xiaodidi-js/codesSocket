class Main {
  
  constructor() {
  }

  formatTime(number) {  //  时间格式化
    var n = number * 1000;
    let date = new Date(n),
      //  年份
      year = date.getFullYear(),
      //  月份
      month = date.getMonth() + 1,
      //  日期
      day = date.getDate(),
      //  小时
      hour = date.getHours(),
      //分钟
      minute = date.getMinutes(),
      //秒钟
      second = date.getSeconds()
    return [year, month, day].map(this.formatNumber).join('-') + ' ' + [hour, minute, second].map(this.formatNumber).join(':');
  }

  getArrays(reqArr) {
    let arrays = new Array(768), i = 0;
    for (i; i <= 768; i++) {
      arrays[i] = 0;
    }
    let arrtoo = arrays.slice(0);
    let t = reqArr;
    return t.concat(arrtoo).splice(0, 768)
  }

  _Toast(message, types) {
    wx.showToast({
      title: message,
      icon: types,
      duration: 2000
    });
  }

  _goShowModel(title, desc, success) {
    wx.showModal({
      title: title,
      content: desc,
      showCancel: false,
      success(res) {
        success(res)
      }
    });
  }

  sendRrquest(url, method, data, header) {
    return new Promise(function (resolve, reject) {
      wx.request({
        url: urls.purl + url,
        data: data,
        method: method,
        header: header,
        success: resolve,
        fail: reject
      })
    });
  }

  getSocketResponse(callback) {
    wx.onSocketMessage((res) => {
      try {
        let data = JSON.parse(res.data).data.attrs.data;
        return callback(data);
      } catch (e) { }
    })
  }

}

export { Main }