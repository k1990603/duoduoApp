
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/new/new","pages/hotIndex/hotIndex","pages/detail/detail","pages/hot/hot","pages/HM-search/HM-search","pages/webViews/webViews","pages/center/center"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"看图","navigationBarBackgroundColor":"#FF80AB","backgroundColor":"#EFEFEF"},"tabBar":{"color":"#444444","selectedColor":"#FF80AB","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/new/new","iconPath":"static/index-0.png","selectedIconPath":"static/index-1.png","text":"精选"},{"pagePath":"pages/hotIndex/hotIndex","iconPath":"static/hot-0.png","selectedIconPath":"static/hot-1.png","text":"推荐"},{"pagePath":"pages/hot/hot","iconPath":"static/tag-0.png","selectedIconPath":"static/tag-1.png","text":"分类"}]},"networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"splashscreen":{"alwaysShowBeforeRender":false,"autoclose":true},"appname":"多多优惠券","compilerVersion":"2.6.5","entryPagePath":"pages/new/new"};
var __uniRoutes = [{"path":"/pages/new/new","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"精选","enablePullDownRefresh":true}},{"path":"/pages/hotIndex/hotIndex","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"推荐","enablePullDownRefresh":true}},{"path":"/pages/detail/detail","meta":{},"window":{"navigationBarTitleText":"详情","navigationBarBackgroundColor":"#000000","backgroundColor":"#000000","bounce":"none","titleNView":{"buttons":[{"type":"share"}]}}},{"path":"/pages/hot/hot","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"分类","enablePullDownRefresh":true}},{"path":"/pages/HM-search/HM-search","meta":{},"window":{"navigationBarTitleText":"搜索","enablePullDownRefresh":false}},{"path":"/pages/webViews/webViews","meta":{},"window":{"navigationBarTitleText":"跳转拼多多...","enablePullDownRefresh":false}},{"path":"/pages/center/center","meta":{},"window":{"navigationBarTitleText":"下载中心","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,window:void 0}}}});
