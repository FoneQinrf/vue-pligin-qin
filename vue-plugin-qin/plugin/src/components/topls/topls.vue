<template>
	<!--
    	作者：1164498684@qq.com
    	时间：2017-08-09
    	描述：topls  
    	 <topls :dalog="dalog" :msg="msg" :position="position" @close="close"></topls>
    	 dalog:开启关闭  msg:接受的提示参数   position: top为顶部出现  content为中间弹出  close:关闭方法
    -->
	<transition :name="name">
		<div :class="[position=='top' ? tops : content]" v-if="dalog">
			<p>
				{{msg}}
			</p>
		</div>
	</transition>
</template>

<script>
	export default {
		data() {
			return {
				name: 'fadeIn',
				tops: 'topls top',
				content: 'topls content'
			}
		},
		props: ['dalog', 'msg', 'position'],
		watch: {
			dalog(val) {
				if(this.position === 'top') {
					this.name = 'fadeIn'
				} else {
					this.name = 'contentIn'
				}
				if(val) {
					setTimeout(() => {
						this.$emit('close')
					}, 2000)
				}
			}
		},
		beforeMount: function() {
			if(this.position === 'top') {
				this.name = 'fadeIn'
			} else {
				this.name = 'contentIn'
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.topls {
		position: absolute;
		z-index: 10000000;
		width: 100%;
		height: 40px;
		p {
			display: block;
			width: 80%;
			height: 40px;
			margin: auto;
			font-size: 16px;
			text-align: center;
			line-height: 40px;
			background: rgba(220, 220, 220, 0.9);
			color: #666666;
		}
	}
	
	.top {
		top: 0;
	}
	
	.content {
		top: 45%;
	}
	
	.fadeIn-enter-active {
		transition: all .5s ease;
	}
	
	.fadeIn-enter {
		transform: translateY(-100%);
		opacity: 0;
	}
	
	.fadeIn-leave-active {
		transition: all .5s ease;
	}
	
	.fadeIn-leave-to {
		transform: translateY(-100%);
		opacity: 0;
	}
	
	.contentIn-enter-active {
		animation: contentIn 0.7s;
	}
	
	.contentIn-leave-active {
		animation: contentOut 1s;
	}
	
	@keyframes contentOut {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
	
	@keyframes contentIn {
		0% {
			opacity: 0;
			-webkit-transform: scale(.3);
			-ms-transform: scale(.3);
			transform: scale(.3)
		}
		50% {
			opacity: 1;
			-webkit-transform: scale(1.05);
			-ms-transform: scale(1.05);
			transform: scale(1.05)
		}
		70% {
			-webkit-transform: scale(.9);
			-ms-transform: scale(.9);
			transform: scale(.9)
		}
		100% {
			opacity: 1;
			-webkit-transform: scale(1);
			-ms-transform: scale(1);
			transform: scale(1)
		}
	}
</style>