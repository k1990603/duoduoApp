(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-hot-hot"],{"0400":function(t,e,i){var a=i("cd82");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("2ff0abcc",a,!0,{sourceMap:!1,shadowMode:!1})},"0eb3":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"s-tabs",class:t.customClass},[i("div",{staticClass:"s-tabs-nav-wrap",style:"height:"+t.height+"rpx"},[i("v-uni-scroll-view",{staticClass:"scroll-view",attrs:{"show-scrollbar":!1,"scroll-with-animation":!0,"scroll-x":!0,"scroll-left":t.scrollLeft}},[t._l(t.navList,function(e,a){return i("div",{key:a,class:["s-tab-nav",{"is-active":t.value==a}],style:{width:t.navWidth,color:t.value==a?t.activeColor:t.color},domProps:{innerHTML:t._s(e.title)},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navClick(a)}}})}),t.line?i("div",{staticClass:"s-tab-line",style:{width:t.lineWidth+"px",height:t.lineHeight+"rpx",background:t.lineColor,transform:"translateX("+t.lineLeft+"px)"}}):t._e()],2)],1),i("div",{staticClass:"s-tabs-content-wrap",style:t.transform+t.transition},[t._t("default")],2)])},s=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return s}),i.d(e,"a",function(){return a})},"11fa":function(t,e,i){"use strict";var a=i("4434"),n=i.n(a);n.a},"129a":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("6b54");var a={name:"s-tab",inject:["$tabs"],props:{title:{type:String,default:""}},computed:{isActive:function(){return this.$tabs.navList[this.$tabs.value].id===this.id}},data:function(){return{id:"s-tab-id-"+Math.random().toString(36).substr(2)}},created:function(){var t=this.id,e=this.title;this.$tabs.navList=this.$tabs.navList.concat({id:t,title:e})},beforeDestroy:function(){var t=this;this.$tabs.navList=this.$tabs.navList.filter(function(e){return e.id!==t.id})}};e.default=a},"12c3":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".grid[data-v-6baebe9c]{padding-top:10px}.img-wrapper img[data-v-6baebe9c]{width:226px;height:226px;position:absolute;left:0;top:0;bottom:0;right:0;margin:auto}\n\n/* 11111 */.goods-info[data-v-6baebe9c]{font-size:12px;position:relative;overflow:hidden;\n  /* width: 100%; */\n  /* height: 172px; */\n  /* height: 190px; */padding:0 10px 10px;box-sizing:border-box;color:#59585b}.goods-info .goods-title[data-v-6baebe9c]{color:#333;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.goods-info .goods-title .text[data-v-6baebe9c]{font-size:13px;line-height:16px;\n  /* height: 16px; */padding-bottom:3px\n  /* flex: 1; */\n  /* overflow: hidden; */}\n\n/* 2222 */.goods-info .data-info[data-v-6baebe9c]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:7px}.goods-info .label-info[data-v-6baebe9c]{height:17px;display:-webkit-box;display:-webkit-flex;display:flex;font-weight:400;margin-top:8px;white-space:nowrap}.goods-info .label-info .coupons-info[data-v-6baebe9c]{display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;margin-right:4px}.goods-info .label-info .coupons-info .coupon-discount[data-v-6baebe9c]{font-size:12px;color:#fff;background-color:#e3544c;border-radius:1px 0 0 1px;padding:0 1px 0 2px}.goods-info .label-info .coupons-info .coupon-surplus[data-v-6baebe9c]{line-height:15px;display:inline-block;position:relative;color:#e3544c;font-size:12px;padding:0 2px;border-radius:0 1px 1px 0;border:1px solid #e3544c}.goods-info .sale-info[data-v-6baebe9c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;color:#9c9c9c;font-weight:400;margin-top:7px}.goods-info .sale-info .goods-sale[data-v-6baebe9c]{white-space:nowrap}.goods-info .sale-info .store-name[data-v-6baebe9c]{height:19px;text-align:right;max-width:110px;text-overflow:clip\n  /* overflow: hidden; */}.goods-info .btn[data-v-6baebe9c]{box-sizing:border-box;font-size:16px;height:38px;line-height:36px;border:1px solid #e3544c;color:#e3544c;margin-top:5px;padding:0 40px;text-align:center;-webkit-user-select:none;user-select:none;border-radius:2px;-webkit-transition:all .2s;transition:all .2s;cursor:pointer}.goods-info .btn[data-v-6baebe9c]:hover{color:#fff;background-color:#e3544c;border:1px solid #fff}\n\n/* 88888 */.goods-info .data-info .data-block .data-price[data-v-6baebe9c]{color:#151516;font-size:15px;font-weight:700}.goods-info .data-info .data-block .data-text[data-v-6baebe9c]{color:#9c9c9c;font-size:12px;line-height:24px;font-weight:400;margin-top:-1px}.singleGroup[data-v-6baebe9c]{\n  /* position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 101; */display:-webkit-box;display:-webkit-flex;display:flex;\n  /* justify-content: space-between; */\n  /* color: #9c9c9c; */font-weight:400;margin-top:7px}.singleGroup > uni-text[data-v-6baebe9c]{border:1px solid #dbdbdb;background-color:initial;padding:5px 8px;cursor:pointer}.singleGroup uni-text[data-v-6baebe9c]:first-child{border-top-left-radius:3px;border-bottom-left-radius:3px;border-right-width:0}.singleGroup uni-text[data-v-6baebe9c]:last-child{border-top-right-radius:3px;border-bottom-right-radius:3px;border-left-width:0}.singleGroup > uni-text.active[data-v-6baebe9c]{color:#e3544c;border-color:#e3544c;border-width:1px}",""])},"2c4e":function(t,e,i){"use strict";var a=i("0400"),n=i.n(a);n.a},"305e":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"s-tab-wrap",class:{"is-active":t.isActive}},[i("div",{staticClass:"s-tab-panel"},[t._t("default")],2)])},s=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return s}),i.d(e,"a",function(){return a})},4434:function(t,e,i){var a=i("5141");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("fcd6ed90",a,!0,{sourceMap:!1,shadowMode:!1})},"469f":function(t,e,i){i("6c1c"),i("1654"),t.exports=i("7d7b")},"4f32":function(t,e,i){"use strict";i.r(e);var a=i("94e8"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},5141:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".s-tab-wrap[data-v-6d3a8e19]{width:100%;-webkit-flex-shrink:0;flex-shrink:0;box-sizing:border-box;height:0;overflow:hidden}.s-tab-wrap.is-active[data-v-6d3a8e19]{height:auto;overflow:visible}",""])},"51df":function(t,e,i){"use strict";i.r(e);var a=i("7bf9"),n=i("6bcc");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("e506");var o,r=i("f0c5"),l=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"f65eb540",null,!1,a["a"],o);e["default"]=l.exports},"5b03":function(t,e,i){"use strict";i.r(e);var a=i("129a"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},"5bd0":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".grid[data-v-f65eb540]{padding-top:10px}",""])},"5d42":function(t,e,i){"use strict";i.r(e);var a=i("0eb3"),n=i("6972");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("2c4e");var o,r=i("f0c5"),l=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"723daaea",null,!1,a["a"],o);e["default"]=l.exports},"5d73":function(t,e,i){t.exports=i("469f")},"5dd9":function(t,e,i){"use strict";i.r(e);var a=i("7bc1"),n=i("4f32");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("7649");var o,r=i("f0c5"),l=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"6baebe9c",null,!1,a["a"],o);e["default"]=l.exports},6972:function(t,e,i){"use strict";i.r(e);var a=i("e8d1"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},"6bcc":function(t,e,i){"use strict";i.r(e);var a=i("f678"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},7649:function(t,e,i){"use strict";var a=i("ca26"),n=i.n(a);n.a},"768b":function(t,e,i){"use strict";i.r(e);var a=i("a745"),n=i.n(a);function s(t){if(n()(t))return t}var o=i("5d73"),r=i.n(o);function l(t,e){var i=[],a=!0,n=!1,s=void 0;try{for(var o,l=r()(t);!(a=(o=l.next()).done);a=!0)if(i.push(o.value),e&&i.length===e)break}catch(c){n=!0,s=c}finally{try{a||null==l["return"]||l["return"]()}finally{if(n)throw s}}return i}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,e){return s(t)||l(t,e)||c()}i.d(e,"default",function(){return u})},"7bc1":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"grid"},t._l(t.lists,function(e,a){return i("v-uni-view",{key:a,staticClass:"grid-c-06"},[i("v-uni-view",{staticClass:"panel img-wrapper",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetail(e)}}},[i("div",{attrs:{height:"224",offset:"800",placeholder:"[object Object]"}},[i("img",{staticClass:"light",attrs:{src:(e.text.goodsThumbnailUrl||e.text.goodsImageUrl)+"@15w_1l_50Q.JP2",alt:" "}})]),i("div",{attrs:{height:"224"}},[i("img",{staticClass:"normal",attrs:{src:(e.text.goodsThumbnailUrl||e.text.goodsImageUrl)+"@500w_1l_50Q.JP2",alt:" "}})]),i("img",{staticClass:"animation-img",staticStyle:{transform:"translate(0px, 0px)"},attrs:{src:e.text.goodsThumbnailUrl||e.text.goodsImageUrl}})]),i("v-uni-view",{staticClass:"panel2 goods-info"},[i("v-uni-view",{staticClass:"card-bottm row"},[i("v-uni-view",{staticClass:"car-title-view row"},[i("v-uni-text",{staticClass:"card-title card-list2-title"},[t._v(t._s(e.text.mallName))])],1)],1),i("v-uni-view",{staticClass:"goods-title clear-fix"},[i("v-uni-text",{staticClass:"text"},[t._v(t._s(e.text.goodsName||""))])],1),i("v-uni-view",{staticClass:"data-info"},[i("v-uni-view",{staticClass:"data-block"},[i("v-uni-text",{staticClass:"data-price left-align"},[i("v-uni-text",{staticClass:"unit"},[t._v("￥")]),i("v-uni-text",{staticClass:"unit-left"},[t._v(t._s((e.text.minGroupPrice-e.text.couponMinOrderAmount)/1e3))])],1),i("v-uni-text",{staticClass:"data-text"},[t._v("券后")])],1),i("v-uni-view",{staticClass:"data-block"},[i("v-uni-text",{staticClass:"data-price right-align"},[i("v-uni-text",{staticClass:"unit"},[t._v("￥")]),i("v-uni-text",{staticClass:"unit-left"},[t._v(t._s(e.text.minGroupPrice/1e3))])],1),i("v-uni-text",{staticClass:"data-text"},[t._v("券前")])],1)],1),i("v-uni-view",{staticClass:"label-info"},[i("v-uni-view",{staticClass:"coupons-info"},[i("v-uni-view",{staticClass:"coupon-discount"},[t._v(t._s(e.text.couponMinOrderAmount/1e3)+"元券")]),i("v-uni-view",{staticClass:"coupon-surplus"},[t._v("剩"+t._s(e.text.couponRemainQuantity)+"张")])],1)],1),i("v-uni-view",{staticClass:"singleGroup"},[i("v-uni-text",{class:{active:!e.status},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.labelClick(e,0)}}},[t._v("单人团")]),i("v-uni-text",{class:{active:e.status},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.labelClick(e,1)}}},[t._v("双人团")])],1),i("v-uni-view",{staticClass:"sale-info"},[i("v-uni-view",{staticClass:"goods-sale"},[t._v("销量"+t._s(e.text.salesTip))])],1),i("v-uni-view",{staticClass:"btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDetail(e)}}},[t._v("立即领取")])],1)],1)}),1)},s=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return s}),i.d(e,"a",function(){return a})},"7bf9":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"index"},[i("s-tabs",{attrs:{isLoadMore:t.restuestOk,"nav-per-view":5},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},t._l(t.titleList,function(t,e){return i("s-tab",{key:e,attrs:{title:t.name}})}),1),i("productList",{attrs:{lists:t.lists},on:{labelClick:function(e){arguments[0]=e=t.$handleEvent(e),t.labelClick.apply(void 0,arguments)}}}),t.isLoadMore?i("v-uni-text",{staticClass:"loadMore"},[t._v("加载中...")]):t._e(),t.isLoadMore||t.lists.length?t._e():i("v-uni-image",{staticClass:"imgNoData",attrs:{src:"../../static/no-data1.png",mode:"aspectFit"}}),t.isLoadMore||t.lists.length?t._e():i("v-uni-text",{staticClass:"imgtext"},[t._v("暂无数据")])],1)},s=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return s}),i.d(e,"a",function(){return a})},"7d7b":function(t,e,i){var a=i("e4ae"),n=i("7cd6");t.exports=i("584a").getIterator=function(t){var e=n(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return a(e.call(t))}},"94e8":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("f499")),s={name:"s-tabs",props:{lists:{type:Array,default:[]}},data:function(){return{providerList:[]}},computed:{},created:function(){var t=this;uni.getProvider({service:"share",success:function(e){for(var i=[],a=0;a<e.provider.length;a++)switch(e.provider[a]){case"weixin":i.push({name:"分享到微信好友",id:"weixin"}),i.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline"});break;case"qq":i.push({name:"分享到QQ",id:"qq"});break;default:break}t.providerList=i},fail:function(t){console.log("获取登录通道失败",t)}})},methods:{goDetail:function(t){console.log(t),uni.navigateTo({url:"../detail/detail?data="+encodeURIComponent((0,n.default)(t))})},toDetail:function(t){t.status?window.open(t.url.multiGroupMobileUrl):window.open(t.url.mobileUrl)},labelClick:function(t,e){this.$emit("labelClick",t,e)},share:function(t){var e=this;if(console.log(t.text.goodsName),0!==this.providerList.length){var i=this.providerList.map(function(t){return t.name});uni.showActionSheet({itemList:i,success:function(i){uni.share({provider:e.providerList[i.tapIndex].id,scene:e.providerList[i.tapIndex].type&&"WXSenceTimeline"===e.providerList[i.tapIndex].type?"WXSenceTimeline":"WXSceneSession",type:0,title:"多多优惠券",summary:t.text.goodsName,imageUrl:t.text.goodsThumbnailUrl||t.text.goodsImageUrl,href:"http://www.hjeee.com.cn?id="+t.id,success:function(t){console.log("success:"+(0,n.default)(t))},fail:function(t){uni.showModal({content:t.errMsg,showCancel:!1})}})}})}else uni.showModal({title:"当前环境无分享渠道!",showCancel:!1})}}};e.default=s},"9e6d":function(t,e,i){"use strict";i.r(e);var a=i("305e"),n=i("5b03");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("11fa");var o,r=i("f0c5"),l=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"6d3a8e19",null,!1,a["a"],o);e["default"]=l.exports},ca26:function(t,e,i){var a=i("12c3");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("d9e232ae",a,!0,{sourceMap:!1,shadowMode:!1})},cd82:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".s-tabs[data-v-723daaea]{width:100%;position:relative;overflow-x:hidden;font-size:%?28?%}.s-tabs-nav-wrap[data-v-723daaea]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;white-space:nowrap}.s-tabs-nav-wrap .scroll-view[data-v-723daaea]{height:100%;position:relative}.s-tabs-nav-wrap .scroll-view[data-v-723daaea] ::-webkit-scrollbar{display:none}.s-tabs-nav-wrap .scroll-view[data-v-723daaea] .uni-scroll-view > div{height:100%}.s-tabs .s-tab-nav[data-v-723daaea]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;height:100%;font-size:%?28?%;padding:0 %?30?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;box-sizing:border-box;cursor:pointer}.s-tabs .s-tab-line[data-v-723daaea]{position:absolute;bottom:0;border-radius:%?6?%;-webkit-transition:all .3s;transition:all .3s}.s-tabs-content-wrap[data-v-723daaea]{display:-webkit-box;display:-webkit-flex;display:flex;white-space:nowrap}.s-tabs-content-wrap s-tab[data-v-723daaea]{width:100%;-webkit-flex-shrink:0;flex-shrink:0;box-sizing:border-box}",""])},e506:function(t,e,i){"use strict";var a=i("e920"),n=i.n(a);n.a},e8d1:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac6a");var n=a(i("768b")),s=a(i("e814"));i("c5f6");var o={name:"s-tabs",props:{customClass:{type:String,default:""},value:{type:Number,default:0},color:{type:String,default:"#333"},activeColor:{type:String,default:"#406BDC"},height:{type:Number,default:80},navPerView:{type:[Number,String],default:"auto"},effect:{type:Boolean,default:!1},duration:{type:Number,default:.3},line:{type:Boolean,default:!0},lineColor:{type:String,default:"#406BDC"},lineHeight:{type:Number,default:4},lineScale:{type:Number,default:.6},isLoadMore:{type:Object,default:void 0}},data:function(){return{scrollLeft:0,lineWidth:0,lineLeft:0,navList:[]}},computed:{navWidth:function(){var t=(0,s.default)(this.navPerView);return isNaN(t)?"auto":100/t+"%"},transform:function(){return"transform: translate3d(".concat(-100*this.value,"%, 0, 0);")},transition:function(){return this.effect?"transition-duration: ".concat(this.duration,"s;"):""}},provide:function(){return{$tabs:this}},watch:{value:function(t){this.refreshLine(),this.$emit("change",t)}},methods:{navClick:function(t){void 0!=this.isLoadMore&&t!==this.value&&this.$emit("input",t)},refreshLine:function(){var t=this;this.line&&this.$nextTick(function(){var e=function(){return uni.createSelectorQuery().in(t)};e().select(".s-tabs-nav-wrap").boundingClientRect().exec(function(i){var a=(0,n.default)(i,1),s=a[0],o=s.width,r=0,l=0,c=0;e().selectAll(".s-tab-nav").boundingClientRect().exec(function(e){var i=(0,n.default)(e,1),a=i[0];a.forEach(function(e,i){i<=t.value&&(c=e.width,r+=e.width),l+=e.width}),r-=c,t.scrollLeft=Math.min(Math.max(l-o,0),Math.max(0,r-(o-c)/2)),t.lineWidth=c*t.lineScale,t.lineLeft=r+(c-t.lineWidth)/2})})})}},mounted:function(){this.refreshLine()}};e.default=o},e920:function(t,e,i){var a=i("5bd0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("63fa0a1c",a,!0,{sourceMap:!1,shadowMode:!1})},f678:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("f499"));i("6b54");var s=a(i("5d42")),o=a(i("9e6d")),r=a(i("5dd9")),l={components:{sTabs:s.default,sTab:o.default,productList:r.default},data:function(){return{refreshing:!1,lists:[],fetchPageNum:1,pageSize:10,activeTab:0,type:"百货",isLoadMore:!0,restuestOk:void 0,titleList:[{name:"百货"},{name:"母婴"},{name:"食品"},{name:"女装"},{name:"电器"},{name:"鞋包"},{name:"内衣"},{name:"美妆"},{name:"男装"},{name:"水果"},{name:"家纺"},{name:"文具"},{name:"运动"},{name:"虚拟"},{name:"汽车"},{name:"家装"},{name:"家具"},{name:"医药"}]}},onLoad:function(){var t=this;this.getData(),uni.getProvider({service:"share",success:function(e){for(var i=[],a=0;a<e.provider.length;a++)switch(e.provider[a]){case"weixin":i.push({name:"分享到微信好友",id:"weixin"}),i.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline"});break;case"qq":i.push({name:"分享到QQ",id:"qq"});break;default:break}t.providerList=i},fail:function(t){console.log("获取登录通道失败",t)}})},onPullDownRefresh:function(){this.lists=[],this.refreshing=!0,this.getData()},onReachBottom:function(){this.getData()},methods:{change:function(t){this.type=this.titleList[t].name,this.isLoadMore=!0,this.fetchPageNum=1,this.lists=[],this.getData()},labelClick:function(t,e){e?this.$set(t,"status",!0):this.$set(t,"status",!1)},getData:function(){var t=this;this.restuestOk=void 0,this.isLoadMore=!0,uni.request({url:this.$serverUrl+"/duojinbao/facai/page?pageNumber="+(this.refreshing?1:this.fetchPageNum)+"&pageSize="+this.pageSize+"&type="+this.type,method:"GET",success:function(e){var i=e.data;if(console.log(i),t.restuestOk=e.data||void 0,200!==i.code)console.log("请求失败:",i);else{if(t.isLoadMore&&(t.fetchPageNum-1)*t.pageSize+i.data.length>=i.count)return t.isLoadMore=!1,void uni.stopPullDownRefresh();if(i.data.length<=0)return uni.showToast({title:"列表为空",icon:"none"}),t.refreshing=!1,void uni.stopPullDownRefresh();for(var a=[],n=i.data,s=0,o=n.length;s<o;s++){var r=n[s];r.guid=t.newGuid()+r.id,a.push(r)}console.log("得到list",a),t.refreshing?(t.refreshing=!1,uni.stopPullDownRefresh(),t.lists=a,t.fetchPageNum=2):(t.isLoadMore=!0,t.lists=t.lists.concat(a),t.fetchPageNum+=1),console.log(t.lists,"data")}},fail:function(e){uni.showModal({content:"请求失败，请重试!",showCancel:!1}),t.isLoadMore=!1,t.restuestOk={}}})},newGuid:function(){var t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return(t()+t()+"-"+t()+"-4"+t().substr(0,3)+"-"+t()+"-"+t()+t()+t()).toUpperCase()},goDetail:function(t){uni.navigateTo({url:"../detail/detail?data="+encodeURIComponent((0,n.default)(t))})},share:function(t){var e=this;if(0!==this.providerList.length){var i=this.providerList.map(function(t){return t.name});uni.showActionSheet({itemList:i,success:function(i){uni.share({provider:e.providerList[i.tapIndex].id,scene:e.providerList[i.tapIndex].type&&"WXSenceTimeline"===e.providerList[i.tapIndex].type?"WXSenceTimeline":"WXSceneSession",type:0,title:"uni-app模版",summary:t.title,imageUrl:t.img_src,href:"https://uniapp.dcloud.io",success:function(t){console.log("success:"+(0,n.default)(t))},fail:function(t){uni.showModal({content:t.errMsg,showCancel:!1})}})}})}else uni.showModal({title:"当前环境无分享渠道!",showCancel:!1})}}};e.default=l}}]);