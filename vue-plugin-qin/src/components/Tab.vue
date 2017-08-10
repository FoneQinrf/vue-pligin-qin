<template>
	<div class="hello">
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
	</div>
</template>

<script>
		export default {
			name: 'app',
			data() {
				return {
					Tab: {
						tabTitle: [{
								title: '1',
								isShow: false
							},
							{
								title: '2',
								isShow: true
							}, {
								title: '3',
								isShow: false
							}
						],
						color: '#42B983'
					}
				}
			}
		}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>