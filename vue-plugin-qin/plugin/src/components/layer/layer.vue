<template>
	<!--
    	作者：1164498684@qq.com
    	时间：2017-08-09
    	描述：带遮罩层的弹出层
    	<layer :dalog="dalog" @close="close" :msg="msg"></layer>
    	dalog：控制开启关闭   close：关闭方法  msg：接受的参数
    -->
	<transition name="bounceIn">
		<div class="layer" v-if="dalog" @click="close">
			<div class="layer-war">
				<div class="layer-title">
					<span>消息</span>
					<svg class="icon close" aria-hidden="true" @click="close">
						<use xlink:href="#icon-guanbi"></use>
					</svg>
				</div>
				<div class="layer-content">
					<p>{{msg}}</p>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import '../../icon-js/close.js'
	export default {
		props: ['dalog', 'msg'],
		methods: {
			close() {
				this.$emit('close')
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	@import url("../../config/styles/config.less");
	.layer {
    position: absolute;
    z-index: 10000000;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    .layer-war {
        width: 70%;
        height: 100px;
        background: #FFF;
        border-radius: @horn-5;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    .layer-title {
        position: relative;
        border-bottom: 1px solid #dcdcdc;
        height: 30px;
        span {
            display: inline-block;
            padding-left: 10px;
            height: 30px;
            line-height: 30px;
        }
        svg {
            display: inline-block;
            height: 30px;
            position: absolute;
            right: 5px;
        }
    }
    .layer-content {
        text-align: center;
        height: 70px;
        line-height: 70px;
        p {
            color: #666;
        }
    }
}

.bounceIn-enter-active {
    animation: bounceIn 1s;
}

@keyframes bounceIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.bounceIn-leave-active {
    animation: bounceOut 1s;
}

@keyframes bounceOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
</style>