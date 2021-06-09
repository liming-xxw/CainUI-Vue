import Vue from 'vue'
import Notification from './notification.vue'
const NoticeContructor = Vue.extends(Notification);
export default function notice(option){
    const instance = new NoticeContructor();
    instance.$mount();
    document.body.appendChild(instance.$el)
    return instance;
}
