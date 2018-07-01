// pages/messageBoard/messageBoard.js
var util = require('../../utils/util.js');

var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal:"",
    msgData:[
    ],
    praiseSrc:''
  },

  changeInputVal(ev){
    this.setData({
      inputVal:ev.detail.value
    })
  },

  addMsg(){
    var list=this.data.msgData;
    list.push({ msg: this.data.inputVal,
                date: util.formatTime(new Date()),
                praiseCount:0,
                praised:false});
    this.setData({
      msgData:list,
      inputVal: ""
    });
    wx.setStorage({
      key: 'msgData',
      data: this.data.msgData,
    });
    console.log(list)
  },

  praise(ev){
    console.log(111111);
    console.log(ev);
    var n=ev.target.dataset.index;
    var list=this.data.msgData;
    var item = list[n];
    var praised=item.praised
    if (!praised) {
      item.praiseCount = item.praiseCount + 1;
    } else {
      item.praiseCount = item.praiseCount - 1;
    }
    item.praised=!item.praised;
    this.setData({
      msgData:list
    });
    console.log(this.data.msgData);
  },

  // praise(ev) {
  //   var n = ev.target.dataset.index;
  //   var list = this.data.msgData;
  //   list.splice(n, 1);
  //   this.setData({
  //     msgData: list
  //   });
  //   wx.setStorage({
  //     key: 'msgData',
  //     data: this.data.msgData,
  //   })
  // },

  clear(){
    wx.setStorage({
      key: 'msgData',
      data: [],
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const this_=this;
      wx.getStorage({
        key: 'msgData',
        success: function(res) {
          this_.setData({
            msgData:res.data
          }),
          console.log(res.data)
        },
      })
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