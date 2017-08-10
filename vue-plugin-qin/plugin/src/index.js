import './config/styles/base.less'
import layer from './components/layer/layer'
import topls from './components/topls/topls'
import Tab from './components/tabs/tabs'
import Popup from './components/popup/popup'
import loding from './components/loding/loding'

const components = {
	layer,
	topls,
	Tab,
	Popup,
	loding
}

const myPlugin = {
	install(Vue, options) {
		Object.keys(components).forEach((key) => {
			Vue.component(key, components[key])
		})
	}
}

export default myPlugin

if(typeof window !== 'undefined' && window.Vue)
	window.Vue.use(MyPlugin)