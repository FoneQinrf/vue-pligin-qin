<template>
	<div id="app">
		<div class="type">
			<router-link to="/Tab">选项卡(Tab)</router-link>
			<router-link to="/layer">弹出层(layer)</router-link>
			<router-link to="/topls">提示层(topls)</router-link>
			<router-link to="/popup">Popup</router-link>
			<router-link to="/loding">loding</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				dalog: false,
				msg: '提示信息',
				position:'content',
				Tab:{
					tabTitle:[
						{
							title:'1',
							isShow:false
						},
						{
							title:'2',
							isShow:true
						},{
							title:'3',
							isShow:false
						}
					],
					color:'#42B983'
				}
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

<style lang="less">
	.type{
		width: 100%;
		border-bottom: 1px solid #DCDCDC;
		padding: 20px 0;
		a{
			display: inline-block;
			padding: 5px 5px;
			text-decoration: none;
		}
	}
	.link{
		color: darkgoldenrod;
	}
</style>