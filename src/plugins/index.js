// 整个包的入口
// 统一导出
import '../components/icon/font.scss'
import Button from '../components/button/index.js'
import ButtonGroup from '../components/button-group/index.js'
import Icon from '../components/icon/index.js'
import Radio from '../components/radio/index.js'
import RadioRroup from '../components/radio-group/index.js'
import Model from '../components/model/index.js'
import Drawer from '../components/drawer/index.js'
const CainUI = [
    Button,
    Icon,
    ButtonGroup,
    Radio,
    RadioRroup,
    Model,
    Drawer
]

// 定义install方法
const install = function(Vue){
    // 注册所有的组件
    CainUI.forEach((component)=>{
        Vue.component(component.name,component);
    })
}

// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
  }
  

export default {
    install,
}
