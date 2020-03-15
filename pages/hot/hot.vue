<template>
	<view class="index">
		<s-tabs v-model="activeTab" @change="change" :isLoadMore="restuestOk" :nav-per-view="5">
			<s-tab v-for="(item, index) in titleList" :key="index" :title="item.name"></s-tab>
		</s-tabs>
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
		<productList :lists="lists" @labelClick="labelClick"></productList>
		<text v-if="isLoadMore" class="loadMore">加载中...</text>
		<image v-if="!isLoadMore && !lists.length" class="imgNoData" src="../../static/no-data1.png" mode="aspectFit" />
		<text v-if="!isLoadMore && !lists.length" class="imgtext">暂无数据</text>
	</view>
</template>

<script>
	import sTabs from '../../components/s-tabs/index.vue'
	import sTab from '../../components/s-tab/index.vue'
	import productList from '../../components/product-list/index.vue'
	export default {
		components: {
			sTabs,
			sTab,
			productList
		},
		data() {
			return {
				refreshing: false,
				lists: [],
				fetchPageNum: 1,
				pageSize: 10,
				activeTab: 0,
				type: '推荐',
				isLoadMore: true,
				restuestOk: undefined,
				titleList: [
					// {
					// 	name: '精选'
					// },
					// {
					// 	name: '推荐'
					// },
					{
						name: '清仓'
					},
					{
						name: '百货'
					},
					{
						name: '母婴'
					},
					{
						name: '食品'
					},
					{
						name: '女装'
					},
					{
						name: '电器'
					},
					{
						name: '鞋包'
					},
					{
						name: '内衣'
					},
					{
						name: '美妆'
					},
					{
						name: '男装'
					},
					{
						name: '水果'
					},
					{
						name: '家纺'
					},
					{
						name: '文具'
					},
					{
						name: '运动'
					},
					{
						name: '虚拟'
					},
					{
						name: '汽车'
					},
					{
						name: '家装'
					},
					{
						name: '家具'
					},
					{
						name: '医药'
					},
				],
			}
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
			change(index) {
				this.type = this.titleList[index].name;
				this.isLoadMore = true
				this.fetchPageNum = 1;
				this.lists = [];
				this.getData();
			},
			labelClick(item, status) {
			      if (status) {
			        this.$set(item, 'status', true)
			      } else {
			        this.$set(item, 'status', false)
			      }
			    },
			getData() {
				this.restuestOk = undefined
				uni.request({
					// url: this.$serverUrl + '/api/picture/posts.php?page=' + (this.refreshing ? 1 : this.fetchPageNum) +
					// 	'&per_page=10',
					url: this.$serverUrl + '/duojinbao/facai/page?pageNumber=' + (this.refreshing ? 1 : this.fetchPageNum) +
						'&pageSize='+ this.pageSize +'&type=' + this.type,
					method: 'GET',
					// sslVerify: false,
					success: (res) => {
						let ret = res.data
						console.log(ret)
						this.restuestOk = res.data || undefined
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
							console.log('得到list', list);
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
							console.log(this.lists, 'data')
						}
					},
					fail: (e) => {
						uni.showModal({
							content: '请求失败，请重试!',
							showCancel: false
						})
						this.isLoadMore = false
						this.restuestOk = {}
					}
				});
			},
			newGuid() {
				let s4 = function() {
					return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
				}
				return (s4() + s4() + "-" + s4() + "-4" + s4().substr(0, 3) + "-" + s4() + "-" + s4() + s4() + s4()).toUpperCase();
			},
			goDetail(e) {
				uni.navigateTo({
					url: '../detail/detail?data=' + encodeURIComponent(JSON.stringify(e))
				})
			},
			share(e) {
				if (this.providerList.length === 0) {
					uni.showModal({
						title: '当前环境无分享渠道!',
						showCancel: false
					})
					return;
				}
				let itemList = this.providerList.map(function(value) {
					return value.name
				})
				uni.showActionSheet({
					itemList: itemList,
					success: (res) => {
						uni.share({
							provider: this.providerList[res.tapIndex].id,
							scene: this.providerList[res.tapIndex].type && this.providerList[res.tapIndex].type === 'WXSenceTimeline' ?
								'WXSenceTimeline' : 'WXSceneSession',
							type: 0,
							title: 'uni-app模版',
							summary: e.title,
							imageUrl: e.img_src,
							href: 'https://uniapp.dcloud.io',
							success: (res) => {
								console.log('success:' + JSON.stringify(res));
							},
							fail: (e) => {
								uni.showModal({
									content: e.errMsg,
									showCancel: false
								})
							}
						});
					}
				})
			}
		}
	}
</script>

<style>
	.grid {
		padding-top: 10px;
	}
</style>
