<template>
	<view class="index">
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
				activeTab: 0
			}
		},
		components: {
			productList
		},
		onLoad() {
			this.getData();
			uni.getProvider({
				service: 'share',
				success: (e) => {
					let data = [];
					for (let i = 0; i < e.provider.length; i++) {
						switch (e.provider[i]) {
							case 'weixin':
								data.push({
									name: '分享到微信好友',
									id: 'weixin'
								});
								data.push({
									name: '分享到微信朋友圈',
									id: 'weixin',
									type: 'WXSenceTimeline'
								});
								break;
							case 'qq':
								data.push({
									name: '分享到QQ',
									id: 'qq'
								});
								break;
							default:
								break;
						}
					}
					this.providerList = data;
				},
				fail: (e) => {
					console.log('获取登录通道失败', e);
				}
			});
		},
		onPullDownRefresh() {
			console.log('下拉刷新');
			this.refreshing = true;
			this.getData();
		},
		onReachBottom() {
			this.getData();
		},
		methods: {
			labelClick(item, status) {
			      if (status) {
			        this.$set(item, 'status', true)
			      } else {
			        this.$set(item, 'status', false)
			      }
			    },
			getData() {
				uni.request({
					// url: this.$serverUrl + '/api/picture/posts.php?page=' + (this.refreshing ? 1 : this.fetchPageNum) +
					// 	'&per_page=10',
					url: this.$serverUrl + '/duojinbao/facai/page?pageNumber=' + (this.refreshing ? 1 : this.fetchPageNum) +
						'&pageSize='+ this.pageSize +'&type=精选',
					// url: this.$serverUrl + '/duojinbaon/facai/page?pageNumber=' + (this.refreshing ? 1 : this.fetchPageNum) +
					// 	'&pageSize='+ this.pageSize +'&type=精选',
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
									title: '列表为空',
									icon: 'none',
								});
								this.refreshing = false;
								uni.stopPullDownRefresh();
								return;
							}
							if (this.refreshing && ret.data[0].id === this.lists[0].id) {
								uni.showToast({
									title: '已经最新',
									icon: 'none',
								});
								this.refreshing = false;
								uni.stopPullDownRefresh();
								return;
							}
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

<style>
	.grid {
		padding-top: 10px;
	}
	/* 11111 */
	.goods-info {
	  font-size: 12px;
	  position: relative;
	  overflow: hidden;
	  /* width: 100%; */
	  /* height: 172px; */
	  /* height: 190px; */
	  padding: 0 10px 10px;
	  box-sizing: border-box;
	  color: #59585b;
	}
	.goods-info .goods-title {
	  color: #333;
	  margin-top: 10px;
	  display: flex;
	  align-items: center;
	}
	.goods-info .goods-title .text {
	  font-size: 13px;
	  line-height: 16px;
	  /* height: 16px; */
	  padding-bottom: 3px;
	  /* flex: 1; */
	  /* overflow: hidden; */
	}
	/* 2222 */
	.goods-info .data-info {
		display: flex;
		margin-top: 7px;
	}

	.goods-info .label-info {
		height: 17px;
		display: flex;
		font-weight: 400;
		margin-top: 8px;
		white-space: nowrap;
	}

	.goods-info .label-info .coupons-info {
		display: flex;
		box-sizing: border-box;
		margin-right: 4px;
	}

	.goods-info .label-info .coupons-info .coupon-discount {
		font-size: 12px;
		color: #fff;
		background-color: #e3544c;
		border-radius: 1px 0 0 1px;
		padding: 0 1px 0 2px;
	}

	.goods-info .label-info .coupons-info .coupon-surplus {
		line-height: 15px;
		display: inline-block;
		position: relative;
		color: #e3544c;
		font-size: 12px;
		padding: 0 2px;
		border-radius: 0 1px 1px 0;
		border: 1px solid #e3544c;
	}

	.goods-info .sale-info {
		display: flex;
		justify-content: space-between;
		color: #9c9c9c;
		font-weight: 400;
		margin-top: 7px;
	}

	.goods-info .sale-info .goods-sale {
		white-space: nowrap;
	}

	.goods-info .sale-info .store-name {
		height: 19px;
		text-align: right;
		max-width: 110px;
		text-overflow: clip;
		/* overflow: hidden; */
	}

	.goods-info .btn {
		box-sizing: border-box;
		font-size: 16px;
		height: 38px;
		line-height: 36px;
		border: 1px solid #e3544c;
		color: #e3544c;
		margin-top: 5px;
		text-align: center;
		user-select: none;
		border-radius: 2px;
		transition: all 0.2s;
		cursor: pointer;
	}

	.goods-info .btn:hover {
		color: #fff;
		background-color: #e3544c;
		border: 1px solid #ffffff;
	}

	/* 88888 */
	.goods-info .data-info .data-block .data-price {
		color: #151516;
		font-size: 15px;
		font-weight: 700;
	}

	.goods-info .data-info .data-block .data-text {
		color: #9c9c9c;
		font-size: 12px;
		font-weight: 400;
		margin-top: -1px;
	}

	.singleGroup {
		/* position: absolute;
	  top: 0;
	  left: 0;
	  z-index: 101; */
		display: flex;
		/* justify-content: space-between; */
		/* color: #9c9c9c; */
		font-weight: 400;
		margin-top: 7px;
	}

	.singleGroup>text {
		border: 1px solid #dbdbdb;
		background-color: transparent;
		padding: 5px 8px;
		cursor: pointer;
	}

	.singleGroup text:first-child {
		border-top-left-radius: 3px;
		border-bottom-left-radius: 3px;
		border-right-width: 0;
	}

	.singleGroup text:last-child {
		border-top-right-radius: 3px;
		border-bottom-right-radius: 3px;
		border-left-width: 0;
	}

	.singleGroup>text.active {
		color: #E3544C;
		border-color: #E3544C;
		border-width: 1px;
	}
</style>
