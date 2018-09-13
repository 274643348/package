'use strict';

module.exports = {
  load () {
    // 当 package 被正确加载的时候执行
  },

  unload () {
    // 当 package 被正确卸载的时候执行
  },

  messages: {
    'mm' () {
      for (let index = 0; index < 1000; index++) {
        Editor.log('中华人民共和国万岁!!!');
      }
      
    },
    'cc' () {
        Editor.log('上海市');
      }
  },
};