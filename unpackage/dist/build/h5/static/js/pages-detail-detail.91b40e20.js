(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-detail"],{"0b67":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{imgShow:!1,index:0,showBtn:!1,screenHeight:0,imgLength:0,providerList:[],data:[],detailDec:""}},onLoad:function(t){var e=this;this.screenHeight=uni.getSystemInfoSync().windowHeight,this.detailDec=t.data;var i=JSON.parse(decodeURIComponent(t.data));this.imgLength=1,this.getData(i),uni.setNavigationBarTitle({title:"1/"+this.imgLength}),uni.getProvider({service:"share",success:function(t){for(var i=[],n=0;n<t.provider.length;n++)switch(t.provider[n]){case"weixin":i.push({name:"分享到微信好友",id:"weixin"}),i.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline"});break;case"qq":i.push({name:"分享到QQ",id:"qq"});break;default:break}e.providerList=i},fail:function(t){console.log("获取登录通道失败",t)}})},onShareAppMessage:function(){return{title:"欢迎使用看图模板",path:"/pages/detail/detail?data="+this.detailDec,imageUrl:this.data[this.index]}},onNavigationBarButtonTap:function(t){0===t.index&&this.collect()},methods:{download:function(){uni.downloadFile({url:this.data[this.index],success:function(t){uni.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(){uni.showToast({icon:"none",title:"已保存到手机相册"})},fail:function(){uni.showToast({icon:"none",title:"保存到手机相册失败"})}})},fail:function(t){uni.showModal({content:"下载失败，"+t.errMsg,showCancel:!1})}})},collect:function(){uni.showToast({icon:"none",title:"点击收藏按钮"})},swpierChange:function(t){this.index=t.detail.current,uni.setNavigationBarTitle({title:t.detail.current+1+"/"+this.imgLength})},preImg:function(t){var e=this;this.imgShow||(this.imgShow=!0,setTimeout(function(){e.imgShow=!1},1e3),setTimeout(function(){uni.previewImage({current:e.data[t],urls:e.data})},150))},getData:function(t){this.data=this.data.concat(t.text.goodsThumbnailUrl||t.text.goodsImageUrl),console.log(this.data,9999)}}};e.default=n},"274f":function(t,e,i){var n=i("4e48");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4c9144de",n,!0,{sourceMap:!1,shadowMode:!1})},"3f63":function(t,e,i){"use strict";i.r(e);var n=i("0b67"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"4e48":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-4231d0ac]{background-color:#000;height:100%}uni-swiper[data-v-4231d0ac]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:%?750?%;background-color:#000;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}uni-swiper-item[data-v-4231d0ac]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}uni-image[data-v-4231d0ac]{width:%?750?%;height:%?1125?%}body.?%PAGE?%[data-v-4231d0ac]{background-color:#000}",""])},9037:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"index"},[i("v-uni-swiper",{style:{height:t.screenHeight+"px"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swpierChange.apply(void 0,arguments)}}},t._l(t.data,function(e,n){return i("v-uni-swiper-item",{key:e,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.preImg(n)}}},[i("v-uni-image",{attrs:{src:e,mode:"widthFix"}})],1)}),1)],1)},o=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return n})},"946c":function(t,e,i){"use strict";var n=i("274f"),a=i.n(n);a.a},df41:function(t,e,i){"use strict";i.r(e);var n=i("9037"),a=i("3f63");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("946c");var c,s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"4231d0ac",null,!1,n["a"],c);e["default"]=r.exports}}]);