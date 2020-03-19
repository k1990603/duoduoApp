<template>
	<view class="index">
		<view class="search-box clear-fix" @click='toSearch'>
		  <image class="search-image fl" src="../../static/home-search.png"></image>
		  <view class="search-font fl">{{ searchName ? searchName : '搜索您想要的商品' }}</view>
		</view>
		<productList :lists="lists" @labelClick="labelClick"></productList>
		<text v-if="isLoadMore" class="loadMore">加载中...</text>
		<!-- <text>{{ !isLoadMore && !lists.length }}</text> -->
		<image v-if="!isLoadMore && !lists.length" class="imgNoData" src="../../static/no-data1.png" mode="aspectFit" />
		<text v-if="!isLoadMore && !lists.length" class="imgtext">暂无数据</text>
	</view>
</template>

<script>
	import productList from '../../components/product-list/index.vue'
	export default {
		data() {
			return {
				refreshing: false,
				lists: [],
				fetchPageNum: 1,
				pageSize: 10,
				isLoadMore: true,
				activeTab: 0,
				searchName: ''
			}
		},
		components: {
			productList
		},
		onShow(){
			let that = this
			uni.getStorage({
			    key: 'productName',
			    success: function (res) {
			        console.log(res.data, 'product');
					if (res.data) {
						that.searchName = res.data || ''
						that.getData();
					}
			    }
			});
		},
		onLoad(option) {
			let id = option.id
			//#ifdef H5
				var sUserAgent = navigator.userAgent.toLowerCase();
				if (!(/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent))) {
				  if (id) {
				    window.location.href="http://www.hjeee.com.cn?id=" + id;
				  } else {
				    window.location.href="http://www.hjeee.com.cn";
				  }
				  return;
				}
			//#endif
			if (id) {
				this.getData(id);
			} else {
				this.getData();
			}
			// uni.getProvider({
			// 	service: 'share',
			// 	success: (e) => {
			// 		let data = [];
			// 		for (let i = 0; i < e.provider.length; i++) {
			// 			switch (e.provider[i]) {
			// 				case 'weixin':
			// 					data.push({
			// 						name: '分享到微信好友',
			// 						id: 'weixin'
			// 					});
			// 					data.push({
			// 						name: '分享到微信朋友圈',
			// 						id: 'weixin',
			// 						type: 'WXSenceTimeline'
			// 					});
			// 					break;
			// 				case 'qq':
			// 					data.push({
			// 						name: '分享到QQ',
			// 						id: 'qq'
			// 					});
			// 					break;
			// 				default:
			// 					break;
			// 			}
			// 		}
			// 		this.providerList = data;
			// 	},
			// 	fail: (e) => {
			// 		console.log('获取登录通道失败', e);
			// 	}
			// });
		},
		onPullDownRefresh() {
			// console.log('下拉刷新');
			let that = this
			uni.removeStorage({
			    key: 'productName',
			    success: function (res) {
			        // console.log('success');
					that.lists = []
					that.searchName = '';
					// that.isLoadMore = true;
					that.refreshing = true;
					that.getData();
			    }
			});
		},
		onReachBottom() {
			this.getData();
		},
		methods: {
			toSearch() {
					uni.navigateTo({
						url: '../HM-search/HM-search'
					})
			},
			labelClick(item, status) {
			      if (status) {
			        this.$set(item, 'status', true)
			      } else {
			        this.$set(item, 'status', false)
			      }
			    },
			getData(id) {
				let urlData =''
				// console.log(id, 'id')
				let serverUrl = this.$serverUrl
				let pageNumber = this.refreshing ? 1 : this.fetchPageNum
				let pageSize = this.pageSize
				let name = this.searchName
				if (id) {
					urlData = `${serverUrl}/duojinbao/facai/page?pageNumber=${pageNumber}&pageSize=${pageSize}&type=精选&name= ${name}&id=${id}`
				} else {
					// urlData = this.$serverUrl + '/duojinbao/facai/page?pageNumber=' + (this.refreshing ? 1 : this.fetchPageNum) +
					// 		'&pageSize='+ this.pageSize +'&type=精选&name=' + this.searchName
					urlData = `${serverUrl}/duojinbao/facai/page?pageNumber=${pageNumber}&pageSize=${pageSize}&type=精选&name=${name}`
				}
				this.isLoadMore = true;
				uni.request({
					url: urlData,
					// url: this.$serverUrl + '/duojinbaon/facai/page?pageNumber=' + (this.refreshing ? 1 : this.fetchPageNum) +
					// 	'&pageSize='+ this.pageSize +'&type=精选',
					method: 'GET',
					sslVerify: false,
					success: (res) => {
						let ret = res.data
						console.log(ret)
						if (ret.code !== 200) {
							console.log('请求失败:', ret)
						} else {
							// console.log(ret.data.length, res.count, 222)
							if (this.isLoadMore && (((this.fetchPageNum-1)*this.pageSize + ret.data.length) >= ret.count)) {
								// console.log(1111)
								this.isLoadMore = false;
								uni.stopPullDownRefresh();
								// this.refreshing = false;
								return;
							}
							// console.log(ret.data.length, 8888)
							if (ret.data.length <= 0) {
								uni.showToast({
									title: '没有更多数据',
									icon: 'none',
								});
								this.refreshing = false;
								uni.stopPullDownRefresh();
								return;
							}
							// if (this.refreshing && ret.data[0].id === this.lists[0].id) {
							// 	uni.showToast({
							// 		title: '已经最新',
							// 		icon: 'none',
							// 	});
							// 	this.refreshing = false;
							// 	uni.stopPullDownRefresh();
							// 	return;
							// }
							let list = [],
								data = ret.data;
							for (let i = 0, length = data.length; i < length; i++) {
								var item = data[i];
								item.guid = this.newGuid() + item.id
								list.push(item);
							}
							console.log('得到list', list, this.refreshing);
							if (this.refreshing) {
								this.refreshing = false;
								uni.stopPullDownRefresh()
								this.lists = list;
								this.fetchPageNum = 2;
							} else {
								this.isLoadMore = true
								this.lists = this.lists.concat(list);
								this.fetchPageNum += 1;
							}
						}
					},
					fail: (e) => {
						console.log(e, 'error')
						uni.showModal({
							content: '请求失败，请重试!',
							showCancel: false
						})
						this.isLoadMore = false
					}
				});
			},
			newGuid() {
				let s4 = function() {
					return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
				}
				return (s4() + s4() + "-" + s4() + "-4" + s4().substr(0, 3) + "-" + s4() + "-" + s4() + s4() + s4()).toUpperCase();
			},
			// goDetail(e) {
			// 	console.log(e)
			// 	uni.navigateTo({
			// 		url: '../detail/detail?data=' + encodeURIComponent(JSON.stringify(e))
			// 	})
			// },
			// share(e) {
			// 	if (this.providerList.length === 0) {
			// 		uni.showModal({
			// 			title: '当前环境无分享渠道!',
			// 			showCancel: false
			// 		})
			// 		return;
			// 	}
			// 	let itemList = this.providerList.map(function(value) {
			// 		return value.name
			// 	})
			// 	uni.showActionSheet({
			// 		itemList: itemList,
			// 		success: (res) => {
			// 			uni.share({
			// 				provider: this.providerList[res.tapIndex].id,
			// 				scene: this.providerList[res.tapIndex].type && this.providerList[res.tapIndex].type === 'WXSenceTimeline' ?
			// 					'WXSenceTimeline' : 'WXSceneSession',
			// 				type: 0,
			// 				title: '多多优惠券',
			// 				summary: e.title,
			// 				imageUrl: e.img_src,
			// 				href: 'http://www.hjeee.com.cn',
			// 				success: (res) => {
			// 					console.log('success:' + JSON.stringify(res));
			// 				},
			// 				fail: (e) => {
			// 					uni.showModal({
			// 						content: e.errMsg,
			// 						showCancel: false
			// 					})
			// 				}
			// 			});
			// 		}
			// 	})
			// }
		}
	}
</script>

<style lang="scss">
	.grid {
		padding-top: 10px;
		}
	.index {
		.search-box {
		  width: 720upx;
		  height: 72upx;
		  background-color: #fafdff;
		  border-radius: 4px;
		  opacity: 0.9;
		  margin-top: 30upx;
		  // position: absolute;
		  // left: 15upx;
		  // top: 196upx;
		  // right: 15upx;
		}
		
		.search-box .search-image {
		  width: 40upx;
		  height: 40upx;
		  margin-left: 223upx;
		  margin-top: 15upx;
		}
		
		.search-box .search-font {
		  font-size: 28upx;
		  line-height: 40upx;
		  color: #898f94;
		  margin-right: 223upx;
		  margin-top: 17upx;
		  margin-left: 11upx;
		}
	}
</style>
