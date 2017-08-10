<template>
	<div>
		<span @click="show('top')">上</span><span @click="show('content')">中</span>
		<topls :dalog="dalog" :msg="msg" :position="position" @close="close"></topls>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				dalog: false,
				msg: '提示信息',
				position:''
			}
		},
		methods: {
			close() {
				this.dalog = false
			},
			show:function(val) {
				this.dalog = true
				this.position=val
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	span{
		display: block;
		width: 100px;
		height: 35px;
		text-align: center;
		line-height: 35px;
		background: aliceblue;
	}
</style>