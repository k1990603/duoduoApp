<template>
	<view class="index">
		<productList :lists="lists" @labelClick="labelClick"></productList>
		<!-- <view class="grid">
			<view class="grid-c-06" v-for="item in lists" :key="item.guid">
				<view class="panel" @click="goDetail(item)">
					<image class="card-img card-list2-img" :src="item.img_src"></image>
					<text class="card-num-view card-list2-num-view">{{item.img_num}}P</text>
					<view class="card-bottm row">
						<view class="car-title-view row">
							<text class="card-title card-list2-title">{{item.title}}</text>
						</view>
						<view @click.stop="share(item)" class="card-share-view"></view>
					</view>
				</view>
			</view>
		</view> -->
		<text v-if="isLoadMore" class="loadMore">加载中...</text>
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
		onLoad() {
			this.getData();
		},
		components: {
			productList
		},
		onPullDownRefresh() {
			// console.log('下拉刷新');
			this.lists = [];
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
				this.isLoadMore = true;
				uni.request({
					// url: this.$serverUrl + '/api/picture/posts.php?page=' + (this.refreshing ? 1 : this.fetchPageNum) +
					// 	'&per_page=10',
					url: this.$serverUrl + '/duojinbao/facai/page?pageNumber=' + (this.refreshing ? 1 : this.fetchPageNum) +
						'&pageSize=10&type=推荐',
					method: 'GET',
					sslVerify: false,
					success: (res) => {
						// console.log(ret)
						let ret = res.data
						if (ret.code !== 200) {
							console.log('请求失败:', ret)
						} else {
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
							console.log('得到list', list);
							if (this.refreshing) {
								this.refreshing = false;
								uni.stopPullDownRefresh()
								this.lists = list;
								this.fetchPageNum = 2;
							} else {
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
			// 				title: 'uni-app模版',
			// 				summary: e.title,
			// 				imageUrl: e.img_src,
			// 				href: 'https://uniapp.dcloud.io',
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
</style>
