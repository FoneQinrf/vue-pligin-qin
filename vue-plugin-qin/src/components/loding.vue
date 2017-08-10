<template>
	<div class="loding clearFix">
		<div>
			<div class="show">
				<loding :dalog="dalog" :type="type" :color="color"></loding>
			</div>
			<div class="button">
				<span v-for="item,$index in 4" @click="types($index+1)">type={{$index+1}}</span>
				<p><span @click="show">开启</span>
					<span @click="close">关闭</span></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				type: 1,
				dalog: true,
				color:'#FF6700'
			}
		},
		methods: {
			types:function(val){
				this.type = val
			},
			show(){
				this.dalog = true
			},
			close(){
				this.dalog = false
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.loding {
		>div {
			width: 100%;
			height: 300px;
			.show{
				position: relative;
				height: 80px;
			}
			.button {
				>span {
					display: inline-block;
					height: 30px;
					padding: 0 5px;
					background: darkgrey;
					color: #FFF;
					line-height: 30px;
					margin-left: 20px;
					border-radius: 4px;
				}
				>p {
					margin-top: 20px;
					text-align: center;
					>span {
						display: inline-block;
						height: 30px;
						padding: 0 5px;
						background: darkgrey;
						color: #FFF;
						line-height: 30px;
						border-radius: 4px;
					}
				}
			}
		}
	}
</style>