<template>
	<!--
    	作者：1164498684@qq.com
    	时间：2017-08-10
    	描述：<Popup :dalog="dalog" :title="title" @close="close">
			<div style="min-height: 150px;">
				<p>可自定义DOM结构</p>
			</div>
			</Popup>
			1.dalog 是否开启  参数 true false
			2.title 标题
			3.@close 关闭
    -->
	<transition name="fadeIn">
		<div class="Popup" v-if="dalog">
			<div class="content">
				<div class="title"><span>{{title}}</span>
					<svg class="icon close" aria-hidden="true" @click="close">
						<use xlink:href="#icon-guanbi"></use>
					</svg>
				</div>
				<slot>

				</slot>
			</div>
		</div>
	</transition>
</template>

<script>
	import '../../icon-js/close.js'
	export default {
		props: ['dalog', 'title'],
		methods: {
			close() {
				this.$emit('close')
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.Popup {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 1000000;
		top: 0;
		background: rgba(0, 0, 0, 0.4);
	}
	
	.content {
		width: 100%;
		position: absolute;
		bottom: 0;
		background: #FFF;
	}
	
	.title {
		height: 35px;
		border-bottom: 1px solid #DCDCDC;
		line-height: 35px;
		span {
			display: inline-block;
			padding-left: 20px;
			font-size: 14px;
			color: #666;
		}
		svg {
			display: inline-block;
			width: 15px;
			height: 15px;
			position: absolute;
			right: 10px;
			top: 8px;
		}
	}
	
	.fadeIn-enter-active {
		transition: all .5s ease;
	}
	
	.fadeIn-enter {
		transform: translateY(100%);
		opacity: 0;
	}
	
	.fadeIn-leave-active {
		transition: all .5s ease;
	}
	
	.fadeIn-leave-to {
		transform: translateY(100%);
		opacity: 0;
	}
</style>