<template>
	<div>
		<span @click="show">开启</span>
		<Popup :dalog="dalog" :title="title" @close="close">
			<div style="min-height: 150px;">
				<p>可自定义DOM结构</p>
			</div>
		</Popup>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				dalog: false,
				title: "操作"
			}
		},
		methods: {
			close() {
				this.dalog = false
			},
			show() {
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
	
	.circular {
		-webkit-animation: rotate 2s linear infinite;
		animation: rotate 2s linear infinite;
		height: 100%;
		-webkit-transform-origin: center center;
		transform-origin: center center;
		width: 100%;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}
	
	.path {
		stroke-dasharray: 1, 200;
		stroke-dashoffset: 0;
		-webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
		animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
		stroke-linecap: round;
	}
</style>