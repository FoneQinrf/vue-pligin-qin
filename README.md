# vue-pligin-qin

第一次写插件，喜欢的可以star,该插件主要针对于手机端

# npm install vue-plugin-qin -g
# import plugin from 'vue-plugin-qin'
# Vue.use(plugin)

1.layer
  ```<layer :dalog="dalog" @close="close" :msg="msg"></layer>```
  </br>dalog：控制开启关闭   close：关闭方法  msg：接受的参数
  </br>示例代码：```<layer :dalog="dalog" @close="close" :msg="msg"></layer>```
  <pre>js
         export default {
            data() {
              return {
                dalog: false,
                msg: '提示信息'
              }
            },
            methods: {
              close() {
                this.dalog = false
              },
              show(){
                this.dalog = true
              }
            }
          }
    </pre> 
2.```<loding :dalog="dalog" :type="type" :color="color"></loding>```
    </br>1. dalog控制否是显示
    </br>2. type选择加载的动画类型
    </br>3. color加载动画的颜色
  </br>示例代码：```<loding :dalog="dalog" :type="type" :color="color"></loding>```
 <pre>js
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
   </pre>       
 3.```<Popup :dalog="dalog" :title="title" @close="close">```
			<div style="min-height: 150px;">
				<p>可自定义DOM结构</p>
	    </div>
	</Popup>
    </br>1.dalog 是否开启  参数 true false
    </br>2.title 标题
    </br>3.@close 关闭
   </br> 示例代码：```<Popup :dalog="dalog" :title="title" @close="close">
                <div style="min-height: 150px;">
                  <p>可自定义DOM结构</p>
                </div>
            </Popup>```
<pre> js
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
    </pre>
4.选项卡
    		```<Tab :title="Tab.tabTitle" :color="Tab.color">
          <div style="width: 33.3%;">
            1
          </div>
          <div style="width: 33.3%;">
            2
          </div>
          <div style="width: 33.3%;">
            3
          </div>
        </Tab>```
		</br>1.内容处接受父组件分发过来的内容
		</br>2.title是选项卡选项的个数 数据类型为数组 {title:'选项名',isShow:'是否默认被选中true or false'} 
		</br>3.color被选中下划线颜色
		</br>注：slot被分发的内容必须要平分100%
    </br>示例代码：
<pre> js
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
  </pre>      
5.```<topls :dalog="dalog" :msg="msg" :position="position" @close="close"></topls>```
  </br>dalog:开启关闭  msg:接受的提示参数   position: top为顶部出现  content为中间弹出  close:关闭方法
  </br>示例代码：
<pre>js
      export default {
        data() {
          return {
            dalog: false,
            msg: '提示信息',
            position:''
          }
        },
        methods: {
          close() {
            this.dalog = false
          },
          show:function(val) {
            this.dalog = true
            this.position=val
          }
        }
      }
</pre>

