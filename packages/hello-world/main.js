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
      },
    'queryAssets'(){
        const assetdb = Editor.assetdb;
        Editor.clearLog();
        Editor.log("start----------------------------------");
        let fileCount = 0;
        assetdb.queryAssets("db:assets/*","",(err,results)=>{
          if(err){
            Editor.error(err);
          }else{
            for (const it of results) {
              fileCount++;
              Editor.log(it.path + "---count---" +fileCount);
            }
          }
        });
      },
      'queryAssetsFiel'(){
          const assetdb = Editor.assetdb;
          Editor.clearLog();
          Editor.log("start----------------------------------");
          let fileCount = 0;
          assetdb.queryAssets("db:assets/*","",(err,results)=>{
            if(err){
              Editor.error(err);
            }else{
              for (const it of results) {
                if (!it.isSubAsset) {
                  fileCount++;
                  Editor.log(it.path + "---count---" +fileCount);
                }
              }
            }
          })
        },
        'checkChina'(){
            const assetdb = Editor.assetdb;
            Editor.clearLog();
            Editor.log("start----------------------------------");
            let fileCount = 0;
            assetdb.queryAssets("db:assets/*","",(err,results)=>{
              if(err){
                Editor.error(err);
              }else{
                for (const it of results) {
                  const result = this.hasChina(it.path);
                  if (!it.isSubAsset && result) {
                    fileCount++;
                    Editor.error(it.path + "---count---" +fileCount);
                  }
                }
              }
            })
          }
  },


  hasChina(str) {
    if (escape(str).indexOf("%u") > 0) {
      return true;
    } else {
      return false;
    }
  }

};