<template>
	<view class="grid">
		<view class="grid-c-06" v-for="(item, index) in lists" :key="index">
			<view class="panel" @click="goDetail(item)">
				<!-- <div height="224" offset="800" placeholder="[object Object]">
					<img :src="(item.text.goodsThumbnailUrl || item.text.goodsImageUrl)+'@15w_1l_50Q.JP2'" alt=" " class="light" />
				</div>
				<div height="224">
					<img :src="(item.text.goodsThumbnailUrl || item.text.goodsImageUrl)+'@500w_1l_50Q.JP2'" alt=" " class="normal" />
				</div> -->
				<!-- <img class="animation-img" :src="(item.text.goodsThumbnailUrl || item.text.goodsImageUrl)" style="transform: translate(0px, 0px);" /> -->
				<image class="card-img card-list2-img" :src="(item.text.goodsThumbnailUrl || item.text.goodsImageUrl)+'@500w_1l_50Q.JP2'"></image>
				<!-- <text class="card-num-view card-list2-num-view">{{item.img_num}}P</text>
  			<view class="card-bottm row">
  				<view class="car-title-view row">
  					<text class="card-title card-list2-title">{{item.title}}</text>
  				</view>
  				<view @click.stop="share(item)" class="card-share-view"></view>
  			</view> -->
			</view>
			<view class="panel2 goods-info">
				<!-- <view class="card-bottm row">
					<view class="car-title-view row">
						<text class="card-title card-list2-title">{{item.title}}</text>
					</view>
					<view @click.stop="share(item)" class="card-share-view"></view>
				</view> -->
				<view class="card-bottm row">
					<view class="car-title-view row">
						<text class="card-title card-list2-title">{{ item.text.mallName }}</text>
					</view>
					<view @click.stop="share(item)" class="card-share-view"></view>
				</view>
				<view class="goods-title clear-fix">
					<text class="text">{{ item.text.goodsName || '' }}</text>
				</view>
				<view class="data-info">
					<view class="data-block">
						<text class="data-price left-align">
							<text class="unit">￥</text><text class="unit-left">11.0</text>
						</text>
						<text class="data-text">券后</text>
					</view>
					<view class="data-block"></view>
					<view class="data-block">
						<text class="data-price right-align">
							<text class="unit">￥</text><text class="unit-left">{{ item.text.minGroupPrice/1000 }}</text>
						</text>
						<text class="data-text">券前</text>
					</view>
				</view>
				<view class="label-info">
					<view class="coupons-info">
						<view class="coupon-discount">{{ item.text.couponMinOrderAmount/1000 }}元券</view>
						<view class="coupon-surplus">剩{{ item.text.couponRemainQuantity }}张</view>
					</view>
				</view>
				<view class="singleGroup">
					<text :class="{'active': !item.status}" @click="labelClick(item, 0)">单人团</text><text :class="{'active': item.status}"
					 @click="labelClick(item, 1)">双人团</text>
				</view>
				<view class="sale-info">
					<view class="goods-sale">销量{{ item.text.salesTip }}</view>
					<!-- <view class="store-name">{{ item.text.mallName }}</view> -->
				</view>
				<view class="btn" @click="toDetail(item)">立即领取</view>
				<!-- <view class="card-bottm row">
  				<view class="car-title-view row">
  					<text class="card-title card-list2-title">{{item.title}}</text>
  				</view>
  				<view @click.stop="share(item)" class="card-share-view"></view>
  			</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 's-tabs',
		props: {
			lists: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				scrollLeft: 0,
				lineWidth: 0,
				lineLeft: 0,
				navList: []
			};
		},
		computed: {

		},
		provide() {
			return {
				$tabs: this
			};
		},
		methods: {
			goDetail(e) {
				console.log(e)
				uni.navigateTo({
					url: '../detail/detail?data=' + encodeURIComponent(JSON.stringify(e))
				})
			},
			toDetail(item) {
			      if (item.status) {
			        // 双人
			        // window.open(item.url.multiGroupLongUrl)
			        window.open(item.url.multiGroupMobileUrl)
			      } else {
			        // 单人
			        // window.open(item.url.longUrl)
			        window.open(item.url.mobileUrl)
			      }
			    },
			labelClick(item, status) {
				this.$emit('labelClick', item, status)
				// if (status) {
				//   this.$set(item, 'status', true)
				// } else {
				//   this.$set(item, 'status', false)
				// }
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
							title: '多多优惠券',
							summary: e.title,
							imageUrl: e.img_src,
							href: 'http://www.hjeee.com.cn',
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
		},
		mounted() {

		}
	};
</script>

<style lang="scss">
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
