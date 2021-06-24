// 整个包的入口
// 统一导出
import "../assets/fonts/iconfont.js";
import "../style/base.scss"
import Button from "../components/button/index.js";
import ButtonGroup from "../components/button-group/index.js";
import Icon from "../components/icon/index.js";
import Radio from "../components/radio/index.js";
import RadioRroup from "../components/radio-group/index.js";
import Model from "../components/model/index.js";
import Drawer from "../components/drawer/index.js";
import Carousel from "../components/carousel/index.js";
import CarouselItem from "../components/carousel-item/index.js";
import Switch from "../components/switch/index.js";
import Input from "../components/input/index.js";
import FromItem from "../components/fromitem/index.js";
import Form from "../components/from/index";
import Container from "../components/container/index.js";
import Header from "../components/header/index.js";
import Main from "../components/main/index.js";
import Footer from "../components/footer/index.js";
import Aside from "../components/aside/index.js";
import Message from "../components/message/index.js";
import Transition from "../components/transition/index.js";
import Menu from "../components/menu/index.js";
import MenuItem from "../components/menuitem/index.js";
import SubMenu from "../components/submenu/index.js";
import Breadcrumb from "../components/breadcrumb/index.js";
import BreadcrumbItem from "../components/breadcrumbitem/index.js";
import Checkbox from "../components/checkbox/index.js";
import CheckboxGroup from "../components/checkboxgroup/index.js";
import Card from "../components/card/index.js";
import CardGrid from "../components/card-grid/index.js"
import Tag from '../components/tag/index.js'
import Dropdown from '../components/dropdown/index.js'
import Textarea from '../components/textarea/index.js'
const CainUI = [
  Button,
  Icon,
  ButtonGroup,
  Radio,
  RadioRroup,
  Model,
  Drawer,
  Carousel,
  CarouselItem,
  Switch,
  Input,
  FromItem,
  Form,
  Container,
  Header,
  Main,
  Footer,
  Aside,
  Transition,
  Menu,
  MenuItem,
  SubMenu,
  Breadcrumb,
  BreadcrumbItem,
  Checkbox,
  CheckboxGroup,
  Card,
  CardGrid,
  Tag,
  Dropdown,
  Textarea
];

// export {};
// 定义install方法
const install = function(Vue) {
  // 注册所有的组件
  CainUI.forEach(component => {
    Vue.component(component.name, component);
  });
  Vue.use(Message);
};

// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

// 按需引入

export default {
  install,
  Button,
  Icon,
  ButtonGroup,
  Radio,
  RadioRroup,
  Model,
  Drawer,
  Carousel,
  CarouselItem,
  Switch,
  Input,
  FromItem,
  Form,
  Container,
  Header,
  Main,
  Footer,
  Aside,
  Transition,
  Menu,
  MenuItem,
  SubMenu,
  Breadcrumb,
  BreadcrumbItem,
  Checkbox,
  CheckboxGroup,
  Card
};
