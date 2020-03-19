<template>
	<view>
		<web-view :src="url">
			<!-- <text>正在跳转拼多多APP...</text> -->
		</web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: ''
			}
		},
		onLoad() {
			let that = this
			uni.getStorage({
			    key: 'urlName',
			    success: function (res) {
			        // console.log(res.data, 'product');
					that.url = res.data || '/'
			    }
			});
		},
		methods: {
		}
	}
</script>

<style>
	page,
	view {
		display: flex;
	}
</style>
