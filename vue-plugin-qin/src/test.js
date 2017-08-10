const myPlugin = {
	install(Vue,options){
		console.log(Vue)
		Vue.mixin({
			mounted(){
				console.log('执行')
			}
		})
	}
}

export default myPlugin