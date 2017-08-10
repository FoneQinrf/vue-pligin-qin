<template>
	<!--
    	作者：1164498684@qq.com
    	时间：2017-08-09
    	描述：选项卡
    		<Tab :title="Tab.tabTitle" :color="Tab.color">
			<div style="width: 33.3%;">
				1<br />
				1<br />
				1<br />
				1<br />
				1<br />
			</div>
			<div style="width: 33.3%;">
				2<br />
				2<br />
				2<br />
				2<br />
				2<br />
			</div>
			<div style="width: 33.3%;">
				3<br />
				3<br />
				3<br />
				3<br />
				3<br />
			</div>
		</Tab>
		1.内容处接受父组件分发过来的内容
		2.title是选项卡选项的个数 数据类型为数组 {title:'选项名',isShow:'是否默认被选中true or false'} 
		3.color被选中下划线颜色
		注：slot被分发的内容必须要平分100%
    -->
	<div class="Tab">
		<div class="Tab-title">
			{{translateX}}
			<ul>
				<li v-for="item,$index in title" :style="{width:count+'%'}" @click="clickTab($index)">{{item.title}}<span v-if="item.isShow" :style="{background:color}"></span></li>
			</ul>
		</div>
		<div :style="{width:width+'%',transform:translate}" class="info clearFix">
			<slot>

			</slot>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				count: '',
				width: ''
			}
		},
		props: ['title', 'color'],
		beforeMount: function() {
			if(this.title.length <= 4) {
				this.count = 100 / this.title.length
				this.width = 100 * this.title.length
			} else {
				console.error('数组过长')
			}
			/*for(let i=0;i<this.title.length){
				
			}*/
		},
		methods: {
			clickTab: function(index) {
				for(let i = 0; i < this.title.length; i++) {
					this.title[i].isShow = false
				}
				this.title[index].isShow = true
			}
		},
		computed: {
			translate(){
				for(let i = 0;i<this.title.length;i++){
					if(this.title[i].isShow){
						return 'translateX('+(-100/this.title.length)*i+'%)'
						break
					}
				}
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.Tab {
		width: 100%;
		height: 100%;
		overflow: hidden;
		.info {
			position: absolute;
			transition: all .5s ease;
			div {
				float: left;
			}
		}
	}
	
	.Tab-title {
		width: 90%;
		position: relative;
		margin: auto;
		border-bottom: 1px solid #DCDCDC;
		ul {
			display: block;
			width: 100%;
			li {
				display: inline-block;
				text-align: center;
				height: 35px;
				line-height: 35px;
				position: relative;
				color: #666666;
				span {
					display: block;
					width: 90%;
					height: 2px;
					position: relative;
					top: -1px;
					margin: auto;
				}
			}
		}
	}
</style>