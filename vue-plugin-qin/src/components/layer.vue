<template>
	<div>
		<span @click="show()">开启</span>
		<layer :dalog="dalog" @close="close" :msg="msg"></layer>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				dalog: false,
				msg: '提示信息'
			}
		},
		methods: {
			close() {
				this.dalog = false
			},
			show(){
				this.dalog = true
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	span {
		display: block;
		width: 100px;
		height: 35px;
		text-align: center;
		line-height: 35px;
		background: aliceblue;
	}
</style>